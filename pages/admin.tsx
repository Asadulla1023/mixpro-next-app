import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useRouter } from "next/router";
import { sendError } from "next/dist/server/api-utils";
import Header from "./components/global/Header";
import Head from "next/head";
import styles from "../styles/pak.module.css";
// import axios from "axios";
const admin = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [img, setImg] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  const descRef = useRef<any>();
  const priceRef = useRef<any>();
  const productNameRef = useRef<any>();
  const titleRef = useRef();

  const navigate = () => {
    router.push("/");
  };
  useEffect(() => {
    if (session?.user && session.user.email !== "fayzullox512mi@gmail.com") {
      router.push("/profile");
    }
    if (!session) {
      router.push("/auth/signup");
    }
  }, []);
  const handlePost = () => {
    // axios
    //   .post(
    //     "http://192.168.10.62:8000/api/v1/products",
    //     {
    //       desc: descRef.current.value,
    //       price: priceRef.current.value,
    //       productName: productNameRef.current.value,
    //       title: select,
    //       image: img && img,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   )
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  };
  if (session) {
    return (
      <>
        <Head>
          <title>Admin Page</title>
        </Head>
        <div className={styles.adminPage}>
          <Header />
          <div className={styles.container}>
            <form className={styles.addProductForm}>
              <h4
                style={{
                  textAlign: "left",
                }}
              >
                Model nomi
              </h4>
              <input
                required
                type="text"
                id="title"
                ref={productNameRef}
                placeholder="Misol uchun: Mi 13 ultra"
              />
              <h4>Model rasmi</h4>
              <input
                required
                type="file"
                accept="image/*"
                onChange={(image:any) => {
                  setImg(image.target.files[0]);
                }}
              />
              <h4>Model narxi</h4>
              <input
                required
                type="number"
                ref={priceRef}
                placeholder="Misol uchun: 120000, so'm keremas"
              />
              <h4>Model haqida</h4>
              <textarea
                required
                rows={4}
                ref={descRef}
                placeholder="Misol uchun: rangi qora, hotira.... Ko'p ma'lumot bo'gani yaxshi"
              />
              <h4>Brend nomi</h4>
              <select
                onChange={(e) => {
                  if (e.currentTarget.options.selectedIndex === 0) {
                    setSelect("mi");
                  } else if (e.currentTarget.options.selectedIndex === 1) {
                    setSelect("samsung");
                  } else if (e.currentTarget.options.selectedIndex === 2) {
                    setSelect("iphone");
                  }
                }}
              >
                <optgroup>
                  {["mi", "samsung", "iphone"].map((e) => {
                    return <option value={e}>{e}</option>;
                  })}
                </optgroup>
              </select>
              <button
                onClick={() => {
                  if (descRef.current) {
                    handlePost();
                  } else {
                    alert("Formda mavjud emas");
                  }
                }}
                type="submit"
              >
                Post qilish
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default admin;
