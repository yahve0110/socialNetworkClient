
import ThemeSwitch from "@/components/ThemeSwitcher"
import styles from "./Header.module.css"
import Image from "next/image"


import { useState } from "react"
import { logoutHandler } from "@/actions/auth/logout"
import { useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const { push } = useRouter();

  const [modalOpen, setModalOpen] = useState(false)

  async function  logUserOut() {
   const res = await logoutHandler()
   if(res){
    push("/")
   }
  }

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

          <div
            className={styles.UserProfileBlock}
            onClick={() => setModalOpen(!modalOpen)}
          >
            <Image
              className={styles.userAvatar}
              src="/assets/imgs/avatar.png"
              alt="avatar"
              width={50}
              height={50}
            />

            {modalOpen && (
              <div className={styles.modal}>
                <button className={styles.logoutBtn} >
                  My profile
                </button>

                <button className={styles.logoutBtn} onClick={logUserOut}>
                  logout
                </button>
              </div>
            )}
            <Image
              className={
                modalOpen
                  ? `${styles.arrow} ${styles.arrowReverse}`
                  : styles.arrow
              }
              src="/assets/imgs/arrow.png"
              alt="arrow"
              width={10}
              height={10}
            />

          </div>
          <ThemeSwitch  />
        </div>
      </div>
    </div>
  )
}
