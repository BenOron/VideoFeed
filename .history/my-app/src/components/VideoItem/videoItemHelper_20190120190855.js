import React from "react";

class videoItemHelper  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            $VideoEl : "<iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            allowFullScreen
          />"
        };
      }
}
 
export default videoItemHelper;