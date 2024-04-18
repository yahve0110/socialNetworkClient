import InputComponent from "@/components/Input/InputComponent"
import GroupBlock, { GroupType } from "./GroupBlock"
import { useEffect, useState } from "react"
import { getAllGroups } from "@/actions/groups/getAllGroups"

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

  console.log("GROUPS: ", groups)

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
              />
            )
          })}
      </div>
    </div>
  )
}
