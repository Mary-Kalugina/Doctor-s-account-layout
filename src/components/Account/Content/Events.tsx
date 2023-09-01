import React from "react";
import './content.scss';

interface Event {
    img: string;
    name: string;
    date: string;
    type: string;
    time: string;
}

interface EventsProps {
    events: Event[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
    return (
        <ul className="events">
            {events.map((event, index) => (
                <li key={index}>
                    <div className="event">
                        <img className='event-img' src={event.img} alt={event.name} />
                        <div className="event-wrapper">
                            <div className="event-name">{event.name}</div>
                            <ul className="event-data">
                                <li>
                                    <img src='./images/vebinar.svg' className="event-data-img" alt="Vebinar Icon" />
                                    <div className="event-data-text">{event.type}</div>
                                </li>
                                <li>
                                    <img src='./images/calendar.svg' className="event-data-img" alt="Calendar Icon" />
                                    <div className="event-data-text">{event.date}</div>
                                </li>
                                <li>
                                    <img src='./images/clock.svg' className="event-data-img" alt="Clock Icon" />
                                    <div className="event-data-text">{event.time}</div>
                                </li>
                            </ul> 
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Events;
