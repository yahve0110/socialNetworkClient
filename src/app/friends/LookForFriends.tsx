import InputComponent from "@/components/Input/InputComponent"
import styles from "./LookForFriends.module.css"
import { data } from "./FriendsPageContent"
import RecomendedFriendCart from "./RecomendedFriendCart"
export default function LookForFriends() {
  return (
    <div className={styles.lookFriendsContainer}>
      <div>
        <InputComponent />
        <div className={styles.divider}></div>
      </div>
      <div className={styles.recommededFriendsDiv}>
        {data.map((data) => {
          return <RecomendedFriendCart avatar={data.avatar} name={data.name} />
        })}
      </div>
    </div>
  )
}
