import styles from "../profile.module.css"
import Image from "next/image"

export default function FollowersBlock({ followers }: { followers: any[] }) {
  console.log(followers)

  return (
    <div className={styles.followersBLock}>
      {followers && followers.length > 0 ? (
        followers.map((el: any) => (
          <div key={el.user_id}>
            <Image
              src={el.profilePicture}
              alt="avatar"
              width={40}
              height={40}
            />
            <div> {el.username}</div>
          </div>
        ))
      ) : (
        <div className={styles.noFollowers}>{`You don't have any followers`}</div>
      )}
    </div>
  )
}
