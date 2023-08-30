import React from 'react'
import styles from "@/styles/categories.module.css"
import Container from './Container'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className={styles.categories}>
        <Container>
            <div className={styles.categoriesSection}>
                <p>HOME</p>
                <div className={styles.arrow}>
                    <p>SHOP</p>
                    <Image src={'/icons/arrow.svg'} width={7} height={4} alt='arrow'/>
                </div>
                <p>BLOG</p>
                <p>CONTACT</p>
            </div>
        </Container>
    </div>
  )
}

export default Categories