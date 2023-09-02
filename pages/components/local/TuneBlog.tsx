import React from "react";
import styles from "@/styles/tuneBlog.module.css";
import Image from "next/image";
import Container from "../global/Container";

const TuneBlog = () => {
  return (
    <div className={styles.tuneBlog}>
      <Container>
        <div className={styles.blog}>
          <Image
            src={"/images/redPods2.png"}
            width={400}
            height={326}
            alt="red"
          />
          <div className={styles.blogRight}>
            <h1>JBL TUNE 750TNC</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing eilet.
              Voluptatem aspernatur animi ipsam commodi cumque autem secui
              incidunt officia voluptas ducimus architecto similique esse,
              labore odit.
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TuneBlog;
