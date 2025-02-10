"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { baseUrl } from "@/utils/api";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      (async function () {
        let response = await axios.get(`${baseUrl}/auth`, {
          headers: {
            "x-auth-token": ` ${localStorage.getItem("accessToken")}`,
          },
        });

        setData(response.data);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(data);
  return (
    <div className="dashboard">
      <div className="dashboard_item">
        <h1 className="text-5xl font-bold text-cyan-500">Dashboard</h1>
        <h2 className="flex items-center gap-2 text-2xl font-medium ">
          <FaUser /> Welcome {data.name}
        </h2>
        <p className="text-base text-gray-400">
          You have not yet setup a profile, please add some info
        </p>
        <button
          onClick={() => router.push("/create-profile")}
          className="w-36 h-10 bg-cyan-500 text-white "
        >
          Create Profile
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
