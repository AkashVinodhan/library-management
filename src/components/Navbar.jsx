import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#8B7E74" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          onClick={() => nav("/")}
          sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
        >
          Library management
        </Typography>
        <LibraryBooksOutlinedIcon
          fontSize="large"
          sx={{ color: "white", display: { xs: "block", sm: "none" } }}
        />
        <Box>
          <Button
            onClick={() => nav("/addbook")}
            sx={{ color: "white", mr: "10px" }}
          >
            Add Book
          </Button>
          <Button sx={{ color: "white" }} onClick={() => nav("/policy")}>
            Return Policy
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
