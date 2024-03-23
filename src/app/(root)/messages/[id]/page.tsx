import Info from "@/components/Info/Info"
import MessagePage from "./MessagePage"
import styles from "./MessagePage.module.css"

const MessageId = ({ params }: any) => {
  return (
    <div className={styles.messagePageContainer}>
      <MessagePage />
      <Info />
    </div>
  )
}

export default MessageId
