"use client"

import { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import Register from "./Register";

export default function Page() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Register></Register>
    </Suspense>
  );
}