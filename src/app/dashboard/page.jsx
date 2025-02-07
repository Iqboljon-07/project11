"use client";
import React from "react";
import "./style.css";
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();

  return <div className="dashboard">Dashboard</div>;
}

export default Dashboard;
