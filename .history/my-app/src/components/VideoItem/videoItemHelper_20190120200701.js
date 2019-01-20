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
        <div
          className="embed-responsive-item fb-video"
          data-width="523"
          data-height="294"
          data-href={src}
          data-show-text="false"
        />
      );
    } else if (!sourceType === "url") {
      return (
        <video width="600" height="336" controls>
          <source src={props.url} />
        </video>
      );
    } else {
    }
    return iframe;
  };

  render() {
    return <div>{this.getIframeBySuorce()}</div>;
  }
}

export default videoItemHelper;