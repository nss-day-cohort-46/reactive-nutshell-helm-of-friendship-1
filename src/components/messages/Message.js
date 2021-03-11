import { React } from "react";

// render individual messages to DOM
export const MessageCard = ({message, user}) => {
    return (
        <section className="messageCard">
            <div>"{message.content}"</div>
            <p>- {user.name}</p>
        </section>
    )
}