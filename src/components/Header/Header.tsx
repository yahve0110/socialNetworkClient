"use client"

import React, { useEffect, useRef, useState } from "react"
import ThemeSwitch from "@/components/ThemeSwitcher"
import styles from "./Header.module.css"
import Image from "next/image"
import { logoutHandler } from "@/actions/auth/logout"
import { useRouter } from "next/navigation"
import { usePersonStore } from "@/lib/state/userStore"
import Link from "next/link"
import NotificationModal from "./NotificationModal"
import NotificationPopUp from "./NotificationPopUp"

export const Header: React.FC = () => {
  const { push } = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const [notificationsModal, setNotificationsModal] = useState(false)

  async function logUserOut() {
    const res = await logoutHandler()
    if (res) {
      push("/")
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const notificationModal = document.querySelector('.notification-modal');
      if (
        notificationsModal &&
        notificationModal &&
        !notificationModal.contains(event.target as Node)
      ) {
        setNotificationsModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationsModal]);






  const handleNotificationModal = () => {
    setModalOpen(false)
    setNotificationsModal(!notificationsModal)
  }

  const handleInfoToggle = () => {
    setModalOpen(!modalOpen)
    setNotificationsModal(false)
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
            className={styles.notificationBell}
            width={50}
            height={50}
            src="/assets/icons/notifibell.svg"
            alt="notification"
            onClick={handleNotificationModal}
          />
          {notificationsModal && <NotificationModal />}
          <div className={styles.UserProfileBlock} onClick={handleInfoToggle}>
            <Image
              className={styles.userAvatar}
              src={avatarImg}
              alt="avatar"
              width={100}
              height={100}
            />
            {modalOpen && (
              <div className={styles.modal} ref={modalRef}>
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
              src="/assets/icons/arrow.svg"
              alt="arrow"
              width={15}
              height={15}
            />
          </div>
          <ThemeSwitch />
        </div>
      </div>
      <NotificationPopUp/>
    </div>
  )
}
