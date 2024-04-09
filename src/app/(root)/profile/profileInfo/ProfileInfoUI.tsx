import styles from "./ProfileInfo.module.css"
import Image from "next/image"
import { useState } from "react"

type ProfileInfoUIType = {
    firstName: string,
    lastName: string,
    about: string,
    birthday: string,
    email: string,
    avatarImg: string,
    username: string,
}

const ProfileInfoUI = (props:ProfileInfoUIType) => {
    const [showAbout, setShowAbout] = useState(false)

    const {firstName, lastName,about, birthday,email,avatarImg,username} = props
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
          <p className={styles.birthday}>Birthday: {birthday}</p>
          <div className={styles.moreInfoBlock}>
            <p>Email: {email}</p>
            <p>Nickname: {username}</p>
          </div>
        </div>
        {showAbout && <div className={styles.decorColor}></div>}
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

export default ProfileInfoUI
