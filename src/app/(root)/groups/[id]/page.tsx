"use client"

import Container from "@/components/ PageContainer/Container"
import styles from "./page.module.css"
import Events from "../Events/Events"
import GroupMembers from "./GroupMembersBlock/GroupMembers"
import GroupContacts from "./GroupContacts/GroupContacts"
import CreatePost from "@/components/CreatePost/CreatePost"
import GroupAbout from "./GroupAbout/GroupAbout"
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock"
import CreateGroupEvent from "./CreateGroupEvent/CreateGroupEvent"
import GroupEvent from "./GroupEvent/GroupEvent"
import { useEffect, useState } from "react"
import { getGroupById } from "@/actions/groups/getGroupInfo"
import { Post, useGroupFeedStore } from "@/lib/state/groupFeedSore"
import { createGroupPost } from "@/actions/groups/createGroupPost"
import GroupPostHOC from "@/components/Post/GroupPostHOC"
import { getGroupFeed } from "@/actions/groups/getGroupFeed"

interface GroupInfo {
  group_name: string
  group_description: string
  group_image: string
}

interface GroupEventProps {
  id: string
  content: string
  creationTime: string
  event_id: string
  title: string
  description: string
  event_created_at: string
}

export default function page({ params }: { params: { id: string } }) {
  const [groupInfo, setGroupInfo] = useState<GroupInfo>({
    group_name: "Test",
    group_description: "Test",
    group_image: "",
  })

  const [showCreatePost, setShowCreatePost] = useState(false)
  const [showCreateEvent, setShowCreateEvent] = useState(false)
  const setPosts = useGroupFeedStore((state) => state.setPostsArray)

  useEffect(() => {
    async function getGroupData() {
      try {
        const groupInfo = await getGroupById(params.id)
        // const groupPosts = await getGroupPosts(params.id)
        const groupFeed = await getGroupFeed(params.id)
        console.log("GROUP FEED : ", groupFeed)

        setGroupInfo(groupInfo)
        setPosts(groupFeed)
      } catch (error) {
        console.error("Error fetching group info:", error)
      }
    }
    getGroupData()
  }, [params.id, setPosts])

  const groupFeed = useGroupFeedStore((state) => state.postsArray)
  const addGroupPost = useGroupFeedStore((state) => state.addPost)

  const addPostToGroupFeedHandler = async (
    postText: string,
    postImg: string | ArrayBuffer | null
  ) => {
    const newPost = await createGroupPost(params.id, postText, postImg)
    if (!groupFeed) {
      setPosts([newPost])
    } else {
      addGroupPost(newPost)
    }
    setShowCreatePost(false)
  }
  console.log(groupFeed)
  return (
    <div className={styles.container}>
      <GroupAbout
        groupName={groupInfo.group_name}
        groupDescription={groupInfo.group_description}
        groupImg={groupInfo.group_image}
      />
      <div className={styles.uppperInfo}>
        {showCreatePost && (
          <CreatePost
            placeholder={"Suggest news"}
            addPostToGroupFeedHandler={addPostToGroupFeedHandler}
          />
        )}
        {showCreateEvent && <CreateGroupEvent groupId={params.id} setShowCreateEvent={setShowCreateEvent} />}
      </div>
      <Container>
        {groupFeed &&
          groupFeed.map((item) => {
            if ("post_id" in item) {
              const post = item as Post
              return (
                <GroupPostHOC
                  key={post.post_id}
                  id={post.post_id}
                  content={post.content}
                  creationTime={post.created_at}
                  authorFirstname={post.author_first_name}
                  authorLastname={post.author_last_name}
                  group_post_img={post.group_post_img}
                  likes={post.likes_count}
                  author_id={post.author_id}
                  groupId={params.id}
                />
              )
            } else {
              const event = item as GroupEventProps
              return (
                <GroupEvent
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  content={event.content}
                  creationTime={event.event_created_at}
                />
              )
            }
          })}

        {!groupFeed && !showCreatePost && (
          <div className={styles.noPosts}>
            <div>No posts here yet...</div>
            <button onClick={() => setShowCreatePost(true)}>Create</button>
          </div>
        )}
      </Container>
      <div className={styles.sidebar}>
        <ButtonsBlock
          setShowCreatePost={setShowCreatePost}
          showCreatePost={showCreatePost}
          showCreateEvent={showCreateEvent}
          setShowCreateEvent={setShowCreateEvent}
        />
        <Events />
        <GroupMembers />
        <GroupContacts />
      </div>
    </div>
  )
}
