import { useSession } from "next-auth/react";
import { Head } from "next/document";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "./components/global/Header";
import TopHeader from "./components/global/TopHeader";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session || (session && !session.user)) {
      router.push("/auth");
    }
    if (session && session.user && session?.user.email === "fayzullox512mi@gmail.com") {
      router.push("/admin");
    }
  }, []);
  if (session) {
    return (
      <>
        <TopHeader />
        <Header />
        {session.user && session?.user.name}
      </>
    );
  }
};

export default Profile