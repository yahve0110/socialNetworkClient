import InputComponent from "@/components/Input/InputComponent"
import FriendCart from "./FriendCart"
import styles from "./friends.module.css"


export const data = [
  {
    id: 1,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 2,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 3,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 4,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 1,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 2,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 3,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 4,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 1,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 2,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 3,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  {
    id: 4,
    name: "Ilya Skorokhodov",
    avatar: "http://nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
]
export default function FriendsPageContent() {
  return (
    <>
      <div className={styles.searchForFriendsBlock}>
        <InputComponent />
        <div className={styles.divider}></div>

        <div className={styles.friendsBlockContainer}>
          {data.map((data) => {
            return <FriendCart avatar={data.avatar} name={data.name} />
          })}
        </div>
      </div>
    </>
  )
}
