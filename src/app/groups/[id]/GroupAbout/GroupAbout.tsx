import styles from "./GroupAbout.module.css"
import Image from "next/image"

export default function GroupAbout() {
  return (
    <div className={styles.groupAbout}>
      <Image
        src="https://cdn.pixabay.com/photo/2023/02/03/05/11/youtube-background-7764170_960_720.jpg"
        alt="group avatar"
        width={1000}
        height={1000}
      />
      <div className={styles.groupInfo}>
        <h2>Group name</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          ipsum facilis nemo! Quasi animi qui aut, iste perspiciatis labore,
          sunt earum ullam saepe amet consequatur dolorum corporis dolore,
          maxime quia.
        </p>
      </div>
    </div>
  )
}
