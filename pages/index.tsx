import Image from "next/image";
import styles from "@/styles/page.module.css";
import Container from "./components/global/Container";
import Header from "./components/global/Header";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";
import Footer from "./components/global/Footer";
import Ads from "./components/local/Ads"
export default function Home() {
  return (
    <main className={styles.main}>
      <TopHeader />
      <Header />
      <Categories />
      <Ads />
      <Footer />
    </main>
  );
}
