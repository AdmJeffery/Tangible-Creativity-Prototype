import React from "react";
import "./style.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import HeaderNav from "../Header/index"

const localizer = momentLocalizer(moment)
const myEventsList = [{
    start: Date.parse("October 25, 2020"),
    end: Date.parse("October 25, 2020"),
    title: "Crafting Some Cool Shit"
  }]
  console.log(moment())

export default function CalendarForm() {
    return (
        <div>
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


