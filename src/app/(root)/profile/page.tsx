"use client"
import Post from "@/components/Post/Post";
import ProfileInfo from "./profileInfo/ProfileInfo";
import styles from "./profile.module.css";
import FollowersBlock from "./profileInfo/FollowersBlock";
import GroupsBlock from "./profileInfo/GroupsBlock";
import CreatePost from "@/components/CreatePost/CreatePost";
import { getPostsForProfile } from "@/actions/post/getPosts";
import { useEffect, useState } from "react";
import { useProfilePostStore } from "@/lib/state/profilePostStore";
import { getStaticProps } from "@/actions/user/getUserInfo";
import { getUserFollowers } from "@/actions/follows/getFollowers";

export const removePostHandler = (postId: string) => {
  console.log(postId);
  useProfilePostStore.getState().removePost(postId);
};

export default function Profile() {
  const setPosts = useProfilePostStore((state) => state.setPostsArray);
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    async function fetchPageData() {
      const userData = await getStaticProps();
      const userId = userData.user_id;
      setPosts([]);

      // Получение постов для профиля
      const posts = await getPostsForProfile(userId);
      if (posts) {
        setPosts(posts);
      }

      const followers = await getUserFollowers(userId);
      setFollowers(followers);
    }

    fetchPageData();
  }, [setPosts]);

  const posts = useProfilePostStore((state) => state.postsArray);

  return (
    <div className={`sectionComponent ${styles.profile}`}>
      <ProfileInfo />

      <div className={styles.profileContentContainer}>
        <div className={styles.additionalContainer}>
          <FollowersBlock followers={followers} />
          <GroupsBlock />
        </div>
        <div className={styles.postsContainer}>
          <CreatePost placeholder="hey whats new?" />

          {posts.map((post) => {
            return (
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
            );
          })}
          <div className={styles.emptyDiv}></div>
        </div>
      </div>
    </div>
  );
}
