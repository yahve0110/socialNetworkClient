"use client"
import { useState } from "react"
import styles from "./ProfileInfo.module.css"
import Image from "next/image"

export default function ProfileInfo() {
  const imgSrc =
    "https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg"
  const [showAbout, setShowAbout] = useState(false)
  return (
    <div className={styles.profileInfo}>
      <div>
        <Image
          className={styles.avatarImg}
          src={imgSrc}
          alt="avatar"
          width={120}
          height={120}
          
        />
        <div className={styles.nameDiv}>
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
      <div className={styles.infoDetails}>
        <div>
          <h2 className={styles.name}>Ilya Skorokhodov</h2>
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
