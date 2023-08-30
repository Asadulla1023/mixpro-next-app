import React from "react";
import styles from "@/styles/category.module.css";
import Container from "./components/global/Container";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import Link from "next/link";
import Image from "next/image";
import Card from "./components/global/Card";
import ICard from "@/interfaces/ICard";
import {CARD_OBJ_UZ} from "../constant/index"
const Page = () => {
    return (
        <div className={styles.page}>
            <TopHeader />
            <Header />
            <Categories />
            <Container>
                <div className={styles.pageNav}>
                    <Link href={"/home"}>Home</Link>
                    <Image
                        src={"/icons/arrowsc.svg"}
                        width={13.163}
                        height={11.163}
                        alt="arrowsc"
                    />
                    <Link href={"/All Products"}>All Products</Link>
                </div>
                <div className={styles.pageSection}>
                    <div className={styles.left}>
                        <p>Brends</p>
                        <div className={styles.inputLabel}>
                            <input type="checkbox" />
                            <label>JBL</label>
                        </div>
                        <div className={styles.inputLabel}>
                            <input type="checkbox" />
                            <label>Beat</label>
                        </div>
                        <div className={styles.inputLabel}>
                            <input type="checkbox" />
                            <label>Logitech</label>
                        </div>
                        <div className={styles.inputLabel}>
                            <input type="checkbox" />
                            <label>Samsung</label>
                        </div>
                        <div className={styles.inputLabel}>
                            <input type="checkbox" />
                            <label>Sony</label>
                        </div>
                    </div>
                    <div className={styles.right}>
                        {CARD_OBJ_UZ.map((e: ICard, index: number) => {
                            return (
                                <Card
                                    images={e.images}
                                    title={e.title}
                                    oldPrice={e.oldPrice}
                                    price={e.price}
                                    url={`${index}`} manifacturer={""} desc={""} 
                               />
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Page;