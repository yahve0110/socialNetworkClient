"use client"
import styles from "./Messages.module.css"
import Info from "@/components/Info/Info"
import { useEffect, useState } from "react"
import { getChats } from "@/actions/privateChat/getChats" // Подразумевается, что у вас уже есть тип Chat
import PreviewMessage, { PreviewMessageType } from "./PreviewMessage"

export default function Messages() {
  const [chats, setChats] = useState<PreviewMessageType[]>([]) // Указываем тип массива чатов

  useEffect(() => {
    async function getData() {
      try {
        const chatsData = await getChats()
        setChats(chatsData)
      } catch (error) {
        console.error("Error fetching chats:", error)
      }
    }
    getData()
  }, [])
console.log("CHATS: " + JSON.stringify(chats))
  return (
    <div className={styles.messages}>
      <div className={styles.messagesContainer}>
        {chats && chats.map((chat) => (
          <PreviewMessage
            key={chat.chat_id} // Указываем ключ для элементов списка
            chat_id={chat.chat_id}
            first_name={chat.first_name}
            last_name={chat.last_name}
            profile_picture={chat.profile_picture}
            last_message={chat.last_message}
            last_message_time={chat.last_message_time}
          />
        ))}
      </div>
      <Info />
    </div>
  )
}
