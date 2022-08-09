import React from "react";
import Modal from "react-modal";
import {
  Stack,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

Modal.setAppElement("#root");
function InfoModal(props) {
  return (
    <div>
      <Modal
        isOpen
        onRequestClose={() => props.close()}
        style={{
          overlay: {
            backgroundColor: "lightGrey",
          },
          content: {
            color: "black",
            height: "60%",
            width: "50%",
            position: "absolute",
            left: "25%",
            top: "10%",
            padding: "0% 0% 2% 0%",
          },
        }}
      >
        <Table sx={{ minHeight: 50 }}>
          <TableHead style={{ backgroundColor: "LightBlue" }}>
            <TableRow style={{ height: "10px" }}>
              <TableCell>
                <h4>Id:</h4>
              </TableCell>
              <TableCell>
                <h4>{props.id}</h4>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow style={{ height: "10px" }}>
              <TableCell>
                <h5>Name: </h5>
              </TableCell>
              <TableCell>
                <h5>{props.name} </h5>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h5>Quantity: </h5>
              </TableCell>
              <TableCell>
                <h5>{props.quatity} </h5>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h5>Price: </h5>
              </TableCell>
              <TableCell>
                <h5>{props.price} </h5>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h5>Maturity Date: </h5>
              </TableCell>
              <TableCell>
                <h5>{props.maturityDate} </h5>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Need to implement a getSecurityDetailsById in the backend */}
        <Stack spacing={2} direction="row" padding="2%">
          <Button variant="contained" onClick={() => props.close()}>
            Close
          </Button>
          <Button variant="contained" onClick={() => props.close()}>
            Review
          </Button>
        </Stack>
      </Modal>
    </div>
  );
}

export default InfoModal;
