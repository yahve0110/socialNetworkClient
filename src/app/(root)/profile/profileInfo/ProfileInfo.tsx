"use client"
import { useState } from "react"
import styles from "./ProfileInfo.module.css"
import Image from "next/image"
import { usePersonStore } from "@/lib/state/userStore"

export default function ProfileInfo() {
  const [showAbout, setShowAbout] = useState(false)

  //<----------------------GET DATA FROM STORE ----------------------->
  const firstName = usePersonStore((state) => state.firstName)
  const lastName = usePersonStore((state) => state.lastName)
  const about = usePersonStore((state) => state.about)
  const birthady = usePersonStore((state) => state.birth_date)
  const email = usePersonStore((state) => state.email)
  const avatarImg = usePersonStore((state) => state.avatar)
  const username = usePersonStore((state) => state.username)

  //<----------------------CONVET DATE INTO READABLE ----------------------->

  const date = new Date(birthady)
  const day = date.getUTCDate()
  const month = date.getUTCMonth() + 1 // Months are zero-based, so we add 1
  const year = date.getUTCFullYear()
  const birthDayReadable = `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`

  return (
    <div className={styles.profileInfo}>

      <div>

        <div className={styles.avatarImg}>
          <Image src={avatarImg} alt="avatar" fill={true} />
        </div>
      </div>
      <div className={styles.nameDiv}>
        {
          <p
            className={`${styles.about} ${styles.conditional} ${
              showAbout && styles.conditionalShow
            }`}
          >
            {about}
          </p>
        }
      </div>
      <div className={styles.infoDetails}>
        <div>
          <h2 className={styles.name}>
            {firstName} {lastName}
          </h2>
        </div>

        <div
          className={`${styles.conditional}  ${
            showAbout && styles.conditionalShow
          }`}
        >
          <p className={styles.birthday}>Birthday: {birthDayReadable}</p>
          <div className={styles.moreInfoBlock}>
            <p>Email: {email}</p>
            <p>Nickname: {username}</p>
          </div>
        </div>
       {showAbout &&  <div className={styles.decorColor}></div>}
        <div className={styles.moreInfo}>
          <p
            onClick={() => {
              setShowAbout(!showAbout)
            }}
          >
            More info
          </p>
          <Image
            src="/assets/icons/info.svg"
            alt="avatar"
            width={20}
            height={20}
          />
        </div>
      </div>
      {!showAbout && (
        <div className={styles.additionalElem}>
          <Image
            className={styles.additionalElemImg}
            src="https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg"
            alt="avatar"
            width={1000}
            height={1000}
          />
        </div>
      )}
    </div>
  )
}
