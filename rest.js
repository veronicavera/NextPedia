//rest.js
//
var config = require("./SACSConfig");
var auth = require("./auth");
var Client = require('node-rest-client').Client;
var qs = require('querystring');

module.exports = {
	get : function(request, response, eventEmitter) {
		console.log("Rest's GET function: event=%s", request.event);
		return auth.getAuthString()
			.then(function(authData) {
				var args = {
					headers : {"Authorization":"Bearer " + authData},
					parameters : request.query
				};
				var client = new Client();
				var url = "";
				if (request.directUrl !== null) {
					url = request.directUrl;
					args.parameters = null;
				} else {
					url = config.environment + request.service;
				}
				console.log("\t url: %s", url);
				return client.get(url, args, function(data, responseData) {
					response[request.event] = data;
					console.log("\t going on to event %s", request.nextEvent);
					eventEmitter.emit(request.nextEvent);
				});
		});
		
	},
	post : function(request, response, eventEmitter) {
		console.log("Rest's POST function: event=%s", request.event);
		return auth.getAuthString()
			.then(function(authData) {
			var args = {
				headers : {Authorization:"Bearer " + authData,
					"Content-Type":"application/json",
					Accept:"*/*"
				},
				data : request.query
			};
			var client = new Client();
			var url = "";
			if (request.directUrl !== null) {
				url = request.directUrl;
				args.parameters = null;
			} else {
				url = config.environment + request.service;
			}
			console.log("\t url: %s", url);
			return client.post(url, args, function(data, responseData) {
				response[request.event] = data;
				console.log("\t going on to event %s", request.nextEvent);
				eventEmitter.emit(request.nextEvent);
			});
		});
	}
};