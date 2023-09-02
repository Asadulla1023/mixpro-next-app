import React from "react";
import styles from "@/styles/header.module.css";
import Container from "./Container";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";
const Header = () => {
  const { data: session } = useSession()
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerSection}>
          <Link href={"/"}><h1>MIXPRO</h1></Link>
          <div className={styles.search}>
            <input type="text" placeholder="search" />
            <Image
              src="/icons/search.svg"
              alt="search icon"
              width={22}
              height={22}
            />
          </div>
          <div className={styles.icon}>
            <Image src={"/icons/noti.svg"} width={20} height={23} alt="noti" />
            <Link href={session?.user ? "/profile": "/auth"}><Image src={"/icons/user.svg"} width={23} height={23} alt="noti" /></Link>
            <Image src={"/icons/cart.svg"} width={26} height={23} alt="noti" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
