import React from 'react';

const Display = (props) => {

    return (
        <div className="display" >
            <h1>Strikes: {props.strikes} </h1>
            <h1>Balls: {props.balls} </h1>
            <h1>Fouls: {props.fouls} </h1>
        </div>
    );
};

export default Display;

