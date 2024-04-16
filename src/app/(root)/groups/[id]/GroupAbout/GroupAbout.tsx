import styles from "./GroupAbout.module.css"
import Image from "next/image"

type GroupAboutType = {
  groupName: string
  groupDescription: string
  groupImg:string
}

export default function GroupAbout({
  groupName,
  groupDescription,
  groupImg
}: GroupAboutType) {
  return (
    <div className={styles.groupAbout}>
      <Image
        src={groupImg}
        alt="group avatar"
        width={1000}
        height={1000}
      />
      <div className={styles.groupInfo}>
        <h2>{groupName}</h2>
        <p>{groupDescription}</p>
      </div>
    </div>
  )
}
