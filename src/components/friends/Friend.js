import React from "react"

export const FriendCard = ({friend, userObject, currentUser, reversedRoleCurrentUser}) => (
    <section className="friend">
        <h3 className="friend__name">
          {friend.currentUserId === currentUser.id? userObject.name + " " + "is your Friend" : ""}
          {friend.userId === currentUser.id? reversedRoleCurrentUser.name + " " + "is your Friend": ""}
        </h3>
    </section>
)