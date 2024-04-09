import InputComponent from "@/components/Input/InputComponent"
import FriendCart from "./FriendCart"
import styles from "../friends.module.css"
import { useEffect, useState } from "react"
import { getAllFollowers } from "@/actions/follows/getAllFollowers"
import { usePersonStore } from "@/lib/state/userStore"

interface Friend {
  user_id: string
  profilePicture: string
  first_name: string
  last_name: string
  email:string
  birthday:string
  about:string
}
export default function FriendsPageContent() {
  const [friends, setFriends] = useState<Friend[]>([])

  const userId = usePersonStore((state) => state.userID)
  console.log(userId)

  useEffect(() => {
    async function getPossibleFriends() {
      try {
        const friendsArr = await getAllFollowers(userId)
        console.log(friendsArr)

        setFriends(friendsArr)
      } catch (error) {
        console.error("Error fetching users:", error)
      }
    }
    getPossibleFriends()
  }, [])

  return (
    <>
      <div className={styles.searchForFriendsBlock}>
        <InputComponent />
        <div className={styles.divider}></div>

        <div className={styles.friendsBlockContainer}>
          {friends &&
            friends.map((friend) => {
              return (
                <FriendCart
                  key={friend.user_id}
                  user_id={friend.user_id}
                  profilePicture={friend.profilePicture}
                  firstName={friend.first_name}
                  lastName={friend.last_name}
                  about={friend.about}
                  email={friend.email}
                  birthday={friend.birthday}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}
