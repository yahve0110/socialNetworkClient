"use server"
import { redirect } from "next/navigation"

export async function navigateToGroupPage() {
  redirect(`/groups`)
}
export async function navigateToGroup(id: string) {
  redirect(`/groups/${id}`)
}

export async function navigateToProfile() {
  redirect(`/`)
}

export async function navigateToChat(id: string) {
  redirect(`/messages/${id}`)
}
