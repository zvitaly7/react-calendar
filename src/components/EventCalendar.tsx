import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/EventInterfaces";
import {formatDate} from "../utils";
import {Moment} from "moment";
import {Dayjs} from "dayjs";

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
    const dateCellRender = (value: Dayjs) => {
        const formatedDate = formatDate(value)
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)

        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>)
                }
            </div>
        )
    }

    return (
        <Calendar  cellRender={dateCellRender}/>
    );
};

export default EventCalendar;
