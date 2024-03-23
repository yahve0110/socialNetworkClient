import Container from "@/components/ PageContainer/Container"
import Image from "next/image"
import styles from "./CreateGroup.module.css"

export default function CreateGroup() {
  return (
    <div>
      <Container>
        <div className={styles.creatGroupWrapper}>
          <label>Title:</label>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="Group title"
          />
          <label>About:</label>
          <textarea
            className={styles.groupAbout}
            placeholder="Group desctiption"
          ></textarea>
          <div>
            <div className={styles.addImageDiv}>
              <p>Add group image:</p>{" "}
              <Image
                src="/assets/icons/addImage.svg"
                alt="addimg"
                width={25}
                height={25}
              />
            </div>
           <div className={styles.buttonDiv}>
           <button>Add</button>
           </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
