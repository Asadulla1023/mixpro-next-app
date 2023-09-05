import React from 'react'
import styles from "@/styles/review.module.css"
import Container from '../global/Container'
import Image from 'next/image'
import { REVIEWS_UZ } from "@/constant/index"
import IReview from '@/interfaces/IReview'
import { v4 as uuidv4 } from "uuid";
const Reviw = () => {
  return (
    <>
      <Container>
        <div className={styles.Review_section}>
          <h3 className={styles.ReviewTop}>Review</h3>
          {REVIEWS_UZ.map((e: IReview) => {
            return <div key={uuidv4()} className={styles.review}>
              <div className={styles.reviewTitle}>
                <Image src={e.userImage} alt="res" width={53} height={53} />
                <h4>{e.userName}</h4>
              </div>
              <p>{e.review}</p>
            </div>
          })}


        </div>
      </Container>
    </>
  )
}

export default Reviw