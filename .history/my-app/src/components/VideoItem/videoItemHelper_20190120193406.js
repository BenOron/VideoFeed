import React from "react";
import "./VideoItem.css";

class videoItemHelper extends React.Component {
  getIframeBySuorce = () => {
    let iframe =
      '<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />';
    return iframe;
  };

  render() {
    return <div />;
  }
}

export default videoItemHelper;
