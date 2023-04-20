import { Box, Button, Container, TextField } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";

const MyInputs = styled(TextField)({
  padding: 2,
  margin: 4,
  width: 300,
});

const FormikPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [fields, setFields] = useState([]);

  useEffect(() => {
    if (id) {
      fetch("https://64340404582420e231718e94.mockapi.io/books/" + id)
        .then((res) => res.json())
        .then((data) => {
          setFields(data);
        });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: id ? fields.name : "",
      author: id ? fields.author : "",
      description: id ? fields.description : "",
      image: id ? fields.image : "",
    },
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Title is required";
      }
      if (!values.author) {
        errors.author = "Author is required";
      }
      if (!values.description) {
        errors.description = "Description is mandatory";
      }
      return errors;
    },

    onSubmit: (values) => {
      if (id) {
        fetch("https://64340404582420e231718e94.mockapi.io/books/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }).then((res) => formik.resetForm());
      } else {
        fetch("https://64340404582420e231718e94.mockapi.io/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }).then((res) => formik.resetForm());
      }
    },
  });

  return (
    <Container sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MyInputs
            id="filled-basic"
            label="Book title"
            variant="outlined"
            name="name"
            InputLabelProps={{ shrink: true }}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <span>{formik.errors.name}</span> : ""}
          <br />
          <MyInputs
            id="filled-basic"
            label="Author"
            variant="outlined"
            name="author"
            InputLabelProps={{ shrink: true }}
            onChange={formik.handleChange}
            value={formik.values.author}
          />
          {formik.errors.author ? <span>{formik.errors.author}</span> : ""}

          <br />
          <MyInputs
            id="filled-basic"
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            name="description"
            InputLabelProps={{ shrink: true }}
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description ? (
            <span>{formik.errors.description}</span>
          ) : (
            ""
          )}
          <br />
          <MyInputs
            id="filled-basic"
            label="Image link"
            variant="outlined"
            name="image"
            InputLabelProps={{ shrink: true }}
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <br />
          <Box>
            <Button
              variant="contained"
              sx={{ m: 4, padding: 2, maxWidth: 200 }}
              type="submit"
            >
              {id ? "Edit Book" : "Add Book"}
            </Button>
            <Button
              variant="contained"
              sx={{ m: 4, padding: 2, maxWidth: 200 }}
              onClick={() => nav(-1)}
            >
              Back
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default FormikPage;
