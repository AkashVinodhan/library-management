import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookCard = () => {
  const nav = useNavigate();
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    fetch("https://library-management-cwwq.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const handleEdit = (id) => {
    nav("/" + id);
  };
  const handleCheckout = (id) => {
    fetch("https://library-management-cwwq.onrender.com/api/books/" + id, {
      method: "DELETE",
    }).then((res) => fetchBooks());
  };

  return (
    <Grid container spacing={5} justifyContent="center" marginTop={3}>
      {books.map(({ name, author, image, description, _id }) => (
        <Grid item key={_id}>
          <Card
            sx={{
              maxWidth: 345,
              height: 420,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              bgcolor: "#F4EEE0",
            }}
          >
            <CardMedia sx={{ height: 140 }} image={image} title={name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                size="small"
                variant="contained"
                onClick={() => handleEdit(_id)}
                startIcon={<EditOutlinedIcon />}
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="success"
                onClick={() => handleCheckout(_id)}
                endIcon={<ShoppingCartCheckoutOutlinedIcon />}
              >
                Checkout
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookCard;
