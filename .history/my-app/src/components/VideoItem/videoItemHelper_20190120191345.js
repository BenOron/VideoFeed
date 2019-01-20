import React from "react";

class videoItemHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      $VideoSrc: ""
    };
  }
  createEmployee = function(suorceType) {
    var employee;

    if (suorceType === "youtube") {
      el =
        '<iframe width="600" height="336" src="https://www.youtube.com/embed/"+{this.props.videoID}>';
    } else if (suorceType === "parttime") {
      employee = new PartTime();
    } else if (suorceType === "temporary") {
      employee = new Temporary();
    } else if (suorceType === "contractor") {
      employee = new Contractor();
    }

    employee.type = type;

    return employee;
  };
}

export default videoItemHelper;
