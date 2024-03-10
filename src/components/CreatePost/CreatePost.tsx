"use client"
import { useState } from "react"
import styles from "./CreatePost.module.css"
import Image from "next/image"
import { FC } from "react" // Import FC (Functional Component) type

export default function CreatePost() {
  const [formActive, setFormActive] = useState(false)
  return (
    <>
      {formActive ? (
        <InputFormActive />
      ) : (
        <InputFormInactive setFormActive={setFormActive} />
      )}
    </>
  )
}

interface PostFormInactiveProps {
  setFormActive:React.Dispatch<React.SetStateAction<boolean>>
}

export const InputFormInactive: FC<PostFormInactiveProps> = ({ setFormActive }) => {
  return (
    <div className={styles.createPostContainer}>
      <Image
        className={styles.avatarImg}
        src="/assets/imgs/avatar.png"
        alt="avatar"
        width={20}
        height={20}
      />
      <textarea
        className={styles.createPostContainerTextarea}
        placeholder="what's new?"
        onFocus={() => setFormActive(true)}
      ></textarea>
      <Image
        className={styles.avatarImg}
        src="/assets/icons/addImage.svg"
        alt="addimg"
        width={15}
        height={15}
      />
    </div>
  )
}

function InputFormActive() {
  return (
    <div className={styles.ActiveCreatePostContainer}>
      <div className={styles.activeImgs}>
        <Image
          className={styles.avatarImg}
          src="/assets/imgs/avatar.png"
          alt="avatar"
          width={30}
          height={30}
        />

        <Image
          className={styles.avatarImg}
          src="/assets/icons/addImage.svg"
          alt="addimg"
          width={20}
          height={20}
        />
      </div>
      <div className={styles.secondPostPart}>
        <textarea
          className={styles.ActiveCreatePostContainerTextarea}
          placeholder="what's new?"
          autoFocus
        ></textarea>
        <button className={styles.postBtn}>Post</button>
      </div>
    </div>
  )
}
