"use client"
import { useState } from "react"
import styles from "./Post.module.css"
import Image from "next/image"
import Comment from "../Comment/Comment"

export default function Post() {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className={styles.post}>
      <div className={styles.postAuthor}>
        <Image
          src="/assets/imgs/avatar.png"
          alt="avatar"
          width={20}
          height={20}
        />
        <p>Ilya Skorokhodov</p>
      </div>

      <div className={styles.divider}></div>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        cumque a culpa corporis at voluptatum quia eaque. Quis harum molestiae
        nihil inventore porro nesciunt, illum quo, corporis facilis corrupti
        exercitationem!
      </p>
      <Image
        className={styles.postImg}
        src="/assets/imgs/cars_trip.jpg"
        alt="postImg"
        width={500}
        height={200}
      />

      <div className={styles.commentUnder}>
        <div>
          0{" "}
          <Image
            className={styles.likeImg}
            src="/assets/icons/like.svg"
            alt="like"
            width={25}
            height={25}
          />
        </div>
        <div>
          <Image
            className={styles.commentImg}
            src="/assets/icons/comment.svg"
            alt="like"
            width={25}
            height={25}
            onClick={() => setShowComments(!showComments)}
          />
        </div>
      </div>
      {showComments && <ShowPostCommentBlock />}
    </div>
  )
}

function ShowPostCommentBlock() {
  const [addCommentActive, setAddCommentActive] = useState(false)
  return (
    <>
      <div className={styles.createComment}>
        <Image
          className={styles.avatarImg}
          src="/assets/imgs/avatar.png"
          alt="avatar"
          width={30}
          height={30}
        />
        <textarea
          placeholder="Enter your comment"
          onFocus={() => setAddCommentActive(true)}
        ></textarea>

        {addCommentActive && (
          <Image
            className={styles.avatarImg}
            src="/assets/icons/addImage.svg"
            alt="addimg"
            width={20}
            height={20}
          />
        )}
      </div>

      <div className={styles.commentPostBtnContainer}>
        {addCommentActive && (
          <button className={styles.commentBtn}>Post</button>
        )}
      </div>
      <div className={styles.divider}></div>

      <div className={styles.commentsContainer}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </>
  )
}
