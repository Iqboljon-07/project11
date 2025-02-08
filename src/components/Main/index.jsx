"use client";

import React from "react";
import "./style.css";
import { useRouter } from "next/navigation";
function Main() {
  const route = useRouter();
  //   const res = UseFetch();
  //   console.log(res);

  return (
    <>
      <main></main>
      <div className="main_item">
        <h1 className="text-6xl text-black font-bold">Developer Connector</h1>
        <h2 className="text-2xl text-black font-bold">
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </h2>
        <div className="main_btns ">
          <button
            onClick={() => route.push("/register")}
            className="bg-sky-400"
          >
            Sign Up
          </button>
          <button onClick={() => route.push("/login")} className="bg-white">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
