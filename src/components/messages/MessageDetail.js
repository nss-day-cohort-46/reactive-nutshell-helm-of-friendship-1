import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Message.css"
import { MessageCard } from "./Message"

export const MessageDetail = () => {
    const { getMessageById } = useContext(MessageContext)
    const [ message, setMessage] = useState({})
    const { messageId } = useParams()
    const history = useHistory();

    useEffect(() => {
        getMessageById(messageId)
        .then((res) => {
            setMessage(res)
        })
    }, [])

    return (
        <div>yo</div>
    )

}