"use server"
import { redirect } from 'next/navigation'

export async function navigateToGroup(id: string) {
    redirect(`/groups/${id}`)
}