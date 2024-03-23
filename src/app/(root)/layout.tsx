"use client"
import { Header } from "@/components/Header/Header"
import Navbar from "@/components/Navbar/Navbar"
import Image from "next/image"
import React from "react"
import styles from "./styles.module.css"
import Providers from "@/app/providers"

const Lauout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      
      <Header />
      <section className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <Image
            className={styles.polygonImg}
            src="/assets/imgs/back.svg"
            alt="back"
            fill={true}
          />
          {children}
        </div>
      </section>
    </Providers>
  )
}

export default Lauout
