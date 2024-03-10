"use client"
import { useState } from "react"
import styles from "./ProfileInfo.module.css"
import Image from "next/image"

export default function ProfileInfo() {
  const [showAbout, setShowAbout] = useState(false)
  return (
    <div className={styles.profileInfo}>
      <div>
        <Image
          className={styles.avatarImg}
          src="/assets/imgs/avatar.png"
          alt="avatar"
          width={120}
          height={120}
        />

        <div>
          {
            <p
              className={`${styles.about} ${styles.conditional} ${
                showAbout && styles.conditionalShow
              }`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              numquam ea, vitae dolores doloremque sapiente ipsam reiciendis
              repellat illum perspiciatis ullam nostrum excepturi porro earum
              quos. Odio incidunt illum eaque.
            </p>
          }
        </div>
      </div>
      <div>
        <div>
          <h2>Ilya Skorokhodov</h2>
          <hr />
        </div>

        <div
          className={`${styles.conditional}  ${
            showAbout && styles.conditionalShow
          }`}
        >
          <p className={styles.birthday}>Birthday: 01.10.2001</p>
          <div className={styles.moreInfoBlock}>
            <p>Email: ilja.skorokhodov@gmail.com</p>
            <p>Nickname: iliks12</p>
          </div>
        </div>

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
          ></Image>{" "}
        </div>
      </div>
    </div>
  )
}
