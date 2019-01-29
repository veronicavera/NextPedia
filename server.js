const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
var bodyParser = require('body-parser');
var events = require("events");
var rest = require("./rest");
var eventEmitter = new events.EventEmitter();
var fs = require('fs');
var qs = require('querystring');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var formValue = {};
var sharedContext = {};
var response;
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
} else {
    app.use(express.static(path.join(__dirname, '/client/public')));
}
/**
 * FLIGHT API STARTS HERE
 */
var bargainFinderMaxActivity = function () {
    console.log("BargainFinderMax");
    formValue.departureDateTime = formValue.departureDate + "T00:00:00";
    var requestObject = {
        event: "bfm",
        nextEvent: "end",
        service: "/v1.8.6/shop/flights?mode=live",
        query: {
            "OTA_AirLowFareSearchRQ": {
                "OriginDestinationInformation": [
                    {
                        "DepartureDateTime": formValue.departureDate + "T00:00:00",
                        "DestinationLocation": {
                            "LocationCode": formValue.destination
                        },
                        "OriginLocation": {
                            "LocationCode": formValue.origin
                        },
                        "RPH": "1"
                    }
                ],
                "POS": {
                    "Source": [
                        {
                            "RequestorID": {
                                "CompanyName": {
                                    "Code": "TN"
                                },
                                "ID": "REQ.ID",
                                "Type": "0.AAA.X"
                            }
                        }
                    ]
                },
                "TPA_Extensions": {
                    "IntelliSellTransaction": {
                        "RequestType": {
                            "Name": "50ITINS"
                        }
                    }
                },
                "TravelerInfoSummary": {
                    "AirTravelerAvail": [
                        {
                            "PassengerTypeQuantity": [
                                {
                                    "Code": "ADT",
                                    "Quantity": 1
                                }
                            ]
                        }
                    ]
                }
            }
        }
        ,
        directUrl: null

    };
    rest.post(requestObject, sharedContext, eventEmitter);

}
var instaFlightActivity = function () {
    console.log("InstaFlight");
    var requestObject = {
        event: "if",
        nextEvent: "bfm",
        service: "",
        directUrl: sharedContext["lpc"].FareInfo[0].Links[0].href
    };
    rest.get(requestObject, sharedContext, eventEmitter);
}
var leadPriceCalendarActivity = function () {
    console.log("LeadPriceCalendar");
    var requestObject = {
        event: "lpc",
        nextEvent: "if",
        service: "/v2/shop/flights/fares",
        query: formValue,
        directUrl: null
    };
    rest.get(requestObject, sharedContext, eventEmitter);
}
var workflowEnd = function () {
    var prettyResult = {
        lpc: {
            OriginLocation: sharedContext.lpc.OriginLocation,
            DestinationLocation: sharedContext.lpc.DestinationLocation,
            FareInfo: sharedContext.lpc.FareInfo[0]
        },
        "if": {
            FirstItinerary: sharedContext['if'].PricedItineraries[0].AirItinerary.OriginDestinationOptions.OriginDestinationOption[0]
        },
        bfm: {
            FirstItinerary: sharedContext.bfm //.OTA_AirLowFareSearchRS.PricedItineraries.PricedItinerary[0]
        }
    };
    //console.log(JSON.stringify(prettyResult));
    response.end(JSON.stringify(prettyResult));
}

eventEmitter.on("lpc", leadPriceCalendarActivity);
eventEmitter.on("if", instaFlightActivity);
eventEmitter.on("bfm", bargainFinderMaxActivity);
eventEmitter.on("end", workflowEnd);

app.post('/flights', urlencodedParser, function (req, res) {
    formValue = {
        origin: req.body.origin,
        destination: req.body.destination,
        departureDate: req.body.departureDate,
        lengthofstay: 5
    }
    eventEmitter.emit("lpc");

    console.log("Post END");
    response = res;

});

/* FLIGHT API ENDS HERE */

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nextpedia", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});