import React from "react"
import styles from "./FriendCart.module.css"
import Image from "next/image"

interface FriendCartProps {
  avatar: string
  name: string
}

const FriendCart: React.FC<FriendCartProps> = ({ avatar, name }) => {
  return (
    <div className={styles.cartDiv}>
      <div className={styles.imageDiv}>
        <img src={avatar} alt="Avatar" width={60} height={60} />
        <p>{name}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button>Send message</button>
        <Image
          src="/assets/imgs/plane.png"
          alt="searchIcon"
          width={15}
          height={15}
        />
      </div>
    </div>
  )
}

export default FriendCart
