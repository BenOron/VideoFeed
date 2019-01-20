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
        <a onClick={this.props.fetchVideos} data-source="facebook">
          facebook
        </a>
      </div>
    );
  }
}

export default FilterSource;
