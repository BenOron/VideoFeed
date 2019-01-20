import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import VideoFeed from "./components/VideoFeed/VideoFeed";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <VideoFeed />
        </div>
      </div>
    );
  }
}
export default App;
