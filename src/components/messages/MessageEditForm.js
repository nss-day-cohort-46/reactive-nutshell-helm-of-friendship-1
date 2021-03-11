import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Message.css"

export const MessageEdit = () => {
    const { getMessages, getMessageById, editMessage } = useContext(MessageContext)
    const [message, setMessages] = useState({})
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    const messageId = useParams()
    const history = useHistory()

    const handleEditMessage = () => {
        if (messageId) {
            editMessage({
                userId: currentUserId,
                content: message.content,
                timestamp: Date.now(),
                id: message.id
            })
            .then(() => history.push(`/messages/detail/${message.id}`))
        }
    }

    useEffect(() => {
        getMessages().then(() => {
            if (messageId) {
                getMessageById(messageId)
                .then(message => {
                    setMessages(message)
                })
            }
        })
    }, [])

    return (
        <div>
            yep
        </div>
    )
}