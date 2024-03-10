import styles from "./Comment.module.css"
import Image from "next/image"

export default function Comment() {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commetnAuthorContainer}>
        <Image
          src="/assets/imgs/avatar.png"
          alt="avatar"
          width={40}
          height={40}
        />
        <h4>Random dude</h4>
      </div>
      {/* <div className={styles.divider}></div> */}

      <p>Lorem ipsum</p>
      <Image
        className={styles.commentImg}
        src="/assets/imgs/comtest.png"
        alt="avatar"
        width={450}
        height={200}
      />
      <div className={styles.likesDiv}>
        0
        <Image
          src="/assets/icons/like.svg"
          alt="avatar"
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}
