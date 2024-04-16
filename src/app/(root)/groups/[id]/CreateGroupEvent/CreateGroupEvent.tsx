import { useState } from "react"
import styles from "./CreateGroupEvent.module.css"
import { createGroupEvent } from "@/actions/groups/createEvent"
import { useGroupFeedStore } from "@/lib/state/groupFeedSore"

export default function CreateGroupEvent({ groupId,setShowCreateEvent }: { groupId: string,setShowCreateEvent:(closeEvent:boolean)=>void }) {
  const [eventTitle, setEventTitle] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventDate, setEventDate] = useState("")

  const groupFeed = useGroupFeedStore((state) => state.postsArray)
  const addGroupPost = useGroupFeedStore((state) => state.addPost)
  const setPosts = useGroupFeedStore((state) => state.setPostsArray)

  const createEventHandler = async () => {
    try {
      // Adjust the format of the event date string
      const formattedDate = new Date(eventDate.replace("T", " ")).toISOString()

      const newEvent = await createGroupEvent(
        groupId,
        eventTitle,
        eventDescription,
        formattedDate
      )

      if (!groupFeed) {
        setPosts([newEvent])
      } else {
        addGroupPost(newEvent)
      }
      setShowCreateEvent(false)
    } catch (error) {
      console.error("Error creating group event:", error)
      // Optionally, you can display an error message to the user
    }
  }

  return (
    <div className={styles.crateEventContainer}>
      <div className={styles.leftPart}>
        <label htmlFor="">Event title:</label>

        <input
          className={styles.titleInput}
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          placeholder="Event title"
        />
        <label htmlFor="">Event date:</label>

        <input
          type="datetime-local"
          value={eventDate}
          onChange={(e) => {
            setEventDate(e.target.value)
          }}
        />
      </div>
      <div className={styles.rightPart}>
        <textarea
          placeholder="Event description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        ></textarea>
        <button onClick={createEventHandler}>Create</button>
      </div>
    </div>
  )
}
