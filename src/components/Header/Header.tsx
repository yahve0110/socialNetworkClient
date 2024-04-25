"use client"
import ThemeSwitch from "@/components/ThemeSwitcher"
import styles from "./Header.module.css"
import Image from "next/image"

import { useState } from "react"
import { logoutHandler } from "@/actions/auth/logout"
import { useRouter } from "next/navigation"
import { usePersonStore } from "@/lib/state/userStore"
import UserStorePopulation from "@/lib/populateState/UserStorePopulation"
import Link from "next/link"

export const Header: React.FC = () => {
  const { push } = useRouter()
  UserStorePopulation()
  const [modalOpen, setModalOpen] = useState(false)

  async function logUserOut() {
    const res = await logoutHandler()
    if (res) {
      push("/")
    }
  }

  const avatarImg = usePersonStore((state) => state.avatar)

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
            src="/assets/icons/notifibell.svg"
            alt="notification"
          />

          <div
            className={styles.UserProfileBlock}
            onClick={() => setModalOpen(!modalOpen)}
          >
            <Image
              className={styles.userAvatar}
              src={avatarImg}
              alt="avatar"
              width={100}
              height={100}
            />

            {modalOpen && (
              <div className={styles.modal}>
                <Link className={styles.logoutBtn} href={"/profile"}>
                  My profile
                </Link>

                <button className={styles.logoutBtn} onClick={logUserOut}>
                  Logout{" "}
                  <Image
                    className={styles.logoutImg}
                    src={"/assets/icons/logout.svg"}
                    alt="logout"
                    width={15}
                    height={15}
                  />
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
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}
