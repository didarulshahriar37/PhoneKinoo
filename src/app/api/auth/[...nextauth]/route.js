import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from "mongodb";

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.spgu1hn.mongodb.net/?appName=Cluster0`);

export const authOptions = {
    providers: [

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await client.connect();
                const db = client.db("phone_kinoo");
                const usersCollection = db.collection("users");

                const user = await usersCollection.findOne({ email: credentials.email });
                if (user && user.password === credentials.password) {
                    const { password, ...rest } = user;
                    return rest;
                }
                return null;
            },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    session: { strategy: "jwt" },

    pages: {
        signIn: "/auth/login",
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
        async signIn({ user, account }) {
            if (account.provider === "google") {
                await client.connect();
                const db = client.db("phone_kinoo");
                const usersCollection = db.collection("users");

                const existingUser = await usersCollection.findOne({ email: user.email });
                if (!existingUser) {
                    await usersCollection.insertOne({
                        name: user.name,
                        email: user.email,
                        photoURL: user.image,
                    });
                }
            }
            return true;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };