import { usePersonStore, User } from "@/lib/state/userStore"
import styles from "./GroupAbout.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getGroupEnterRequests } from "@/actions/groups/getAllGroupEnterRequests"
import { acceptGroupEnterRequest } from "@/actions/groups/acceptGroupEnterRequest"

type UserType = {
  user_id: string
  profilePicture: string
  first_name: string
  last_name: string
}

type GroupAboutType = {
  groupId: string
  creatorId: string
  groupName: string
  groupDescription: string
  groupImg: string
}
interface UserRequest {
  userId: string
  firstName: string
  lastName: string
  profilePicture: string
  user: UserType
}
export default function GroupAbout({
  groupId,
  creatorId,
  groupName,
  groupDescription,
  groupImg,
}: GroupAboutType) {
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)
  const [usersRequests, setUsersRequests] = useState<UserRequest[]>([])

  const currentUserId = usePersonStore((state) => state.userID)

  useEffect(() => {
    async function getRequest() {
      const enterRequests = await getGroupEnterRequests(groupId)
      console.log("ENTER requests", enterRequests)
      setUsersRequests(enterRequests)
    }
    getRequest()
  }, [])

  const acceptRequestHandler = async (userId: string) => {
    const isAccepted = await acceptGroupEnterRequest(userId, groupId)
    if (isAccepted) {
      // Filter out the accepted user from the current state
      const newUsersRequests = usersRequests.filter(
        (user) => user.userId !== userId
      )
      // Update the state with the filtered user requests
      setUsersRequests(newUsersRequests)
    }
  }

  console.log("current user id:",currentUserId)
  console.log("creator user id:",creatorId)


  return (
    <div className={styles.groupAbout}>
      <Image
        src={groupImg}
        alt="group avatar"
        width={1000}
        height={1000}
        className={styles.coverImg}
      />
      <div className={styles.groupInfo}>
        <h2>{groupName}</h2>
        <p>{groupDescription}</p>

        {currentUserId === creatorId && (
          <div
            className={styles.groupSettings}
            onClick={() => {
              setSettingsModalOpen(!settingsModalOpen)
            }}
          >
            <button> Group settings</button>
            <Image
              className={styles.settingIcon}
              src={"/assets/icons/gear.svg"}
              width={10}
              height={10}
              alt="gear"
            />
          </div>
        )}
      </div>
      {settingsModalOpen && (
        <div className={styles.modalSettings}>
          <Image
            className={styles.closeModal}
            onClick={() => {
              setSettingsModalOpen(false)
            }}
            src={"/assets/icons/delete.svg"}
            width={30}
            height={30}
            alt="gear"
          />
          <div className={styles.requests}>
            <h2>Group enter requests</h2>
            <div className={styles.requestsDiv}>
              {usersRequests ? (
                usersRequests.map((el) => {
                  return (
                    <div className={styles.requestDiv} id={el.user.user_id}>
                      <div className={styles.requestInfo}>
                        <Image
                          className={styles.userRequestAvatar}
                          src={el.user.profilePicture}
                          width={100}
                          height={100}
                          alt="avatar"
                        />
                        <p>
                          {el.user.first_name} {el.user.last_name}{" "}
                        </p>
                      </div>
                      <div className={styles.requestAccept}>
                        <button
                          onClick={() => acceptRequestHandler(el.user.user_id)}
                        >
                          Accept{" "}
                          <Image
                            src={"/assets/icons/ok.svg"}
                            alt="avatar"
                            width={15}
                            height={15}
                          />
                        </button>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className={styles.noEnteRequests}>No requests</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
