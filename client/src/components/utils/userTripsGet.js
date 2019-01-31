import React from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
class FetchData extends React.Component {   
 
    state={
        tripName:[],
        tripId:[]
    }

    componentDidMount() {
        console.log(localStorage.getItem('user'))
     axios.get(`http://localhost:5000/api/trips/flightAficionado@ymail.com`) //should be changed on `/api/trips/`+localStorage.user when deployed on heroku and real data is gonna be used

       .then(res => {
           console.log(res.data[0])
           console.log(localStorage.user)
        res.data[0].trips.map(trip=>{
            var x = this.state.tripName;
            var y= this.state.tripId;
            x.push(trip.tripName);
            y.push(trip._id);
            console.log(y)
            this.setState({tripName:x});
            this.setState({tripId:y});
            });
       });
    }
    _handleButtonClick = (event) => {
        this.props.history.push("/tripdetails/"+event.target.getAttribute('data-id'))
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
              <td style={thStyle} ><button className="btn btn-info" data-id={this.state.tripId[i]} onClick={this._handleButtonClick}>Manage trip</button></td>
              </tr>
            
    })}
        
        </>)
    }    
}  

export default withRouter(FetchData);