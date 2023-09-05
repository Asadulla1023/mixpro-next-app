import { useRouter } from "next/router";
import React, { useState } from "react";
// import axios from "axios";
import styles from "@/styles/detail.module.css";
import arrow from "../../public/arrow.svg";
import headphones from "../../public/headphone.png";
import star from "../../public/star.svg";
import Image from "next/image";
import { images } from "@/next.config";
import Header from "../components/global/Header";
import Link from "next/link";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [img, setImg] = useState();

  const [counter, setCounter] = useState(1);
  const [focus, setFocus] = useState<boolean>(false);

  

  const selected = data.find((dt) => dt.p_id === id);
  selected && console.log(selected);
    // console.log(img);
    return (
      <>
        <div className={styles.detail}>
          <Header />
          <div className={styles.container}>
            <div className={styles.small_Nav}>
              <ul className={styles.small_nav}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <div className={styles.arrow}>
                  <Image className={styles.arrow__img} src={arrow} alt="" />
                  <Image src={arrow} alt="" />
                </div>
                <li>
                  <Link href="/">All products</Link>
                </li>
                <div className={styles.arrow}>
                  <Image className={styles.arrow__img} src={arrow} alt="" />
                  <Image src={arrow} alt="" />
                </div>
                <li>
                  <Link href="/">JBL TUNE 750 TNC</Link>
                </li>
              </ul>
            </div>

            <div className={styles.Detail_section}>
              <div className={styles.right}>
                <Image
                  width={643}
                  height={643}
                  src={selected && selected.image}
                  alt=""
                />
              </div>
              <div className={styles.left}>
                <h1 className={styles.left_title} style={{
                  textTransform: "capitalize"
                }}>{selected && selected.productName}</h1>
                <p className={styles.main_p}>
                  Brand: <span style={{
                    textTransform: "capitalize"
                  }}>{selected && selected.title}</span>
                </p>
                <p className={styles.text}>
                  {selected && selected.desc}
                </p>
                <h3 className={styles.price}>{selected && selected.price * counter} som</h3>
                <div className={styles.count}>
                  <button
                    onClick={() => {
                      counter !== 1 && setCounter(counter - 1);
                    }}
                  >
                    -
                  </button>
                  <p>{counter}</p>
                  <button
                    onClick={() => {
                      counter !== 10 && setCounter(counter + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                style={{
                  cursor: "pointer"
                }}
                  className={styles.AddCard}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } 


export default Detail;
