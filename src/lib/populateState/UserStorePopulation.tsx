"use client"

import { getStaticProps } from "@/actions/user/getUserInfo"
import { useEffect } from "react"
import { usePersonStore } from "../state/userStore"

const UserStorePopulation = () => {
  const updateUserID = usePersonStore((state) => state.updateUserID)
  const updateFirstName = usePersonStore((state) => state.updateFirstName)
  const updateLastName = usePersonStore((state) => state.updateLastName)
  const updateAbout = usePersonStore((state) => state.updateAbout)
  const updateBirthDate = usePersonStore((state) => state.updateBirthDate)
  const updateAvatar = usePersonStore((state) => state.updateAvatar)
  const updateEmail = usePersonStore((state) => state.updateEmail)
  const updateUsername = usePersonStore((state) => state.updateUsername)

  useEffect(() => {
    const fetchDataAndLog = async () => {
      try {
        const data = await getStaticProps()
        console.log(data)

        updateUserID(data.user_id)
        updateFirstName(data.first_name)
        updateLastName(data.last_name)
        updateAbout(data.about)
        updateBirthDate(data.birth_date)
        updateAvatar(data.profilePicture)
        updateEmail(data.email)
        updateUsername(data.username)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchDataAndLog()
  }, [])

  return null
}

export default UserStorePopulation
