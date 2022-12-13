import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup
    .string()
    .max(15, "must be 15 characters or less")
    .min(3, "too short")
    .required("Movie name must"),
  rating: yup
    .string()
    .max(15, "must be 15 characters or less")
    .min(1, "too short")
    .required("Requied"),
  summary: yup.string().max(255, "too long").required("Requied"),
  pic: yup.string().required("Requied Image"),
});

export function AddMovies() {
  const navigate = useNavigate();

  // const [name, setName] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [pic, setPic] = useState("");
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        rating: "",
        summary: "",
        pic: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newMovies) => {
        addMovie(newMovies);
      },
    });

  const addMovie = (newMovies) => {
    fetch("https://61c8fe11adee460017260eb5.mockapi.io/movie", {
      method: "POST",
      body: JSON.stringify(newMovies),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter The Name"
        />
        {touched.name && errors.name ? <p>{errors.name}</p> : ""}
        <input
          placeholder="Enter The Rating"
          id="rating"
          name="rating"
          type="text"
          value={values.rating}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.rating && errors.rating ? <p>{errors.rating}</p> : ""}
        <input
          placeholder="Enter The Summary"
          id="summary"
          name="summary"
          type="text"
          value={values.summary}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.summary && errors.summary ? <p>{errors.summary}</p> : ""}
        <input
          placeholder="Enter The Pic"
          id="pic"
          name="pic"
          type="text"
          value={values.pic}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {touched.pic && errors.pic ? <p>{errors.pic}</p> : ""}

        <button type="submit">Add Movies</button>
      </form>
    </div>
  );
}
