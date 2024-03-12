import styles from "./SwitchPages.module.css"

interface SwitchPageType {
  setMyGroupsPage: Function
  isMyGroupsPage: boolean
}

export default function SwitchPages({
  setMyGroupsPage,
  isMyGroupsPage,
}: SwitchPageType) {
  return (
    <div className={styles.switchBlock}>
      <p
        className={isMyGroupsPage ? styles.active : ""}
        onClick={() => setMyGroupsPage(true)}
      >
        My groups
      </p>
      <p
        className={!isMyGroupsPage ? styles.active : ""}
        onClick={() => setMyGroupsPage(false)}
      >
        Search groups
      </p>
    </div>
  )
}
