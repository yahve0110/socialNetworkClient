import InputComponent from "@/components/Input/InputComponent"
import GroupBlock from "./GroupBlock"
import { log } from "console"

export default function GroupSearch() {
  return (
    <div>
      <div>
        <InputComponent sortHandler={()=>(console.log("ads")
        )} />
      </div>
      <div>
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
        <GroupBlock />
      </div>
    </div>
  )
}
