import React from "react";
import "./VideoItem.css";

class videoItemHelper extends React.Component {
  getIframeBySuorce = () => {
    let sourceType = this.props.videoItem.source;
    let id = !this.props.videoItem.videoId
      ? undefined
      : this.props.videoItem.videoId;
    let iframe;

    if (sourceType === "youtube") {
      return (
        let src = "https://www.youtube.com/embed/" + id;
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/"
          src
        />
      );
    } else if (sourceType === "facebook") {
    } else if (sourceType === "facebook") {
    } else {
    }
    return iframe;
  };

  render() {
    return <div>{this.getIframeBySuorce()}</div>;
  }
}

export default videoItemHelper;
