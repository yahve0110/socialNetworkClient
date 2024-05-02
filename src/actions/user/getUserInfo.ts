"use server"
import { cookies } from "next/headers"
import { URL } from "@/globals"
import { usePersonStore } from "@/lib/state/userStore"


export const getStaticProps = async () => {
  try {
    const response = await fetch(URL + "/getUserInfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    })

    if (response.ok) {
      const responseData = await response.json()


      return responseData
    } else {
      console.error("Failed to get data:", response.statusText)
      return response.statusText
    }
  } catch (error) {
    console.error("Error signing in:", error)
    return "serverError"
  }
}
