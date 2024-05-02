import React from "react";
import Link from "next/link";
import styles from "../profile.module.css";
import Image from "next/image";

interface FollowersBlockType {
  followers: any[]; // fix later
  iFollow: any[]; // fix later
}

const FollowersBlock: React.FC<FollowersBlockType> = React.memo(
  function FollowersBlock({ followers, iFollow }) {
  return (
    <div className={styles.followersBLock}>
      <div className={styles.myFollowers}>
        <h4>Followers</h4>
        <div className={styles.myFollowersDiv}>
          {followers && followers.length > 0 ? (
            followers.map((el: any) => (
              <Link href={`/profile/${el.user_id}`} key={el.user_id}>
                <Image
                  src={el.profilePicture}
                  alt="avatar"
                  width={100}
                  height={100}
                />
                <div> {el.first_name}</div>
              </Link>
            ))
          ) : (
            <div className={styles.noFollowers}>{`No followers`}</div>
          )}
        </div>
      </div>
      <hr />
      <div>
        <h4>Following</h4>
        <div className={styles.myFollowersDiv}>
          {iFollow && iFollow.length > 0 ? (
            iFollow.map((el: any) => (
              <Link href={`/profile/${el.user_id}`} key={el.user_id}>
                <Image
                  src={el.profilePicture}
                  alt="avatar"
                  width={100}
                  height={100}
                />
                <div> {el.first_name}</div>
              </Link>
            ))
          ) : (
            <div className={styles.noFollowers}>{`No follows`}</div>
          )}
        </div>
      </div>
    </div>
  );
});

export default FollowersBlock;
