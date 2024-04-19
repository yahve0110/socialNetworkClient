import InputComponent from "@/components/Input/InputComponent"
import GroupBlock, { GroupType } from "./GroupBlock"
import { useEffect, useState } from "react"
import { getAllGroups } from "@/actions/groups/getAllGroups"
import styles from "./GroupSearch.module.css"

export default function GroupSearch() {
  const [groups, setGroups] = useState<GroupType[]>([])

  useEffect(() => {
    async function getGroupsData() {
      const groups = await getAllGroups()
      if (groups) {
        setGroups(groups)
      }
    }
    getGroupsData()
  }, [])

  return (
    <div>
      <div>
        <InputComponent sortHandler={() => console.log("ads")} />
      </div>
      <div>
        {groups &&
          groups.map((group) => {
            return (
              <GroupBlock
                key={group.GroupID}
                GroupID={group.GroupID}
                group_name={group.group_name}
                groups={groups}
                setGroups={setGroups}
              />
            )
          })}

        {groups.length < 1 && <div className={styles.noGroups}>There is no more groups</div>}
      </div>
    </div>
  )
}
