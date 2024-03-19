"use client"
import Post from "@/components/Post/Post"
import ProfileInfo from "./ProfileInfo"
import styles from "./profile.module.css"
import FollowersBlock from "./FollowersBlock"
import GroupsBlock from "./GroupsBlock"
import CreatePost from "@/components/CreatePost/CreatePost"
import { isSessionValid } from "@/actions/sessionCheck"

export default function Profile() {
  return (
    <div className={`sectionComponent ${styles.profile}`}>
      <ProfileInfo />

      <div className={styles.profileContentContainer}>
        <div className={styles.additionalContainer}>
          <FollowersBlock />
          <GroupsBlock />
        </div>
        <div className={styles.postsContainer}>
          <CreatePost placeholder="hey whats new?" />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}
