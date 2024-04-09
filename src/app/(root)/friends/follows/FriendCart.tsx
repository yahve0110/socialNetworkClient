import React from "react"
import styles from "./FriendCart.module.css"
import Image from "next/image"
import Link from "next/link"
import { unFollowUser } from "@/actions/follows/unfollowUser"

type FriendCartProps = {
  user_id:string
  profilePicture: string
  firstName: string
  lastName: string
  about:string
  email:string
  birthday:string
}


const FriendCart = ({
  user_id,
  profilePicture,
  firstName,
  lastName,
}:FriendCartProps) => {

  const unfollowHanlder = async(e:any) =>{
    e.preventDefault()
    const isUnfollowed = await unFollowUser(user_id)
  }

  return (
    <Link href={`/profile/${user_id}`}>
      <div className={styles.cartDiv}>
        <div className={styles.imageDiv}>
          <Image src={profilePicture} alt="Avatar" width={60} height={60} />
          <p>
            {firstName} {lastName}
          </p>
        </div>

        <div className={styles.buttonContainer}>
        <button onClick={(e)=>(unfollowHanlder(e))}>Unfollow</button>
          <button>Send message</button>
          <Image
            src="/assets/imgs/plane.png"
            alt="searchIcon"
            width={15}
            height={15}
          />
        </div>
      </div>
    </Link>
  )
}

export default FriendCart
