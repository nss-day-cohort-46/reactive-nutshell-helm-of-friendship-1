import { React } from "react";

// render individual messages to DOM
export const MessageCard = ({message}) => {
    return (
        <section className="messageCard">
            <div>
                {message.content}
            </div>
            <p>{message.userId}</p>
        </section>
    )
}