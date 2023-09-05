import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "@/styles/product.module.css";
import Image from "next/image";
import Header from "../components/global/Header";
import Link from "next/link";
import Categories from "../components/global/Categories";
import Container from "../components/global/Container";
import Review from "../components/local/Review";
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
        <Categories />
        <Container>
          <div className={styles.small_Nav}>
            <ul className={styles.small_nav}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <div className={styles.arrow}>
                <Image className={styles.arrow__img} src={"/icons/arrow.svg"} width={4.5} height={8.0} alt="" />
                <Image src={"/icons/arrow.svg"} width={4.5} height={8.0} alt="" />
              </div>
              <li>
                <Link href="/">All products</Link>
              </li>
              <div className={styles.arrow}>
                <Image className={styles.arrow__img} src={"/icons/arrow.svg"} width={4.5} height={8.0} alt="" />
                <Image src={"/icons/arrow.svg"} width={4.5} height={8.0} alt="" />
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
              }}>JBL TUNE 750 TNC</h1>
              <p className={styles.main_p}>
                Brand: <span style={{
                  textTransform: "capitalize"
                }}>JBL</span>
              </p>
              <p className={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <h3 className={styles.price}>{selected && selected.price * counter}$2345 som</h3>
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
          <div className={styles.productDescription}>
            <h3>Description</h3>
            <div className={styles.productDesc}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum magni perferendis adipisci nemo nesciunt assumenda eligendi magnam. Voluptatem, sequi culpa! A repudiandae ex vero culpa veritatis, tempora expedita aliquid? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam doloremque tempora vitae obcaecati aliquid ipsa sed corporis laboriosam hic quod et ut ipsum, aperiam dolore odit quo natus nihil earum pariatur iure quia non deleniti sit aliquam! Quaerat tempore deleniti sequi recusandae sed tenetur, aliquam magni, dolor neque, illo laborum.
              </p>
              <Image src={"/images/productDesc1.png"} width={1000} height={968} alt="ninef" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquid fuga ratione quae accusamus delectus illum. Maiores, itaque. Dolorum nihil praesentium iure, optio atque cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorum eum, ex blanditiis reprehenderit, nostrum iusto et impedit, sit aspernatur saepe rerum alias libero natus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis similique saepe sunt et voluptas nobis, dicta cum. Eaque quo dolore, id, laborum molestiae molestias nulla dolores, ipsum impedit nobis natus.
              </p>
              <Image src={"/images/productDesc1.png"} width={968} height={1000} alt="ninef" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio blanditiis dolores id? Cupiditate necessitatibus accusamus atque dolores rerum. Exercitationem enim hic quo placeat, ratione quibusdam perferendis? Placeat asperiores nisi officiis.
              </p>
              <button
                style={{
                  cursor: "pointer"
                }}
                className={styles.viewBtn}
              >
                VIEW LESS
              </button>
            </div>
          </div>
          <Review/>
        </Container>


      </div>
    </>
  );
}


export default Detail;
