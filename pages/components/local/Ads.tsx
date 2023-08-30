import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { ADS_UZ, ADS_RU } from "@/constant";
import { usePathname } from "next/navigation";
import ICard from "@/interfaces/ICard";
import styles from "@/styles/ads.module.css";
import Container from "../global/Container";
import Link from "next/link";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const Ads = () => {
  const path = usePathname();
  return (
    <Container>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        dragEnabled={false}
        className={styles.add}
      >
        <Slider>
          {path === "/ru"
            ? ADS_RU.map((e: ICard, index) => {
              return (
                <Slide index={index} key={uuidv4()}>
                  <div className={styles.adsSection}>
                    <div className={styles.left}>
                      <h4>{e.manifacturer}</h4>
                      <h1>{e.title}</h1>
                      <p>{e.desc}</p>
                      <button>shop now</button>
                    </div>
                    <div className={styles.right}>
                      <Image
                        width={643}
                        height={643}
                        src={e.images[0]}
                        alt="ferfr"
                      />
                    </div>
                  </div>
                </Slide>
              );
            })
            : ADS_UZ.map((e: ICard, index) => {
              return (
                <Slide index={index} key={uuidv4()}>
                  <Link href={e.url}>
                    <div className={styles.adsSection}>
                      <div className={styles.left}>
                        <h4>{e.manifacturer}</h4>
                        <h1>{e.title}</h1>
                        <p>{e.desc}</p>
                        <button>shop now</button>
                      </div>
                      <div className={styles.right}>
                        <Image
                          width={643}
                          height={643}
                          src={e.images[0]}
                          alt="ferfr"
                        />
                      </div>
                    </div>
                  </Link>
                </Slide>
              );
            })}
        </Slider>
        <div className={styles.controller}>
          <ButtonBack>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 13 18" fill="none">
              <path d="M12.127 17.1429L2.1746 8.69844L12.127 1.15876" stroke="black" stroke-width="2" />
            </svg>
          </ButtonBack>
          <ButtonNext>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <path d="M13.873 10.8571L23.8254 19.3016L13.873 26.8412" stroke="black" stroke-width="2" />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </Container>
  );
};

export default Ads;
