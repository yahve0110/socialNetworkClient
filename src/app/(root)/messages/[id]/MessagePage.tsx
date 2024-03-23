"use client"
import styles from "./MessagePage.module.css"
import Image from "next/image"
import { useState, ChangeEvent } from "react"
import Message from "./Message"
import Link from "next/link"

export default function MessagePage() {
  //to resize texarea
  const [text, setText] = useState<string>("")
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    event.target.style.height = "auto"
    event.target.style.height = Math.min(event.target.scrollHeight, 200) + "px"
  }

  return (
    <div className={styles.messagePageWrapper}>
      <div className={styles.messagePageContainerUp}>
        <div className={styles.goBackDiv}>
          <Image
            className={styles.arrowImg}
            src="/assets/imgs/arrow.png"
            alt="avatar"
            width={17}
            height={17}
          />
          <Link href="/messages">Back</Link>
        </div>
        <div>John Doe</div>
        <div>
          {" "}
          <Image
            src="/assets/imgs/avatar.png"
            alt="avatar"
            width={40}
            height={40}
          />
        </div>
      </div>

      <div className={styles.messagePageContainerMiddle}>
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      <div className={styles.messagePageContainerBottom}>
        <textarea
          onChange={handleTextChange}
          placeholder="Your message..."
        ></textarea>
        <Image
          className={styles.sendMsgIcon}
          src="/assets/icons/sendMsg.svg"
          alt="avatar"
          width={30}
          height={30}
        />
      </div>
    </div>
  )
}
