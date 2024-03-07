"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import styles from "./Header.module.css"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    }
    if (theme === "dark") {
      setTheme("light")
    }
  }

  return (
    <>
      <div className={styles.swithcDiv}>
        <label className={styles.switchLabel}>
          <input
            type="checkbox"
            className={styles.switchBox}
            onChange={toggleTheme}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </>
  )
}

export default ThemeSwitch
