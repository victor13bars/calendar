import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({events}) => {
    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate())
        const currentDayEvent = events.filter(ev => ev.date === formatedDate)
        return (
            <div>
                {currentDayEvent.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        );
    }

    return (
        <Calendar
            dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;