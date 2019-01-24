import React, { Component } from "react";
import Calendar from "react-calendar";

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <Calendar
          onChange={this.props.onChange}
          value={this.state.date}
          view={"month"}
          minDate={new Date()}
          maxDate={new Date(2019, 2, 1)}
        />
      </div>
    );
  }
}

export default MyCalendar;
