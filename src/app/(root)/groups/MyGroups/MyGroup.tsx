import Link from "next/link"
import styles from "./ MyGroups.module.css"
import Image from "next/image"


export default function MyGroup() {
  return (
<Link href="/groups/1" className={styles.link}>
<div className={styles.myGroup}>
      <Image
        src={
          "https://cdn0.iconfinder.com/data/icons/avatar-1-2/512/group-512.png"
        }
        alt="group avatar"
        width={80}
        height={80}
      />
      <div>
        <p className={styles.groupName}>Group name</p>
        <p className={styles.subscribers}>10 subscribers</p>
      </div>
    </div>
</Link>
  )
}
