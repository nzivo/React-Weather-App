import React from "react";
import '../css/ErrorMessage.css';

const ErrorMessage = (props) =>{
    return <div className= 'error-message'>
        {props.message}
    </div>
}

export default ErrorMessage;