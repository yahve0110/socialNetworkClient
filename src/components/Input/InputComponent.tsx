import styles from "./Input.module.css"
import Image from "next/image"

export default function InputComponent() {
  return (
    <div className={styles.searchForFriendsDiv}>
      <input type="text" placeholder="Search for friends" />
      <div className={styles.searchImgDiv}>
        <Image
          src="/assets/imgs/search.png"
          alt="searchIcon"
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}
