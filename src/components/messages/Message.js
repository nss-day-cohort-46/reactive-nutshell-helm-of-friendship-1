import { React } from "react";

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