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
      let src = "https://www.youtube.com/embed/" + id;
      return <iframe className="embed-responsive-item" src={src} />;
    } else if (sourceType === "facebook") {
      let src = "https://www.facebook.com/facebook/videos/" + id;
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
