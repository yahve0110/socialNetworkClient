import styles from "./Messages.module.css"
import Image from "next/image"
import Link from 'next/link'

export default function PreviewMessage() {
  let id = 1
  return (
    <Link href="messages/${id}"className={styles.messageDiv}>
      <div className={styles.messageLeftPart}>
        <Image
          src="/assets/imgs/avatar.png"
          alt="avatar"
          width={50}
          height={50}
        />
        <div className={styles.messageName}>
          <p>Ilya Skorokhodov</p>
          <div className={styles.message}>Heei how are you?</div>
        </div>
      </div>

      <div className={styles.time}>12.30</div>
    </Link>
  )
}
