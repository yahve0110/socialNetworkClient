import { URL } from "@/globals"
import { navigateToLogin } from "../helpers"

export async function logoutHandler() {
  try {
    const response = await fetch(URL + "/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })

    console.log(response.status)

    if (response.ok) {
      navigateToLogin()
    } else {
      return false
    }
  } catch (error) {
    console.error("Error checking session:", error)
    return false
  }
}
