import React from "react"
import styles from "./LookForFriends.module.css"
import Image from "next/image"

interface FriendCardProps {
  avatar: string
  name: string
}

const RecommendedFriendCard: React.FC<FriendCardProps> = ({ avatar, name }) => {
  return (
    <div className={styles.rFriendCard}>
      <Image src={avatar} alt="Avatar" width={110} height={110} />
      <h3>{name}</h3>
      <div className={styles.followDiv}>
        <button>
          Add{" "}
          <Image
            src="/assets/icons/addPerson.svg"
            alt="searchIcon"
            width={15}
            height={15}
          />
        </button>
      </div>
    </div>
  )
}

export default RecommendedFriendCard
