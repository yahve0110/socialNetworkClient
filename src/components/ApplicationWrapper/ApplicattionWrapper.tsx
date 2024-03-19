"use client"

import Navbar from "@/components/Navbar/Navbar"
import { Header } from "@/components/Header/Header"
import styles from "./styles.module.css"

import Providers from "@/app/providers"
import { usePathname } from "next/navigation"
import { SignInUi } from "@/app/signin/SignInUi"
import { SignUpUi } from "@/app/signup/SignUpUi"
import Image from "next/image"

export default function ApplicattionWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname === "/signin") {
    return <SignInUi />
  }
  if (pathname === "/signup") {
    return <SignUpUi />
  }

  return (
    <div>
      <Providers>
        <Header />
        <section className={styles.container}>
          <Navbar />

          <div className={styles.content}>
            {" "}
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
    </div>
  )
}
