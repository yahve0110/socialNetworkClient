import InputComponent from "@/components/Input/InputComponent";
import MyGroup from "./MyGroup";
import { useEffect, useState } from "react";
import { getMyGroups } from "@/actions/groups/getMyGroups";


interface MyGroupProps {
  key: string;
  GroupID: string;
  group_name: string;
}


export default function MyGroups() {
  const [groupsArr, setGroupsArr] = useState<MyGroupProps[]>([]);

  useEffect(() => {
    async function getGroups() {
      try {
        const myGroups = await getMyGroups();
        console.log(myGroups);
        setGroupsArr(myGroups);
      } catch (error) {
        console.error("Error fetching user's groups:", error);
      }
    }
    getGroups();
  }, []);

  return (
    <div>
      <div>
        <InputComponent sortHandler={() => console.log("ads")} />
      </div>
      <div>
        {groupsArr &&
          groupsArr.length > 0 &&
          groupsArr.map((el) => (
            <MyGroup
              key={el.GroupID}
              group_id={el.GroupID}
              group_name={el.group_name}
            />
          ))}
      </div>
    </div>
  );
}
