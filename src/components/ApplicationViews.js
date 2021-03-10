import React from "react"
import { Route } from "react-router-dom"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageList } from "./messages/MessageList"
import { FriendList } from "./friends/FriendList"
import { FriendProvider } from "./friends/FriendProvider"
import { UserProvider } from "./users/UserProvider"
import { ArticleList } from "./articles/ArticleList"
import { ArticleProvider } from "./articles/ArticleProvider"

export const ApplicationViews = () => {
  return (
    <>
      <FriendProvider>
        <UserProvider>
          <Route path="/friends">
            {/* Render the component for list of friends */}
            <FriendList />
          </Route>
        </UserProvider>
      </FriendProvider>
      <ArticleProvider>
        <Route exact path="/">
          <ArticleList />
        </Route>
      </ArticleProvider>
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>

      <MessageProvider>
        <UserProvider>
          <Route path="/messages">
            <MessageList />
          </Route>
        </UserProvider>
      </MessageProvider>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
