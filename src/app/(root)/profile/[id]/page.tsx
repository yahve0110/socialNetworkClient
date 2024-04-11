"use client"
import Post from "@/components/Post/Post"
import styles from "../profile.module.css"
import FollowersBlock from "../profileInfo/FollowersBlock"
import GroupsBlock from "../profileInfo/GroupsBlock"
import { getPostsForProfile } from "@/actions/post/getPosts"
import { useEffect, useState } from "react"
import { useProfilePostStore } from "@/lib/state/profilePostStore"
import { getUserFollowers } from "@/actions/follows/getFollowers"
import ProfileInfoUI from "../profileInfo/ProfileInfoUI"
import { getUserInfoById } from "@/actions/user/getUserInfoById"
import { usePersonStore } from "@/lib/state/userStore"

export interface UserInfo {
  first_name: string
  last_name: string
  about: string
  birthday: string
  email: string
  profilePicture: string
  username: string
  privacy: string
}

interface ProfileProps {
  params: { id: string }
}

export default function Profile({ params }: ProfileProps) {
  const setPosts = useProfilePostStore((state) => state.setPostsArray)
  const [followers, setFollowers] = useState([])
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  useEffect(() => {
    async function fetchPageData() {
      console.log(params.id)

      const userId = params.id
      setPosts([])

      const userData = await getUserInfoById(userId)
      setUserInfo(userData)

      const posts = await getPostsForProfile(userId)
      if (posts) {
        setPosts(posts)
      }

      const followers = await getUserFollowers(userId)
      setFollowers(followers)
    }

    fetchPageData()
  }, [params.id, setPosts])

  const posts = useProfilePostStore((state) => state.postsArray)

  const currentUserId = usePersonStore((state) => state.userID)

  const profileAccess = followers.some((follower) => follower.user_id === currentUserId);

  return (
    <div className={`sectionComponent ${styles.profile}`}>
      {userInfo && userInfo.privacy === "public" || profileAccess ? (
        <>
          <ProfileInfoUI
            firstName={userInfo.first_name}
            lastName={userInfo.last_name}
            about={userInfo.about}
            birthday={userInfo.birthday}
            email={userInfo.email}
            avatarImg={userInfo.profilePicture}
            username={userInfo.username}
          />

          <div className={styles.profileContentContainer}>
            <div className={styles.additionalContainer}>
              <FollowersBlock followers={followers} />
              <GroupsBlock />
            </div>
            <div className={styles.postsContainer}>
              {posts.map((post) => (
                <Post
                  key={post.post_id}
                  id={post.post_id}
                  content={post.content}
                  creationTime={post.created_at}
                  authorFirstname={post.author_first_name}
                  authorLastname={post.author_last_name}
                  image={post.image}
                  likes={post.likes_count}
                />
              ))}
              <div className={styles.emptyDiv}></div>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.privateDiv}>
          <div>This profile is private!</div>
          <div>To access information  you have to be accepted follower first</div>
        </div>
      )}
    </div>
  )
}
