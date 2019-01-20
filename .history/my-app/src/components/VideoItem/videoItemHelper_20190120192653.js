import React from "react";

class videoItemHelper extends React.Component {
  render() {
    return (
      <div>
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowFullScreen
        />
      </div>
    );
  }
}

export default videoItemHelper;
