import React from "react"
import { Route } from "react-router-dom"
import { FriendList } from "./friends/FriendList"
import { FriendProvider } from "./friends/FriendProvider"
import { UserProvider } from "./users/UserProvider"
import { ArticleList } from "./articles/ArticleList"
import { ArticleProvider } from "./articles/ArticleProvider"
import { UserList, UserSearch } from "./friends/FriendSearch"

export const ApplicationViews = () => {
  return (
    <>
      <FriendProvider>
        <UserProvider>
          <Route exact path="/friends">
            {/* Render the component for list of friends */}
            <FriendList />
          </Route>
          <Route path="/friends/search">
            <UserSearch />
            <UserList />
          </Route>
        </UserProvider>
      </FriendProvider>
      <ArticleProvider>
          <Route exact path="/">
            <ArticleList/>
          </Route>
        </ArticleProvider>  
      <Route path="/friends">
        {/* Render the component for list of friends */}
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
