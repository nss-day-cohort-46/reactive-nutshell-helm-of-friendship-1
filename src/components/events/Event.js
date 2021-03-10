import React from "react"
import { Link } from "react-router-dom"


// Renders event card minimally with only a title as clickable link to send to details page
export const EventCard = ({event}) => (
    <section className="eventCard">
        <h3 className="eventTitle">
            <Link to ={`events/detail/${event.id}`}>
                {`${event.title} ${event.date}`}
            </Link>
        </h3>
    </section>
)