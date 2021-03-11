import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Message.css"

export const MessageDetail = () => {
    const { getMessageById, deleteMessage, editMessage } = useContext(MessageContext)
    const [ message, setMessage] = useState({})
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
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
            history.push("/messages")
        })
    }

    const handleEdit = () => {
        editMessage(message.id)
        .then(() => {
            history.push("/messages/edit")
        })
    }

    return (
        <div>
            <div>"{message.content}"</div>
            <div>{message.user?.name}</div>
            {currentUserId === message.userId ? <button onClick={handleDelete}>
                Delete
            </button> : "" } 
            {currentUserId === message.userId ? <button onClick={handleEdit}>
                Edit
            </button> : "" } 
        </div>
    )

}