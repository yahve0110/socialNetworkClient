// InputFormActive.tsx
import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import styles from "./CreatePost.module.css"
import { usePersonStore } from "@/lib/state/userStore"
import { FC } from "react"
import { MAX_FILE_SIZE_MB } from "@/globals"
import { handleFileChange } from "@/helpers/imageUpload"
import { createUserPost } from "@/actions/post/createPost"
import { useProfilePostStore } from "@/lib/state/profilePostStore"
interface PostFormInactiveProps {
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>
  placeholder?: string
}

interface InputFormActiveProps {
  formActive: boolean
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const InputFormInactive: FC<PostFormInactiveProps> = ({
  setFormActive,
}) => {
  return (
    <div
      className={styles.createPostContainer}
      onClick={() => setFormActive(true)}
    >
      <div className={styles.leftPart}>
        <Image
          src="/assets/imgs/search.png"
          alt="avatar"
          width={20}
          height={20}
        />
        <p>Add post</p>
      </div>
      <Image
        src="/assets/icons/addImage.svg"
        alt="addimg"
        width={15}
        height={15}
      />
    </div>
  )
}

export default function CreatePost({ placeholder }: { placeholder: string }) {
  const [formActive, setFormActive] = useState(false)

  return (
    <>
      {formActive ? (
        <InputFormActive
          formActive={formActive}
          setFormActive={setFormActive}
        />
      ) : (
        <InputFormInactive
          setFormActive={setFormActive}
          placeholder={placeholder}
        />
      )}
    </>
  )
}

function InputFormActive({ formActive, setFormActive }: InputFormActiveProps) {
  //<----------------------STATE----------------------->
  const [postImg, setPostImg] = useState<string | ArrayBuffer | null>(null)
  const [postText, setPostText] = useState("")
  const [emptyTextError, setEmptyTextError] = useState("")
  const formRef = useRef<HTMLDivElement>(null)

  const avatarImg = usePersonStore((state) => state.avatar)

  function activateInput() {
    console.log("im in")
    const input = document.getElementById("input")
    input?.click()
  }

  //<----------------------HANDLERS----------------------->
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmptyTextError("")
    const file = event.target.files?.[0]
    if (!file) {
      setEmptyTextError(`Can't upload file`)
    }
    if (file instanceof File) {
      const response = await handleFileChange(file)
      if (!response) {
        setEmptyTextError(`File size exceeds ${MAX_FILE_SIZE_MB}MB limit.`)
      } else {
        setPostImg(response)
      }
    }
  }
  const addPost = useProfilePostStore((state) => state.addPost)

  const handlePostClick = async () => {
    setEmptyTextError("")

    if (postText === "") {
      setEmptyTextError(`Form can't be empty`)
      return
    }

    const newPost = await createUserPost(postText, postImg)

    addPost(newPost)
    setFormActive(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setFormActive(false)
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  //<----------------------JSX----------------------->
  return (
    <div className={styles.ActiveCreatePostContainer} ref={formRef}>
      <div className={styles.activeImgs}>
        <div>
          <Image
            className={styles.avatarImg}
            src={avatarImg}
            alt="avatar"
            width={80}
            height={80}
          />
        </div>
        <Image
          src="/assets/icons/addImage.svg"
          alt="addimg"
          width={20}
          height={20}
          onClick={activateInput}
        />
      </div>
      <div className={styles.secondPostPart}>
        <textarea
          className={styles.ActiveCreatePostContainerTextarea}
          placeholder="what's new?"
          autoFocus
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        ></textarea>

        {emptyTextError && (
          <div className={styles.emptyTextError}>{emptyTextError}</div>
        )}
        <input
          className={styles.avatarBtn}
          type="file"
          accept="image/*,png,jpeg,jpg"
          style={{ display: "none" }}
          onChange={handleImageUpload}
          id="input"
        />
        {postImg && (
          <div className={styles.ImgPreviewDiv}>
            <div className={styles.clearImgBtn}>
              <Image
                src="/assets/icons/delete.svg"
                alt="Selected"
                className={styles.clearImgBtn}
                width={20}
                height={20}
                onClick={() => setPostImg("")}
              />
            </div>
            <Image
              src={postImg.toString()}
              alt="Selected"
              className={styles.previewImg}
              fill
            />
          </div>
        )}
        <div className={styles.lowerPostDiv}>
          <button className={styles.postBtn} onClick={handlePostClick}>
            Post
          </button>
        </div>
      </div>
    </div>
  )
}
