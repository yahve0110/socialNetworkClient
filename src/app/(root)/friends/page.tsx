"use client"

import { useState } from "react"
import FriendsPageContent from "./myFriends/FriendsPageContent"
import LookForFriends from "./lookForFriends/LookForFriends"
import styles from "./friends.module.css"

// Define the Friends component
export default function Friends() {
  const [showMyFriends, setShowMyFriends] = useState(true)

  return (
    <div className={styles.friendsContainer}>

      {showMyFriends ? <FriendsPageContent /> : <LookForFriends />}

      <div className={styles.selectFriends}>
        <div
          className={showMyFriends ? styles.selected : ""}
          onClick={() => setShowMyFriends(true)}
        >
          My friends
          
        </div>

        <div
          className={!showMyFriends ? styles.selected : ""}
          onClick={() => setShowMyFriends(false)}
        >
          Look for friends
        </div>
      </div>
    </div>
  )
}
