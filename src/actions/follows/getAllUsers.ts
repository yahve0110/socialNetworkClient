"use server"

import { URL } from "@/globals"
import { cookies } from "next/headers"

export const getAllUsers = async () => {
  try {
    const response = await fetch(URL + `/getAllUsers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    })
    if (response.ok) {
      const responseData = await response.json()
      console.log("users: ", responseData)

      return responseData
    } else {
      console.error("Failed to get data:", response.statusText)
      console.log(response.statusText)
    }
  } catch (error) {
    console.error("Error signing in:", error)
    return "serverError"
  }
}