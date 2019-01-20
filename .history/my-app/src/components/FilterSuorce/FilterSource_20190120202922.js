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
          <button type="button" class="btn btn-secondary">
            Left
          </button>
          <button type="button" class="btn btn-secondary">
            Middle
          </button>
          <button type="button" class="btn btn-secondary">
            Right
          </button>
        </div>
        <a onClick={this.props.fetchVideos} data-source="facebook">
          facebook
        </a>
      </div>
    );
  }
}

export default FilterSource;
