import styles from "./CreateGroupEvent.module.css"

export default function CreateGroupEvent() {
  return (
    <div className={styles.crateEventContainer}>
      <div className={styles.leftPart}>
        <label htmlFor="">Event title:</label>

        <input
          className={styles.titleInput}
          type="text"
          placeholder="Event title"
        />
        <label htmlFor="">Event date:</label>

        <input type="datetime-local" />
      </div>
      <div className={styles.rightPart}>
        <textarea placeholder="Event description"></textarea>
        <button>Create</button>
      </div>
    </div>
  )
}
