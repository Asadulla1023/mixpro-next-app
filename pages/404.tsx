import React from 'react'
import Container from './components/global/Container'
import Header from "./components/global/Header";
import TopHeader from "./components/global/TopHeader";
import Footer from "./components/global/Footer";
import styles from "@/styles/notfound.module.css"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const NotFoundPage = () => {
    const { push } = useRouter()

    return (
        <div className={styles.notfound}>
            <TopHeader />
            <Header />
            <Container>
                <div className={styles.content}>
                    <h2>Page not found</h2>
                    <div className={styles.authentificate}>
                        <button onClick={() => {
                            push("/")
                        }}>Redirect to home page
                        </button>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default NotFoundPage