"use client"

import Container from "@/components/ PageContainer/Container"
import styles from "./page.module.css"
import Events from "../Events/Events"
import GroupMembers from "./GroupMembersBlock/GroupMembers"
import GroupContacts from "./GroupContacts/GroupContacts"
import CreatePost from "@/components/CreatePost/CreatePost"
import Post from "@/components/Post/Post"
import GroupAbout from "./GroupAbout/GroupAbout"
import CreateGroupPost from "./CreateGroupEvent/CreateGroupEvent"
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock"
import { useState } from "react"
import CreateGroupEvent from "./CreateGroupEvent/CreateGroupEvent"
import GroupEvent from "./GroupEvent/GroupEvent"

export default function page() {
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [showCreateEvent, setShowCreateEvent] = useState(false)
  return (
    <div className={styles.container}>
      <GroupAbout />
      <div className={styles.uppperInfo}>
        {" "}
        {showCreatePost && <CreatePost placeholder={"Suggest news"} />}
        {showCreateEvent && <CreateGroupEvent />}
      </div>
      <Container>
        <GroupEvent/>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Container>
      <div className={styles.sidebar}>
        <ButtonsBlock
          setShowCreatePost={setShowCreatePost}
          showCreatePost={showCreatePost}
          showCreateEvent={showCreateEvent}
          setShowCreateEvent = {setShowCreateEvent}
        />
        <Events />
        <GroupMembers />
        <GroupContacts />
      </div>
    </div>
  )
}
