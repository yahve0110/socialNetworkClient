"use server"
import { cookies } from "next/headers"

import { URL } from "@/globals"

export const declineEvent = async (eventId: string) => {
  try {
    const response = await fetch(URL + `/declineEvent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        event_id: eventId,
      }),
    })

    if (response.ok) {
    
      return true
    } else {
      console.error("Failed to get data:", response.statusText)
    }
  } catch (error) {
    console.error("Error declining group event:", error)
  }
}
