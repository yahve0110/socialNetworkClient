"use client"
import React, { useEffect, useState } from "react"
import ProfileInfo from "./profileInfo/ProfileInfoHOC"
import styles from "./profile.module.css"
import FollowersBlock from "./profileInfo/FollowersBlock"
import GroupsBlock from "./profileInfo/GroupsBlock"
import CreatePost from "@/components/CreatePost/CreatePost"
import { getPostsForProfile } from "@/actions/post/getPosts"
import { getUserFollowers } from "@/actions/follows/getFollowers"
import { getStaticProps } from "@/actions/user/getUserInfo"
import { useProfilePostStore } from "@/lib/state/profilePostStore"
import { getAllFollowers } from "@/actions/follows/getAllFollowers"
import ProfilePostHOC from "@/components/Post/ProfilePostHOC"
import Loader from "@/components/Loader/Loader"

export default function Profile() {
  const setPosts = useProfilePostStore((state) => state.setPostsArray)
  const posts = useProfilePostStore((state) => state.postsArray)
  const [followers, setFollowers] = useState([])
  const [loading, setLoading] = useState(true)
  const [iFollow, setIfollow] = useState([])
  const [renderCount, setRenderCount] = useState(0)

  console.log("RERENDER PAGE")

  useEffect(() => {
    let isFinished = false
    async function fetchPageData() {
      try {
        // Fetch user data
        const userData = await getStaticProps()
        const userId = userData.user_id

        // Fetch posts for the profile
        const fetchedPosts = await getPostsForProfile(userId)

        // Fetch user followers
        const fetchedFollowers = await getUserFollowers(userId)

        const fetchedIFollow = await getAllFollowers(userId)

        if (!isFinished) {
          setPosts(fetchedPosts)
          setFollowers(fetchedFollowers)
          setIfollow(fetchedIFollow)

          // Set loading to false once data is fetched
          setLoading(false)

          // Increment render count only when the component mounts
          setRenderCount((prevCount) => prevCount + 1)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    // Call fetchPageData function when component mounts
    fetchPageData()

    // Clean-up function to prevent state updates after unmounting
    return () => {
      isFinished = true
    }
  }, [])
  return (
    <div className={`sectionComponent ${styles.profile}`}>
      {/* Show loading indicator while data is being fetched */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProfileInfo />

          <div className={styles.profileContentContainer}>
            <div className={styles.additionalContainer}>
              {/* Display followers block */}
              <FollowersBlock followers={followers} iFollow={iFollow} />
              {/* Display groups block */}
              <GroupsBlock />
            </div>
            <div className={styles.postsContainer}>
              {/* Create new post */}
              <CreatePost
                placeholder="What's on your mind?"
                followers={followers}
              />

              {/* Display posts */}
              {posts &&
                posts.map((post) => (
                  <ProfilePostHOC
                    key={post.post_id}
                    id={post.post_id}
                    content={post.content}
                    creationTime={post.created_at}
                    authorFirstname={post.author_first_name}
                    authorLastname={post.author_last_name}
                    image={post.image}
                    likes={post.likes_count}
                    author_id={post.author_id}
                  />
                ))}
              {/* Empty div for styling */}
              <div className={styles.emptyDiv}></div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
