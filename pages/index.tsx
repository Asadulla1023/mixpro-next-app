import Image from "next/image";
import styles from "@/styles/page.module.css";
import Container from "./components/global/Container";
import Header from "./components/global/Header";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";
import Footer from "./components/global/Footer";
import Ads from "./components/local/Ads"
import { signOut, useSession } from "next-auth/react";
import { ADS_RU, ADS_UZ } from "@/constant";
import { useRouter } from "next/navigation";
import ICard from "@/interfaces/ICard";
import Card from "./components/global/Card";
import TuneBlog from "./components/local/TuneBlog";
export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <main className={styles.main}>
      <TopHeader />
      <Header />
      <Categories />
      <Ads />
      <Container>
        <h2>Latest products</h2>
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
        <h2>BEST SELLING</h2>
        <div className={styles.productsWrapper}>
          {ADS_RU.map((e: ICard, index) => {
            return <Card desc={e.desc} images={e.images} manifacturer={e.manifacturer} oldPrice={e.oldPrice} price={e.price} title={e.title} url={String(index)} />
          })}
        </div>
        <button onClick={() => {
          router.push("/products")
        }}>View all</button>
        <TuneBlog/>
      </Container>
      <Footer />
    </main>
  );
}
