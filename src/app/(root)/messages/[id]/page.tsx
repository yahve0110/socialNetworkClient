import Info from "@/components/Info/Info"
import MessagePage from "./MessagePage"
import styles from "./MessagePage.module.css"

const MessageId = ({ params }: { params: { id: string } }) => {
  return (
    <div className={styles.messagePageContainer}>
      <MessagePage id={params.id} />
      <Info />
    </div>
  )
}

export default MessageId
