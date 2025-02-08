"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FaCode, FaUser, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Tokenni `null` qilib boshlaymiz
  // const [token, setToken] = useState(null);
  // const [isClient, setIsClient] = useState(false); // Brauzerda ekanligimizni tekshiramiz

  // useEffect(() => {
  //   setIsClient(true); // Faqat brauzerda ishlashi uchun
  // }, []);

  // useEffect(() => {
  //   if (isClient) {
  //     const storedToken = localStorage.getItem("accessToken");
  //     setToken(storedToken);
  //   }
  // }, [isClient]);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      //setToken(null);
      router.push("/login");
      toast.success("Tark etdingiz");
    }
  };
  const token = localStorage.getItem("accessToken");

  return (
    <div className="wrapper flex items-center justify-between py-5 px-10 font-bold">
      <Link
        href="/"
        className={`flex items-center gap-1 text-white text-2xl font-bold wrapper_item ${
          pathname === "/" ? "active" : ""
        }`}
      >
        <FaCode />
        DevConnector
      </Link>

      <div className="flex gap-10 text-white text-lg font-bold">
        <Link
          className={`wrapper_item ${
            pathname === "/developers" ? "active" : ""
          }`}
          href="/developers"
        >
          Developers
        </Link>

        {token ? ( // Token mavjud bo‘lsa, login qilingan foydalanuvchi uchun navigatsiya
          <div className="flex gap-10">
            <Link
              className={`wrapper_item ${
                pathname === "/posts" ? "active" : ""
              }`}
              href="/posts"
            >
              Posts
            </Link>
            <Link
              className={`wrapper_item flex items-center gap-2 ${
                pathname === "/dashboard" ? "active" : ""
              }`}
              href="/dashboard"
            >
              <FaUser />
              Dashboard
            </Link>
            <button onClick={handleLogout} className="flex items-center gap-1">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        ) : (
          // Token yo‘q bo‘lsa, login qilish va ro‘yxatdan o‘tish opsiyalari ko‘rsatiladi
          <div className="flex gap-10">
            <Link
              className={`wrapper_item ${
                pathname === "/register" ? "active" : ""
              }`}
              href="/register"
            >
              Register
            </Link>
            <Link
              className={`wrapper_item ${
                pathname === "/login" ? "active" : ""
              }`}
              href="/login"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
