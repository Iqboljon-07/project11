"use client";
import React from "react";
import "./style.css";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
function Navbar() {
  const pathname = usePathname();

  const token = localStorage.getItem("accessToken");
  const route = useRouter();

  return (
    <div className="wrapper flex items-center justify-between py-5 px-10 font-bold">
      <Link
        href={"/"}
        className={`flex items-center gap-1 text-white text-2xl font-bold wrapper_item ${
          pathname === "/" ? "active" : ""
        } `}
      >
        <FaCode />
        DevConnector
      </Link>
      <div className="flex gap-10 text-white text-lg font-bold">
        <Link
          className={`wrapper_item  ${
            pathname === "/developers" ? "active" : ""
          } `}
          href={"/developers"}
        >
          Developers
        </Link>

        {!token ? (
          <div className="flex gap-10">
            <Link
              className={`wrapper_item ${
                pathname === "/register" ? "active" : ""
              }`}
              href={"/register"}
            >
              Register
            </Link>
            <Link
              className={`wrapper_item ${
                pathname === "/login" ? "active" : ""
              }`}
              href={"/login"}
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="flex gap-10">
            <Link
              className={`wrapper_item ${
                pathname === "/posts" ? "active" : ""
              }`}
              href={"/posts"}
            >
              Posts
            </Link>
            <Link
              className={`wrapper_item flex items-center gap-2 ${
                pathname === "/dashboard" ? "active" : ""
              }`}
              href={"/dashboard"}
            >
              <FaUser />
              Dashboard
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("accessToken"), route.push("/login");
              }}
              className="flex items-center gap-1"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
