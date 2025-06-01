import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FaOpencart } from "react-icons/fa";

const validationSchema=Yup.object({
  email:Yup.string().email("invalid email format").required("email address is required"),
  password:Yup.string().min(6,"miniumum 6 character is required").required("password is required"),
  
})
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },


    
  });
  return (
    <>
      <div className="p-4 md:mx-28 lg:mx-120">
        <h1 className="flex text-6xl text-center justify-center ">
          KINAU
          <FaOpencart className="text-[#a32b06]" />
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col m-7 gap-6 "
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            value={formik.values.email}
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
    <div style={{ color: 'red' }}>{formik.errors.email}</div>
  )}
          <input
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            className='w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.email && (<div style={{color:'red'}}>{formik.errors.email}</div>)}
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
