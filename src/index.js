import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles.css";

//getFieldProps() adalah metode yang digunakan untuk mempersingkat penggunakan onChange -> handleChange, onBlur -> handleBlur ketika
//menggunakan formik.getFieldProps() itu juga akan mengembalikan kumpulan dari onChange, onBlur, value, checked for a given field.
// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, "Must be 15 characters or less")
//         .required("Required"),
//       lastName: Yup.string()
//         .max(20, "Must be 20 characters or less")
//         .required("Required"),
//       email: Yup.string().email("Invalid email address").required("Required"),
//     }),
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         type="text"
//         {...formik.getFieldProps("firstName")}
//       />
//       {formik.touched.firstName && formik.errors.firstName ? (
//         <div>{formik.errors.firstName}</div>
//       ) : null}

//       <label htmlFor="lastName">Last Name</label>
//       <input id="lastName" type="text" {...formik.getFieldProps("lastName")} />
//       {formik.touched.lastName && formik.errors.lastName ? (
//         <div>{formik.errors.lastName}</div>
//       ) : null}

//       <label htmlFor="email">Email Address</label>
//       <input id="email" type="email" {...formik.getFieldProps("email")} />
//       {formik.touched.email && formik.errors.email ? (
//         <div>{formik.errors.email}</div>
//       ) : null}
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// Leveraging React Context, dengan menggantikan useformik dengan Formik maka penggunakannya dapat dilaksukan dalam bentuk komponen secara langsung. tujuangnya sama
// untuk mempercepat dan mempermudah pemahamaan kode, konsepnya sama tetap menggunakan useformik tetapi useformik ini sudah dibungkus dalam komponen Formik
// dengan menggunakan Field, ErrorMessage dan Form maka dapat mempersingkat pembuatan form dengan mengurangi input dengan Field, error dengan MessageError dan form dengan Form

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
