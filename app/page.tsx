import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import User from "@/components/User";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <h1 className="text-4xl">Home</h1>
            <Link href="/admin" className={buttonVariants()}>
                Open My Admin
            </Link>

            <h2>Client Session</h2>
            <User />
            <h2>Server Session</h2>
            {JSON.stringify(session)}
        </div>
    );
}
