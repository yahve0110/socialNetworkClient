import InputComponent from "@/components/Input/InputComponent"
import styles from "./LookForFriends.module.css"
import RecomendedFriendCart from "./RecomendedFriendCart"
import { useEffect, useState } from "react"
import { getAllUsers } from "@/actions/follows/getAllUsers"
import { usePersonStore } from "@/lib/state/userStore"

interface User {
  user_id: string;
  profilePicture: string;
  first_name: string;
  last_name: string;
}

export default function LookForFriends() {
  const [usersArr, setUsersArr] = useState<User[]>([])

  const userId = usePersonStore((state) => state.userID)

  useEffect(() => {
    async function getPossibleFriends() {
      try {
        const usersArr = await getAllUsers()
        console.log(usersArr)
        const filteredUsers = usersArr.filter((user: User) => user.user_id !== userId)

        setUsersArr(filteredUsers)
      } catch (error) {
        console.error("Error fetching users:", error)
      }
    }
    getPossibleFriends()
  }, [userId])

  return (
    <div className={styles.lookFriendsContainer}>
      <div>
        <InputComponent />
        <div className={styles.divider}></div>
      </div>
      <div className={styles.recommededFriendsDiv}>
        {usersArr.map((user) => {
          return (
            <RecomendedFriendCart
              key={user.user_id}
              id={user.user_id}
              avatar={user.profilePicture}
              firstName={user.first_name}
              lastName={user.last_name}
            />
          )
        })}
      </div>
    </div>
  )
}
