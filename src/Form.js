import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const formValidationSchema = yup.object({
  fname: yup
    .string()
    .max(15, "must be 15 characters or less")
    .min(3, "too short")
    .required("Fisrt name must"),
  lname: yup
    .string()
    .max(15, "must be 15 characters or less")
    .min(1, "too short")
    .required("Requied"),
  email: yup
    .string()
    .email("email not invalid")
    .max(20, "too long")
    .required("Requied"),
});
export function Form() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        fname: "",
        lname: "",
        email: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (addname) => {
        console.log(addname);
      },
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="fname"
          name="fname"
          type="text"
          value={values.fname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter a name"
        />
        {touched.fname && errors.fname ? <p>{errors.fname}</p> : ""}

        <input
          id="lname"
          name="lname"
          type="text"
          value={values.lname}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter a name"
        />
        {touched.lname && errors.lname ? <p>{errors.lname}</p> : ""}
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter a name"
        />
        {touched.email && errors.email ? <p>{errors.email}</p> : ""}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
