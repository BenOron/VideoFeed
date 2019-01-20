import React from "react";
import "./VideoItem.css";
import VideoItemHelper from "./videoItemHelper";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowAltCircleLeft,
  faCog,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class VideoItem extends React.Component {
  rotateCard(e) {
    var $card = e.target.closest(".card-container");
    console.log($card);
    if ($card.classList.value.search("hover") > -1) {
      $card.classList.remove("hover");
    } else {
      $card.classList.add("hover");
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="card-container manual-flip">
          <div className="card">
            <div className="front">
              <div className="content">
                <div className="headerfront">
                  <h5 className="motto">{this.props.videoItem.title}</h5>
                </div>
                <div className="embed-responsive embed-responsive-16by9" />
                <div className="footer">
                  <button className="btn btn-simple" onClick={this.rotateCard}>
                    <FontAwesomeIcon icon={faCog} size="1x" />
                    <span className="moresettings">More video settings</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="back">
              <div className="header">
                <h5 className="mottoback">
                  Settings: {this.props.videoItem.title} video
                </h5>
              </div>
              <div className="content">
                <form className="formSet">
                  Source:
                  {!this.props.videoItem.source ? (
                    <span>
                      this content is missing_
                      <FontAwesomeIcon icon={faExclamationTriangle} size="1x" />
                    </span>
                  ) : (
                    <input
                      disabled="disabled"
                      type="text"
                      value={" " + this.props.videoItem.source}
                    />
                  )}
                  <br />
                  url:
                  {!this.props.videoItem.url ? (
                    <span>
                      this content is missing_
                      <FontAwesomeIcon icon={faExclamationTriangle} size="1x" />
                    </span>
                  ) : (
                    <input
                      disabled="disabled"
                      type="text"
                      value={" " + this.props.videoItem.url}
                    />
                  )}
                  <br />
                  videoId:
                  {!this.props.videoItem.videoId ? (
                    <span>
                      this content is missing_
                      <FontAwesomeIcon icon={faExclamationTriangle} size="1x" />
                    </span>
                  ) : (
                    <input
                      disabled="disabled"
                      type="text"
                      value={" " + this.props.videoItem.videoId}
                    />
                  )}
                  `
                  <br />
                </form>
                <div className="footer">
                  <button
                    className="btn btn-simple"
                    rel="tooltip"
                    title="Flip Card"
                    onClick={this.rotateCard}
                  >
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size="1x" />
                    <i className="fa fa-reply" />
                  </button>
                  <div className="social-links text-center"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default VideoItem;
