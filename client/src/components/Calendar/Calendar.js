import React, { Component } from "react";
import Calendar from "react-calendar";
import moment from "moment";
// import { componentFromProp } from "recompose";
// import { jsonEval } from "@firebase/util";

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // note from ry, 2019-01-24 -- the "-1" in the month section is because javascript starts counting
  // months (and ONLY months) from month 0
  // month 0 = january; month 11 = december

  // in order to get from Moment months (counted 1-12) to js months (0-11), moment month - 1 = js month

  render() {
    const monthOffset = 6;
    const year = parseInt(
      moment()
        .add(monthOffset, "months")
        .format("YYYY")
    );
    const month =
      parseInt(
        moment()
          .add(monthOffset, "months")
          .format("MM")
      ) - 1;
    const day = parseInt(
      moment()
        .add(monthOffset, "months")
        .format("DD")
    );

    return (
      <div>
        <Calendar
          value={this.state.date}
          onChange={this.props.onChange}
          view={"month"}
          minDate={new Date()}
          maxDate={new Date(year, month, day)}
        />
      </div>
    );
  }
}

export default MyCalendar;
