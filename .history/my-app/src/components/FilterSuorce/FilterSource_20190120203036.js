import React from "react";
import "./FilterSuorce.css";

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
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.props.fetchVideos}
            data-source="facebook"
          >
            Facebook
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.props.fetchVideos}
            data-source="youtube"
          >
            Youtube
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.props.fetchVideos}
            data-source="url"
          >
            Url
          </button>
        </div>
      </div>
    );
  }
}

export default FilterSource;
