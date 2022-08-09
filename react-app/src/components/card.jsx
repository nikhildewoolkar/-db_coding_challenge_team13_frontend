import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function BookCard(props) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID: {props.bookId}
        </Typography>
        <Typography variant="h3" component="div">
          {props.bookName}
        </Typography>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/trades/${props.bookId}`)}
        >
          View Trades
        </Button>
      </CardContent>
    </Card>
  );
}
