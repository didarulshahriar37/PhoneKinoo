"use client"

import { Suspense } from "react";
import Login from "./Login";
import Loading from "@/components/Loading/Loading";

export default function Page() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Login></Login>
    </Suspense>
  );
}