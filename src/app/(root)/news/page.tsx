import Post from "@/components/Post/Post"
import styles from "./News.module.css"
import Info from "@/components/Info/Info"


export default function News() {
  return (
    <div className={`sectionComponent ${styles.newsContainer}`}>
      <div  className={styles.newsPostsContainer}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Info/>
    </div>
  )
}
