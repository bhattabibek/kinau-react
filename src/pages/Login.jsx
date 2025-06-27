import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { FaOpencart } from "react-icons/fa";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters are required")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // Adjust your backend to accept email or username accordingly
            username: values.email,
            password: values.password,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          const token = data.token;
          localStorage.setItem("token", token);
          alert("Login successful!");
          navigate("/dashboard");
        } else {
          // Handle error message from backend
          setErrors({ password: data.msg || "Login failed" });
        }
      } catch (error) {
        console.error("Login error:", error);
        setErrors({ password: "Server error. Please try again." });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="p-4 md:mx-28 lg:mx-120">
        <h1 className="flex text-6xl text-center justify-center ">
          KINAU
          <FaOpencart className="text-[#a32b06]" />
        </h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col m-7 gap-6">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formik.values.email}
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}

          <button
            type="submit"
            className="bg-[#1976D2] rounded-4xl px-4 p-4 text-white"
          >
            Login
          </button>
        </form>
        <div className="text-center underline">Forgot your Password?</div>
      </div>
    </>
  );
};

export default Login;
