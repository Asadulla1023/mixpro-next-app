import { signIn } from 'next-auth/react'
import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from "@/styles/auth.module.css"
import Container from './components/global/Container'
import Header from "./components/global/Header";
import TopHeader from "./components/global/TopHeader";
import Footer from "./components/global/Footer";
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
const Auth = () => {
    const {push} = useRouter()
    const {data: session} = useSession()
    useEffect(()=> {
        if(session?.user) {
            push("/profile")
        }
    }, [session])
    return (
        <div className={styles.auth}>
            <TopHeader />
            <Header />
            <Container>
                <div className={styles.content}>
                    <h2>Auth with</h2>
                    <div className={styles.authentificate}>
                        <button onClick={() => {
                            signIn("google")
                            push("/")
                        }}>Sign up with Google<Image src={"/icons/google.svg"} alt='google icon' width={22} height={22} />
                        </button>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Auth