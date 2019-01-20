import React from "react";
import "./VideoItem.css";

class videoItemHelper extends React.Component {
  getIframeBySuorce = () => {
    let sourceType = this.props.videoItem.source;
    let id = !this.props.videoItem.videoId
      ? undefined
      : this.props.videoItem.videoId;
    let iframe;
    let src;

    if (sourceType === "youtube") {
      src = "https://www.youtube.com/embed/" + id;
      return <iframe className="embed-responsive-item" src={src} />;
    } else if (sourceType === "facebook") {
      src = "https://www.facebook.com/facebook/videos/" + id;
      return (
        <iframe
          className="fb-video embed-responsive-item"
          data-href={src}
          data-show-text="false"
        />
      );
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
