import React from "react";
import './Display.css';


class Display extends React.Component {
    render() {
        return(
            <div className="display">
                {this.props.valordisplay}

            </div>
        )
    }
}


export default Display;