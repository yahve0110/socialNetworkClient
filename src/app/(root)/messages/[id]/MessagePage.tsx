"use client"

import styles from "./MessagePage.module.css"
import Image from "next/image"
import { useState, ChangeEvent, useEffect, useRef } from "react"
import Message, { MessageType } from "./Message"
import Link from "next/link"
import { getChatHistory } from "@/actions/privateChat/getChatHistory"
import { sendPrivateMessage } from "@/actions/privateChat/sendMessage"
import Loader from "@/components/Loader/Loader"
import { usePersonStore } from "@/lib/state/userStore"
import { ws } from "../page"

type ChatInfoType = {
  first_name: string
  last_name: string
  profile_picture: string
}

export default function MessagePage({ id }: { id: string }) {
  const messageContainerRef = useRef<HTMLDivElement>(null)
  // const [messages, setMessages] = useState<MessageType[]>([])
  const [messages, setMessages] = useState<any[]>([])

  const [text, setText] = useState<string>("")
  const [chatInfo, setChatInfo] = useState<ChatInfoType>({
    first_name: "",
    last_name: "",
    profile_picture: "",
  })
  const [isloaded, setIsLoaded] = useState(false)

  const currentUserId = usePersonStore((state) => state.userID)

  function sendMessage() {
    // Отправка сообщения через WebSocket
    if (!text.trim()) {
      return
    }
    ws.send(
      JSON.stringify({ message: text, user_id: currentUserId, chat_id: id })
    )
    setText("")
    scrollToBottom()
  }

  ws.onmessage = function (event) {
    const data = JSON.parse(event.data)

    if (messages && messages.length > 0) {
      setMessages([...messages, data])
    } else {
      setMessages([data])
    }

    scrollToBottom()
  }

  // Загрузка сообщений и прокрутка вниз
  useEffect(() => {
    async function getData() {
      const chatData = await getChatHistory(id)
      setMessages(chatData.messages_with_user)
      setChatInfo(chatData.chat_info)
      scrollToBottom()
      setIsLoaded(true)
    }
    getData()
  }, [])

  // Прокрутка контейнера к последнему сообщению
  const scrollToBottom = () => {
    console.log("Scrolling to bottom...")
    if (messageContainerRef.current) {
      console.log("Message container ref found:", messageContainerRef.current)
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight
    } else {
      console.log("Message container ref is null")
    }
  }

  // Работа с текстовым полем и отправка сообщения
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    event.target.style.height = "auto"
    event.target.style.height = Math.min(event.target.scrollHeight, 200) + "px"
  }

  const emojis = ["😀", "😂", "😊", "😍", "🥰", "😎", "🤩", "😘", "😋", "🤔"] // Add more emojis as needed
  const [showPicker, setShowPicker] = useState(false)

  const togglePicker = () => {
    setShowPicker(!showPicker)
  }

  const handleEmojiSelect = (emoji:string) => {
    setText(text+emoji)
    togglePicker();
  };

  if (!isloaded) {
    return <Loader />
  }
  console.log("MESSAGES", messages)
  return (
    <div className={styles.messagePageWrapper}>
      <div className={styles.messagePageContainerUp}>
        <div className={styles.goBackDiv}>
          <Image
            className={styles.arrowImg}
            src="/assets/imgs/arrow.png"
            alt="avatar"
            width={17}
            height={17}
          />
          <Link href="/messages">Back</Link>
        </div>
        <div>
          {chatInfo.first_name} {chatInfo.last_name}
        </div>
        <div>
          <Image
            className={styles.profile_picture}
            src={chatInfo.profile_picture}
            alt="avatar"
            width={40}
            height={40}
          />
        </div>
      </div>

      <div
        className={styles.messagePageContainerMiddle}
        ref={messageContainerRef}
      >
        {messages &&
          messages.map((el, index) => {
            return (
              <Message
                key={index}
                chatId={id}
                content={el.content}
                first_name={el.first_name}
                last_name={el.last_name}
                timestamp={el.timestamp}
                profile_picture={el.profile_picture}
                message_author_id={el.message_author_id}
              />
            )
          })}
      </div>

      <div className={styles.messagePageContainerBottom}>
        <div className={styles.emojiPicker}>
          <button className={styles.emojiBtn} onClick={togglePicker}>😊</button>
          {showPicker && (
            <div className={styles.emojiDiv}>
              {emojis.map((emoji, index) => (
                <span className={styles.emojiContainer} key={index} onClick={() => handleEmojiSelect(emoji)}>
                  {emoji}
                </span>
              ))}
            </div>
          )}
        </div>

        <textarea
          onChange={handleTextChange}
          value={text}
          placeholder="Your message..."
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              sendMessage()
            }
          }}
        ></textarea>
        <Image
          className={styles.sendMsgIcon}
          onClick={sendMessage}
          src="/assets/icons/sendMsg.svg"
          alt="avatar"
          width={30}
          height={30}
        />
      </div>
    </div>
  )
}
