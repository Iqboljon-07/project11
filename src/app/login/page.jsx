"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FaUser } from "react-icons/fa";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { baseUrl } from "@/utils/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

const validationSchema = Yup.object({
  email: Yup.string()
    .min(4, "Kamida 4 harf qatnashsin")
    .max(36, "Ko'pi bilan 36ta harf qatnashsin")
    .required("Maydon bo'sh bo'lmasin"),
  password: Yup.string()
    .min(4, "Kamida 4 harf qatnashsin")
    .max(16, "Ko'pi bilan 16ta harf qatnashsin")
    .required("Maydon bo'sh bo'lmasin"),
});

function Login() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const token = localStorage.getItem("accessToken");
      if (token) {
        router.push("/dashboard");
      }
    }
  }, [isClient]);

  const OnSubmit = async (values) => {
    try {
      let res = await axios.post(`${baseUrl}/auth`, {
        email: values.email,
        password: values.password,
      });

      if (res.status === 200) {
        if (isClient) {
          localStorage.setItem("accessToken", res.data.token);
        }
        router.push("/dashboard");
        toast.success("Muvaffaqiyatli tizimga kirdingiz!");
        location.reload();
      }
    } catch (error) {
      console.error(error);
      toast.error("Login yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="login">
      <div className="login_item">
        <h1 className="text-5xl text-blue-400 font-bold">Sign In</h1>
        <h2 className="flex  items-center text-2xl font-medium gap-2">
          <FaUser /> Sign Into Your Account
        </h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={OnSubmit}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="email"></label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email address"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="password"></label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <button type="submit" className="btn">
                Login
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex gap-3">
          <h2>Don't have an account?</h2>
          <Link href={"/register"} className="text-cyan-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
