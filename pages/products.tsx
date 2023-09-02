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
import { CARD_OBJ_UZ, ADS_RU } from "../constant/index"
import Footer from "./components/global/Footer";
const Page = () => {
    const manifs = ADS_RU
    return (
        <div className={styles.page}>
            <TopHeader />
            <Header />
            <Categories />
            <Container>
                <div className={styles.pageNav}>
                    <Link href={"/"}>Home</Link>
                    <Image
                        src={"/icons/arrowsc.svg"}
                        width={13.163}
                        height={11.163}
                        alt="arrowsc"
                    />
                    <Link href={"/products"}>All Products</Link>
                </div>
                <div className={styles.pageSection}>
                    <div className={styles.left}>
                        <p>Brends</p>
                        {CARD_OBJ_UZ.map((e:ICard) => {
                            return <div className={styles.inputLabel}>
                            <input type="checkbox" />
                            <label>{e.manifacturer}</label>
                        </div>
                        })}
                    </div>
                    <div className={styles.right}>
                        {ADS_RU.map((e: ICard, index: number) => {
                            return (
                                <Card
                                    images={e.images}
                                    title={e.title}
                                    oldPrice={e.oldPrice}
                                    price={e.price}
                                    url={`${index+1}`} manifacturer={""} desc={""}
                                />
                            );
                        })}
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default Page;