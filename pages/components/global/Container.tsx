import styles from "@/styles/container.module.css"
import React from 'react'

interface Children {
  children: React.ReactNode,
}

const Container = ({ children }: Children) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Container