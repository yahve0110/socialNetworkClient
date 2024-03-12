import Container from "@/components/ PageContainer/Container"
import styles from "./page.module.css"
import Events from "../Events/Events"
import GroupMembers from "./GroupMembersBlock/GroupMembers"
import GroupContacts from "./GroupContacts/GroupContacts"
import CreatePost from "@/components/CreatePost/CreatePost"
import Post from "@/components/Post/Post"
import GroupAbout from "./GroupAbout/GroupAbout"
import CreateGroupPost from "./CreateGroupPost/CreateGroupPost"
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock"

export default function page() {
  return (
    <div className={styles.container}>
        <GroupAbout/>
      <Container>
         {/* <CreateGroupPost/> */}
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
      </Container>
      <div  className={styles.sidebar}>
        <ButtonsBlock/>
        <Events />
        <GroupMembers />
        <GroupContacts/>
      </div>
    </div>
  )
}
