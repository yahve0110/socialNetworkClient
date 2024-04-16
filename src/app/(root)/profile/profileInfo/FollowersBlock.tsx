import Link from "next/link"
import styles from "../profile.module.css"
import Image from "next/image"

interface FollowersBlockType {
  followers: any[] // Adjust 'any' to the actual type of followers
  iFollow: any[] // Adjust 'any' to the actual type of iFollow
}

export default function FollowersBlock({
  followers,
  iFollow,
}: FollowersBlockType) {
  console.log(followers)
  console.log(iFollow)
  return (
    <div className={styles.followersBLock}>
      <div className={styles.myFollowers}>
      <h2>Followers</h2>
       <div className={styles.myFollowersDiv}>
       {followers && followers.length > 0 ? (
          followers.map((el: any) => (
            <Link href={`/profile/${el.user_id}`} key={el.user_id}>
              <Image
                src={el.profilePicture}
                alt="avatar"
                width={40}
                height={40}
              />
              <div> {el.username}</div>
            </Link>
          ))
        ) : (
          <div className={styles.noFollowers}>{`No followers`}</div>
        )}
       </div>
      </div>
      <hr />
      <div>
        <h2>Following</h2>
        <div className={styles.myFollowersDiv}>
        {iFollow && iFollow.length > 0 ? (
          iFollow.map((el: any) => (
            <Link href={`/profile/${el.user_id}`} key={el.user_id} >
              <Image
                src={el.profilePicture}
                alt="avatar"
                width={40}
                height={40}
              />
              <div> {el.username}</div>
            </Link>
          ))
        ) : (
          <div className={styles.noFollowers}>{`No follows`}</div>
        )}
        </div>
      </div>
    </div>
  )
}
