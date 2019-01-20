import React from "react";

class videoItemHelper  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            $VideoEl : "<iframe
            className="embed-responsive-item"

          />"
        };
      }
}
 
export default videoItemHelper;