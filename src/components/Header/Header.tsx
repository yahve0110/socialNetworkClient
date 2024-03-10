import ThemeSwitch from "@/components/ThemeSwitcher"
import styles from "./Header.module.css"
import Image from "next/image"

export const Header: React.FC = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <div className={styles.logoBlock}>
          <Image
            width={30}
            height={30}
            src="/assets/imgs/logo.png"
            className={styles.logo}
            alt="logo"
          />

          <h1>Kood/Network</h1>
        </div>
        <div className={styles.HeaderInputDiv}></div>
        <div className={styles.UserInfoBlock}>
          <Image
            width={50}
            height={50}
            src="/assets/imgs/notification.png"
            alt="notification"
          />

          <div className={styles.UserProfileBlock}>
            <Image
              className={styles.userAvatar}
              src="/assets/imgs/avatar.png"
              alt="avatar"
              width={50}
              height={50}
            />
            <Image
              className={styles.arrow}
              src="/assets/imgs/arrow.png"
              alt="arrow"
              width={10}
              height={10}
            />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  )
}
