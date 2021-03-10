import React from "react"

// "friend" is the friendship table, "userObject" is the object for a user in that relationship, 
// "currentUser" is the object of the current user (not related to the friend table), 
// and "reversedRoleCurrentUser" is the object for the currentUser (related to the table)
// Needed 2 versions of the current user because the current user could be listed in the database as a "userId" instead of a "currentUserId" and I needed to be able to list them regardless without duplicating the data.

export const FriendCard = ({friend, userObject, currentUser, reversedRoleCurrentUser}) => (
    <section className="friend">
        <h3 className="friend__name">
          {friend.currentUserId === currentUser.id? userObject.name + " " + "is your Friend" : ""}
          {friend.userId === currentUser.id? reversedRoleCurrentUser.name + " " + "is your Friend": ""}
        </h3>
    </section>
)