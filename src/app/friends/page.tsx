// Importing necessary dependencies and styles
"use client"

import { useState } from "react"
import FriendsPageContent from "./FriendsPageContent"
import LookForFriends from "./LookForFriends"
import styles from "./friends.module.css"
import Info from "@/components/Info/Info"

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
