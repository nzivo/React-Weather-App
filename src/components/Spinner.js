import React from "react";
import '../css/Spinner.css';

const Spinner = (props) =>{
    return <div className = 'spinner'>
        <div className="ui active inverted dimmer">
            <div className="ui text loader">
              {props.message}
            </div>
          </div>
    </div>
}

Spinner.defaultProps = {
    message: 'Loading ...'
}

export default Spinner;