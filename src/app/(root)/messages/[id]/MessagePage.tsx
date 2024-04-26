"use client"

import styles from "./MessagePage.module.css"
import Image from "next/image"
import { useState, ChangeEvent, useEffect, useRef } from "react"
import Message, { MessageType } from "./Message"
import Link from "next/link"
import { getChatHistory } from "@/actions/privateChat/getChatHistory"
import { sendPrivateMessage } from "@/actions/privateChat/sendMessage"
import Loader from "@/components/Loader/Loader"

type ChatInfoType = {
  first_name: string
  last_name: string
  profile_picture: string
}

export default function MessagePage({ id }: { id: string }) {
  const messageContainerRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<MessageType[]>([])
  const [text, setText] = useState<string>("")
  const [chatInfo, setChatInfo] = useState<ChatInfoType>({first_name:"", last_name:"",profile_picture:""})
  const [rerender, setRerender] = useState(1)
  const [isloaded, setIsLoaded] = useState(false)


  // Загрузка сообщений и прокрутка вниз
  useEffect(() => {
    async function getData() {
      const chatData = await getChatHistory(id)
      setMessages(chatData.messages_with_user)
      setChatInfo(chatData.chat_info)
      console.log(chatData)
      scrollToBottom()
      setIsLoaded(true)
    }
    getData()
  }, [rerender])

  // Прокрутка контейнера к последнему сообщению
  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight
    }
  }

  // Работа с текстовым полем и отправка сообщения
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    event.target.style.height = "auto"
    event.target.style.height = Math.min(event.target.scrollHeight, 200) + "px"
  }

  const sendMessageHandler = async () => {
    const newMessage = await sendPrivateMessage(id, text)
    setText("") // Очищаем текстовое поле
    scrollToBottom() // Прокручиваем контейнер к последнему сообщению
    setRerender(rerender + 1)
  }
  console.log("Chat INFO:", chatInfo)


 if(!isloaded){
  return <Loader/>
 }


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
        <textarea
          onChange={handleTextChange}
          value={text}
          placeholder="Your message..."
        ></textarea>
        <Image
          className={styles.sendMsgIcon}
          onClick={sendMessageHandler}
          src="/assets/icons/sendMsg.svg"
          alt="avatar"
          width={30}
          height={30}
        />
      </div>
    </div>
  )
}
