import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email.trim().toLowerCase();

        // 1. Check database for registered users
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (user) {
          const match = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (match) {
            return {
              id: user.id,
              email: user.email,
              name: user.name || "Agent",
            };
          }
          return null;
        }

        // 2. Fallback: env-based agent (optional)
        const validEmail =
          process.env.NEXTAUTH_AGENT_EMAIL || "agent@travelian.pk";
        const validPassword =
          process.env.NEXTAUTH_AGENT_PASSWORD || "agent123";

        if (email === validEmail && credentials.password === validPassword) {
          return {
            id: "agent-env",
            email: validEmail,
            name: "Agent",
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};
