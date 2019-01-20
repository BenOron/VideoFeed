import React from "react";
import "./VideoItem.css";

class videoItemHelper extends React.Component {
  getIframeBySuorce = () => {};

  render() {
    return (
      <div>
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowFullScreen
        />
      </div>
    );
  }
}

export default videoItemHelper;
