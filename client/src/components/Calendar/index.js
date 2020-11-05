import React from "react";
import "./style.css";
import Iframe from 'react-iframe'

export default function CalendarForm() {
    return (
        <div>
            <Iframe url="https://tangiblecreativity.setmore.com/class"
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="absolute"
                allowFullScreen />
        </div>
    )
}


