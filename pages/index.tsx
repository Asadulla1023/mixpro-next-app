import styles from "@/styles/page.module.css";
import Container from "./components/global/Container";
import Header from "./components/global/Header";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";
import Footer from "./components/global/Footer";
import Ads from "./components/local/Ads"
import { useSession } from "next-auth/react";
import { ADS_RU } from "@/constant";
import { useRouter } from "next/navigation";
import ICard from "@/interfaces/ICard";
import Card from "./components/global/Card";
import { v4 as uuidv4 } from "uuid";
import CategoryCard from "./components/global/CategoryCard";
import TuneBlog from "./components/local/TuneBlog";
import Image from "next/image";
export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <main className={styles.main}>
      <TopHeader />
      <Header />
      <Categories />
      <Ads />
      <CategoryCard />
      <Container>
        <h2>Latest products</h2>
        <div className={styles.productsWrapper}>
          {ADS_RU.map((e: ICard, index) => {
            return <Card key={uuidv4()} desc={e.desc} images={e.images} manifacturer={e.manifacturer} oldPrice={e.oldPrice} price={e.price} title={e.title} url={String(index)} />
          })}
        </div>
        <button onClick={() => {
          router.push("/products")
        }}>View all</button>
      </Container>
      <TuneBlog />
      <Container>
        <h2>BEST SELLING</h2>
        <div className={styles.productsWrapper}>
          {ADS_RU.map((e: ICard, index) => {
            return <Card desc={e.desc} images={e.images} manifacturer={e.manifacturer} oldPrice={e.oldPrice} price={e.price} title={e.title} url={String(index)} />
          })}
        </div>
        <button onClick={() => {
          router.push("/products")
        }}>View all</button>
      </Container>
      <Container>
        <h2>LATEST BLOG</h2>
        <div className={styles.blog}>
          <Image src={"/images/blog1.jpg"} alt="blog image" width={660} height={408} />
          <div className={styles.blogContent}>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quit sunt
              facilis    laborum,    similique,    maxime    soluta    eligendi    saepe
              perspiciatis, quidem voluptas ratione officia modi quibusdam id!
              Atque, commodi? Earum, illum fuga.</p>
            <button>Read more</button>
          </div>
        </div>
        <div className={styles.blog}>
          <div className={styles.blogContent}>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quit sunt
              facilis    laborum,    similique,    maxime    soluta    eligendi    saepe
              perspiciatis, quidem voluptas ratione officia modi quibusdam id!
              Atque, commodi? Earum, illum fuga.</p>
            <button>Read more</button>
          </div>
          <Image src={"/images/blog2.jpg"} alt="blog image" width={660} height={408} />
        </div>
        <button onClick={() => {
          router.push("/products")
        }}>View all</button>
      </Container>
      <Footer />
    </main>
  );
}
