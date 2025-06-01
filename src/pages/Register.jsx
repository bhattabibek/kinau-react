import React from "react";
import { FaOpencart } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is needed"),
    password: Yup.string()  // fixed typo here: was 'paswword'
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <div className="p-4 md:mx-28 lg:mx-120">
      <h1 className="flex text-6xl text-center justify-center ">
        KINAU
        <FaOpencart className="text-[#a32b06]" />
      </h1>

      <form
        onSubmit={formik.handleSubmit}  // this is correct: function reference, not string
        className="flex flex-col m-7 gap-6 "
      >
        <input
          type="text"
          name="email"                 // ADD name attribute (very important!)
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter Your Email"
          className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onBlur={formik.handleBlur}   // fixed: was formik.onBlur, should be handleBlur
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}

        <input
          type="password"
          name="password"               // ADD name attribute
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onBlur={formik.handleBlur}   // fixed here too
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        )}

        <input
          type="password"
          name="confirmPassword"       // ADD name attribute
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          placeholder="Confirm your password"
          className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onBlur={formik.handleBlur}   // fixed here too
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-red-500 text-sm">
            {formik.errors.confirmPassword}
          </div>
        )}

        <button
          type="submit"
          className="bg-[#1976D2] rounded-xl px-4 p-4 text-white"
        >
          Register
        </button>
      </form>

      <h2 className="underline text-center">
        You Agree to Our Terms and Conditions by continuing
      </h2>

      <h2 className="underline text-center">
        Already Have an Account? <span className="text-amber-600">Sign In</span>
      </h2>
    </div>
  );
};

export default Register;
