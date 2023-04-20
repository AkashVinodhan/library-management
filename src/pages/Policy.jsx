import React from "react";
import { Container, Typography } from "@mui/material";

const Policy = () => {
  return (
    <Container sx={{ mt: 5, fontSize: "1.25rem" }}>
      <Typography variant="h5" mb={2}>
        1. Library users are responsible for ensuring that all library materials
        are returned in good condition, that is, in the same condition as when
        the items were checked out. These procedures library materials and to
        Interlibrary Loan items borrowed from another library. Do not remove the
        paper jackets or other paper work from Interlibrary Loan items.
      </Typography>
      <Typography variant="h5" mb={2}>
        2. Certain library materials are vulnerable to damage in a book return
        because of heat, climate, and space conditions. Please do not place them
        in the Walk-up Book Returns. Return the following materials to an
        On-Site Book Return:
      </Typography>
      <ul>
        <li>Media items including CDs, DVDs, videos, cassettes, LPs</li>
        <li>Fragile items</li>
        <li>Unbound journals and magazine issues</li>
        <li>Microfilm and microfiche</li>
      </ul>
    </Container>
  );
};

export default Policy;
