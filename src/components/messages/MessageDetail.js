import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Message.css"

export const MessageDetail = () => {
    const { getMessageById, deleteMessage } = useContext(MessageContext)
    const [ message, setMessage] = useState({})
    const { messageId } = useParams()
    const history = useHistory();

    useEffect(() => {
        getMessageById(messageId)
        .then((res) => {
            setMessage(res)
        })
    }, [])

    const handleDelete = () => {
        deleteMessage(message.id)
        .then(() => {
            history.push("./messages")
        })
    }
console.log(message)
    return (
        <div>
            <div>"{message.content}"</div>
            <div>{message.user?.name}</div>
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    )

}