import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import FaceBookProvider from "next-auth/providers/facebook"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // FaceBookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID as string,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    // })
    // // ...add more providers here
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user.uid = token.sub;
      return session;
    },
  },
  secret: process.env.JWT_SECRET as string,
};
export default NextAuth(authOptions);
