import PreviewMessage from "./PreviewMessage"
import MessagePage from "./[id]/MessagePage"
import styles from "./Messages.module.css"
import Info from "@/components/Info/Info"

export default function Messages() {
  return (
    <div className={styles.messages}>
      <div className={styles.messagesContainer}>
        <PreviewMessage />
        <PreviewMessage />
        <PreviewMessage />
        <PreviewMessage />
      </div>
      <Info/>
    </div>
  )
}
