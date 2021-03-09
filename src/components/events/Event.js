import React from "react"
import { Link } from "react-router-dom"

//! Double check class names with wireframe
// Renders event card minimally with only a title as clickable link to send to details page
export const EventCard = ({event}) => (
    <section className="event__item">
        <h3 className="event__title">
            <Link to ={`events/detail/${evemt.id}`}>
                {event.name}
            </Link>
        </h3>
    </section>
)