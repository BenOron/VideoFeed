import React from "react";

class videoItemHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      $VideoSrc: ""
    };
  }
  factoryGetVideoIframe = () => {
    this.createEmployee = function(type) {
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

      employee.say = function() {
        log.add(this.type + ": rate " + this.hourly + "/hour");
      };

      return employee;
    };
  };
}

export default videoItemHelper;
