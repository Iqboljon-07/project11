"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UseFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchData() {
    try {
      let res = axios("/test");
      setLoading(true);
      setError(null);
      if (res.ok) {
        setData(res.data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, loading, refetch: fetchData };
}

export default UseFetch;
