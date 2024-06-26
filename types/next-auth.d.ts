import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        username: string;
    }
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: User & {
            /** The user's postal address. */
            username: string;
        };
        token: {
            username: string;
        };
    }
}
