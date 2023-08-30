import React from 'react'
import ICard from '@/interfaces/ICard'
import styles from "@/styles/card.module.css"
import Link from 'next/link'
import Image from "next/image"

const Card = ({images, title, oldPrice, price, desc, manifacturer, url}: ICard) => {
    return (
        <Link href={url} className={styles.card}>
            <div className={styles.container}>
                {/* @ts-ignore */}
                <Image src={images[0]} alt='c' width={308} height={308} />
                <h3>{title}</h3>
                <div className={styles.prices}>
                    <p className={styles.oldPrice}>{oldPrice}</p>
                    <p className={styles.price}>{price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card