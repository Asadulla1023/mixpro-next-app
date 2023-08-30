import React from 'react'
import styles from '@/styles/footer.module.css'
import Container from './Container'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <footer className={styles.footerSection}>
          <div className={styles.products}>
            <h4>PRODUCTS</h4>
            <ul>
              <li>Help Centre</li>
              <li>Contact Us</li>
              <li>Product Help</li>
              <li>Warranty</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className={styles.products}>
            <h4>SERVICES</h4>
            <ul>
              <li>Help Centre</li>
              <li>Contact Us</li>
              <li>Product Help</li>
              <li>Warranty</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className={styles.products}>
            <h4>SUPPORT</h4>
            <ul>
              <li>Help Centre</li>
              <li>Contact Us</li>
              <li>Product Help</li>
              <li>Warranty</li>
              <li>Order Status</li>
            </ul>
          </div>
          <div className={styles.connect}>
            <h1>MIXPRO</h1>
            <div className={styles.icon}>
              <Image src={'/icons/facebook.svg'} width={22} height={22} alt='facebook'/>
              <Image src={'/icons/insta.svg'} width={20} height={20} alt='facebook'/>
              <Image src={'/icons/youtube.svg'} width={20} height={14} alt='facebook'/>
              <Image src={'/icons/twitter.svg'} width={22} height={18} alt='facebook'/>
            </div>
            <div className={styles.inputButton}>
              <input placeholder='ENTER YOUR EMAIL' type='text'/>
              <button type='submit'>SUBSCRIBE</button>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Footer