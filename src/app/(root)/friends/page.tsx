"use client"

import { useState } from "react"
import FriendsPageContent from "./follows/FriendsPageContent"
import LookForFriends from "./lookForFriends/LookForFriends"
import styles from "./friends.module.css"
import { FollowersPageContent } from "./myFollowers/FollowersPageContent"

// Define the Friends component
export default function Friends() {
  const [showMyFriends, setShowMyFriends] = useState(0)

  return (
    <div className={styles.friendsContainer}>

      {showMyFriends === 0 ? <FriendsPageContent /> : showMyFriends === 1 ? <FollowersPageContent/> : <LookForFriends />}

      <div className={styles.selectFriends}>
        <div
          className={showMyFriends === 0 ? styles.selected : ""}
          onClick={() => setShowMyFriends(0)}
        >
          I follow

        </div>
        <div
          className={showMyFriends ===1 ? styles.selected : ""}
          onClick={() => setShowMyFriends(1)}
        >
          My followers

        </div>


        <div
          className={showMyFriends === 2 ? styles.selected : ""}
          onClick={() => setShowMyFriends(2)}
        >
          Look for friends
        </div>
      </div>
    </div>
  )
}
