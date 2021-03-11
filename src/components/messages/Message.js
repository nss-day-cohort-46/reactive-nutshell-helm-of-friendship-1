import { React } from "react";
import { Link } from "react-router-dom"

// render individual messages to DOM
export const MessageCard = ({message}) => {
    return (
        <section className="messageCard">
            <div>
                <Link to={`/messages/detail/${message.id}`}>
                    "{message.content}"
                </Link>
            </div>
            <p>- {message.user?.name}</p>
        </section>
    )
}