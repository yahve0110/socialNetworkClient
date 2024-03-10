import styles from "./MessagePage.module.css"
import Image from "next/image"

export default function Message() {
  return (
    <div className={styles.message}>
      <div className={styles.messageLeftPart}>
        <Image
          src="/assets/imgs/avatar.png"
          alt="avatar"
          width={50}
          height={50}
        />
        <div className={styles.messageName}>
          <p>Ilya</p>
        </div>
        <div className={styles.messageText}>Heei how are you?</div>
      </div>
    </div>
  )
}
