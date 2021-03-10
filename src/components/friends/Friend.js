import React from "react"

export const FriendCard = ({friend, userObject, currentUser}) => (
    <section className="friend">
        <h3 className="friend__name">
          { userObject.name }
        </h3>
        <div className="friend__status">Friends with {currentUser.name}</div>
    </section>
)