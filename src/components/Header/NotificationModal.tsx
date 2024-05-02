import styles from "./Header.module.css"
import Notification from "./Notification"

const NotificationModal = () => {
  return (
    <div className={styles.notificationModal}>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </div>
  )
}

export default NotificationModal
