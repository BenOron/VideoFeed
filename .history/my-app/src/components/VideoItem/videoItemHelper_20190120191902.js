import React from "react";

class videoItemHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      $VideoSrc: ""
    };
  }
  createEmployee = function(suorceType) {
    let iframe;

    if (suorceType === "youtube") {
      iframe =
        '<iframe width="600" height="336" src="https://www.youtube.com/embed/"+{this.props.videoID}>';
    } else if (suorceType === "parttime") {
    } else if (suorceType === "temporary") {
    } else if (suorceType === "contractor") {
    }

    return iframe;
  };
}

export default videoItemHelper;
