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
        const res = await fetch("http://localhost:8000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          
          },
            credentials: 'include',
           // optional: use if you're setting cookies
          body: JSON.stringify({
            email: values.email, // ✅ use `email` if your backend expects it
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
    <div className="p-4 md:mx-28 lg:mx-60">
      <h1 className="flex text-6xl text-center justify-center items-center gap-2">
        KINAU <FaOpencart className="text-[#a32b06]" />
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col m-7 gap-6 max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="bg-[#1976D2] rounded-full px-4 py-3 text-white hover:bg-[#1565C0] transition"
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="text-center underline text-blue-700 cursor-pointer">
        Forgot your password?
      </div>
    </div>
  );
};

export default Login;
