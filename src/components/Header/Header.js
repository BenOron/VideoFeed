import React from "react";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className={"containerHeader"}>
        <h1 className={"brand"} to="/">
          <img
            src={require("./playbuzzlogo.png")}
            width="38"
            height="38"
            alt=""
          />
          <span className={"brandTxt"}>PlayBuzz</span>
        </h1>
        <div className={"banner"}>
          <p className={"bannerDesc"}>Video feed </p>
        </div>
      </div>
    );
  }
}

export default Header;
