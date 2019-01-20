import React from "react";
import "./FilterSuorce.css";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink, faUndoAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FilterSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suorce: undefined
    };
  }

  handleClick(e) {
    let sSource = e.currentTarget.attributes["source"].value;
    //this.props.setState = { source: sSource };
    console.log(sSource);
    //VideoFeed.props.source = e.currentTarget.attributes["source"].value;
  }

  render() {
    return (
      <div className="">
        <div class="btn-group btngr" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.props.fetchVideos}
            data-source="facebook"
          >
            <FontAwesomeIcon class="icon" icon={faFacebook} size="1x" />
            Facebook
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.props.fetchVideos}
            data-source="youtube"
          >
            <FontAwesomeIcon class="icon" icon={faYoutube} size="1x" />
            Youtube
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.props.fetchVideos}
            data-source="url"
          >
            <FontAwesomeIcon class="icon" icon={faLink} size="1x" />
            Url
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.props.fetchVideos}
            data-source=""
          >
            <FontAwesomeIcon class="icon" icon={faUndoAlt} size="1x" />
            All
          </button>
        </div>
      </div>
    );
  }
}

export default FilterSource;
