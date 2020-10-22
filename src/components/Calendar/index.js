import React from "react";
import "./style.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import HeaderNav from "../Header/index"

const localizer = momentLocalizer(moment)
const myEventsList = []

export default function CalendarForm() {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="m-5">
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
            </div>
        </div>
    )
}


