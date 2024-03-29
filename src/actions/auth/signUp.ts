"use server"
import { FormData } from "@/app/(auth)/signup/SignUpUi"
import { URL } from "@/globals"

export async function signUp(formData: FormData) {
  console.log(formData)

  try {
    const response = await fetch(URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      // Если ответ не успешен, извлечь текст ошибки из тела ответа
      const errorText = await response.text()
      console.error("Failed to sign up:", errorText)
      return errorText
    }

    if (response.ok) {
      return "success"
    }
  } catch (error) {
    console.error("Error signing up:", error)
    return "Server error please try again later"
  }
}
