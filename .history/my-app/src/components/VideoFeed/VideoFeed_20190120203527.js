import React from "react";
import "./VideoFeed.css";
import FilterSource from "../FilterSuorce/FilterSource";
import { faAllergies } from "@fortawesome/free-solid-svg-icons";
import VideoItem from "../VideoItem/VideoItem";

class VideoFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suorce: undefined,
      error: undefined,
      videos: undefined,
      isLoading: true,
      fetchFrom: "/videos"
    };
  }

  componentDidMount() {
    this.fetchVideos();
  }
  fetchVideos(e) {
    let url = this.state.fetchFrom;
    if (e && !e === "") {
      let suorce = e.currentTarget.dataset.source;
      this.setState({
        source: suorce
      });
      url = this.state.fetchFrom + "/" + suorce;
    } else if (e === "") {
      this.setState({
        source: undefined
      });
    }
    // Where we're fetching data from url
    fetch(url)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(
        data =>
          this.setState({
            videos: data,
            isLoading: false
          }),
        console.log(this.state.videos)
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, videos, error } = this.state;

    return (
      <React.Fragment>
        <FilterSource fetchVideos={this.fetchVideos.bind(this)} />
        <div className={"videoList"}>
          {!isLoading ? (
            videos.map((videoItem, index) => (
              <div className="col-md-6 col-md-offset-3" key={index}>
                <VideoItem videoItem={videoItem} />
              </div>
            ))
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default VideoFeed;
