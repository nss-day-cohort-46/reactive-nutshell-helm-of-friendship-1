import React from "react"
import { Link } from "react-router-dom"
import "./Events.css"

const currentUserId = +sessionStorage.getItem("nutshell_user")

// Renders event card minimally with only a title as clickable link to send to details page
export const EventCard = ({event}) => (
    <section className={event.userId === currentUserId ? "eventCard" : "eventCard friendEvent"}>
        <h3 className="eventTitle">
            <Link to ={`events/detail/${event.id}`}>
                {`${event.title} ${event.date}`}
            </Link>
        </h3>
    </section>
)