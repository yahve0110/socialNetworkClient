import styles from "./GroupSearch.module.css"
import Image from "next/image"

export default function GroupBlock() {
  return (
    <div className={styles.groupBlock}>
      <div className={styles.groupBlockLeft}>
        <Image
          src={
            "https://cdn4.iconfinder.com/data/icons/social-media-3/512/User_Group-512.png"
          }
          alt="group avatar"
          width={60}
          height={60}
        />
        <div>
          <p className={styles.groupName}>Group name</p>
          <p className={styles.subscribers}>10 subscribers</p>
        </div>
      </div>
      <button className={styles.subscribeBtn}>Subscribe</button>
    </div>
  )
}
