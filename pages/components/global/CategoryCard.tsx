import React from 'react'
import ICategoryCard from '@/interfaces/ICategoryCard'
import Container from './Container'
import Image from 'next/image'
import styles from "../../../styles/categoryCard.module.css"
import { CATEGORYCARD_RU, CATEGORYCARD_UZ } from "@/constant";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { usePathname } from "next/navigation";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { useTranslations } from "next-intl";
const CategoryCard = () => {
  // const t = useTranslations();
  // const path = usePathname();

  return (
    <div>
      <Container>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          {CATEGORYCARD_UZ.map((e: ICategoryCard, index) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <div className={styles.card}>
                  <div className={styles.cardTxt}>
                    <h4>{e.title}</h4>
                    <button>SHOP COLLECTION</button>
                  </div>
                  <Image
                    src={e.image}
                    width={150}
                    height={150}
                    alt="iud"
                  />
                </div>
              </SwiperSlide>
            );
          })}

        </Swiper>
      </Container>
    </div>
  )
}

export default CategoryCard