"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function UserAccountNav() {
    return (
        <Button
            variant="destructive"
            onClick={() => {
                signOut({
                    redirect: true,
                    callbackUrl: `${window.location.origin}/sign-in`,
                });
                toast.success("Logout successfully.");
            }}>
            Sign Out
        </Button>
    );
}
