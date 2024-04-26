"use server"
import { redirect } from "next/navigation"

export async function navigateToChat(id: string) {
  redirect(`/messages/${id}`)
}

