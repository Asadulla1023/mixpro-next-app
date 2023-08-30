import React from 'react'
import styles from "@/styles/topHeader.module.css"
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
        <Container>
            <div className={styles.navigation}>
                <div className={styles.leftNav}>
                    <Link href={'tel:'}>+998 99 348 9838</Link>
                    <span></span>
                    <Link href={"/"}>azeraligarx@gmail.com</Link>
                </div>
                <div className={styles.rightNav}>
                    <div className={styles.arrowLang}>
                        <p>UZB</p>
                        <Image src={'/icons/arrow.svg'} width={11.15} height={6.55} alt='arrow'/>
                    </div>
                    <span></span>
                    <p>ORDER TRACKING</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default TopHeader