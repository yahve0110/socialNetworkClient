import InputComponent from "@/components/Input/InputComponent"
import styles from "./ MyGroups.module.css"
import MyGroup from "./MyGroup"

export default function MyGroups() {
  return (
    <div>
      <div>
        <InputComponent />
      </div>
      <div>
        <MyGroup />
        <MyGroup />
        <MyGroup />
        <MyGroup />
      </div>
    </div>
  )
}
