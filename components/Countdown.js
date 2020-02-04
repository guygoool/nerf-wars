import React, { useState, useEffect } from 'react';

 

export default function Countdown(props) {

    const [countdown, setCountdown] = useState("");

 

    setInterval(function () {

        var now = new Date().getTime();

 

        var distance = props.date - now;

 

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 

        setCountdown(`${minutes}:${seconds}`);

 

        if (distance < 0) {

            setCountdown("WARRR !!");

        }

 

    }, 1000);

 

    return (

        <div>

            {countdown}

        </div>

    )

}