"use client"

import { useState } from "react"
import Events from "./Events/Events"
import GroupSearch from "./GroupSearch/GroupSearch"
import styles from "./Groups.module.css"
import MyGroups from "./MyGroups/MyGroups"
import SwitchPages from "./SwitchGroupPages/SwitchPages"

export default function Groups() {
  const [isMyGroupsPage, setMyGroupsPage] = useState(true)
  return (
    <div className={styles.groupsContainer}>
      <div className={styles.groupsWrapper}>
        {isMyGroupsPage ? <MyGroups /> : <GroupSearch />}
      </div>
      <div className={styles.sidebar}>
        <SwitchPages
          setMyGroupsPage={setMyGroupsPage}
          isMyGroupsPage={isMyGroupsPage}
        />
        <Events />
      </div>
    </div>
  )
}
