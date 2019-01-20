import React from "react";

class videoItemHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      $VideoSrc: ""
    };
  }
  createEmployee = function(type) {
    var employee;

    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }

    employee.type = type;

    return employee;
  };
}

export default videoItemHelper;
