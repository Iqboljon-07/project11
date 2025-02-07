"use client";
import Main from "@/components/Main";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

function Home() {
  const router = useRouter();

  if (localStorage.getItem("accessToken")) {
    router.push("/dashboard");
  }

  return (
    <div>
      <Main />
    </div>
  );
}

export default Home;
