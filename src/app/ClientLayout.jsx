"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export default function ClientLayout({ children }) {
    return (
        <SessionProvider>
            <Navbar />
            {children}
            <Footer />
        </SessionProvider>
    );
}
