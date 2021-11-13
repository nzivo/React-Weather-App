import React from "react";
import '../css/SeasonDisplay.css';

const seasonConfig = {
    Winter: {
        message: 'Maite, It is very cold. Get some jacket',
        iconName: 'snowflake'
    },
    Summer: {
        message: 'Are you ready for the beach? It is summer Time',
        iconName: 'sun'
    }
}

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'Summer' : 'Winter';
    }else{
        return latitude > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth(), props.time);
    const {message, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className= {`big ${iconName} icon`} />
            <h1 className='time-header'>{props.time}</h1>
            <p>{message}</p>
        </div>
    );
};

export default SeasonDisplay;