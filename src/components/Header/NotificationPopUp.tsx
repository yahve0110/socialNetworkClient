import React from "react"
import styles from "./Header.module.css"
import Image from "next/image"

const NotificationPopUp = () => {
  return (
    <div className={styles.popUpDiv}>
      <Image
        className={styles.closeModal}
        src={"/assets/icons/delete.svg"}
        width={20}
        height={20}
        alt="delete"
      />
      <div>LOrem ipsum la la la</div>
    </div>
  )
}

export default NotificationPopUp
