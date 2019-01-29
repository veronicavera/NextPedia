import React from 'react';
import axios from "axios";


class FetchData extends React.Component {   
 
    state={
        tripName:[],
        tripId:[]
    }
    componentDidMount() {
     axios.get(`http://localhost:5000/api/trips/flightAficionado@ymail.com`)
       .then(res => {
        res.data[0].trips.map(trip=>{
            var x = this.state.tripName;
            var y= this.state.tripId;
            x.push(trip.tripName);
            y.push(trip._id);
            this.setState({tripName:x});
            this.setState({tripId:y});
            });
       });
    }
    
render(){
    const thStyle = {
        border: "1px solid gray",
        padding: "10px",
        textAlign: "center"
    }


    return(
    <> 
    {this.state.tripName.map((item,i)=>{
        
        return <tr>   
              <td style={thStyle}>{item}</td>
              <td style={thStyle} ><button className="btn btn-info" data-id={this.state.tripId[i]}>Manage trip</button></td>
              </tr>
            
    })}
        
        </>)
    }    
}  

export default FetchData;