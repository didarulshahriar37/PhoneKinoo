"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Loading from "@/components/Loading/Loading";
import AddPhones from "@/components/Add Phones/AddPhones";

export default function AddMobilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (status === "loading") return;

        if (!session) {
            router.push(`/auth/login?callbackUrl=${encodeURIComponent(pathname)}`);
        }
    }, [session, status, router, pathname]);

    if (status === "loading") return <Loading />;
    if (!session) return null;

    return (
        <div className="mt-15 bg-base-300 px-5 md:px-20 py-10">
            <h1 className="text-2xl md:text-4xl font-bold text-center">Add Mobile</h1>
            <AddPhones></AddPhones>
        </div>
    );
}
