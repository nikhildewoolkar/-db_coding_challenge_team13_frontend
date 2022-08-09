import React from "react";
import BookCard from "../components/card";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Books = () => {
  const database = [
    {
      id: "1",
      bookName: "book1",
    },
    {
      id: "2",
      bookName: "book2",
    },
    {
      id: "3",
      bookName: "book3",
    },
    {
      id: "4",
      bookName: "book4",
    },
    {
      id: "5",
      bookName: "book5",
    },
    {
      id: "6",
      bookName: "book6",
    },
  ];
  return (
    <div>
      <h1> Welcome to Bond Tracker!</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {database.map((data, i) => {
            return (
              <Grid item xs={4} key={i}>
                <Item>
                  <BookCard bookId={data.id} bookName={data.bookName} key={i} />
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Books;
