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
  
  function dateInc(x) {
    var date = new Date();
    date.setDate(date.getDate() + x);
    return date;
  }

  const securities = {
    1: {
      name: 'Reliance A',
      isin: 'IN-000402625-0',
      cusip: 'CUSIP 084664BL4',
      issuer: 'Reliance',
      maturityDate: dateInc(1),
      coupon: '9.15',
      type: 'AAA',
      faceValue: '1000'
    },
    2: {
      name: 'Soverign Gold Bond',
      isin: 'IN-000801623-0',
      cusip: 'CUSIP 032661AL4',
      issuer: 'Reserve Bank Of India',
      maturityDate: dateInc(4),
      coupon: '2.75',
      type: 'AAA',
      faceValue: '3119'
    },
    3: {
      name: 'Slice May 22',
      isin: 'IN-000999623-1',
      cusip: 'CUSIP 024614ZL4',
      issuer: 'Slice',
      maturityDate: dateInc(10),
      coupon: '11.5',
      type: 'BBB+',
      faceValue: '2000'
    }
  };

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
                <h4>Name:</h4>
              </TableCell>
              <TableCell>
                <h4>{securities[props.id].name}</h4>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <h5>ISIN: </h5>
              </TableCell>
              <TableCell>
                <h5>{securities[props.id].isin} </h5>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h5>CUSIP: </h5>
              </TableCell>
              <TableCell>
                <h5>{securities[props.id].cusip} </h5>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h5>Issuer: </h5>
              </TableCell>
              <TableCell>
                <h5>{securities[props.id].issuer} </h5>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h5>Maturity Date: </h5>
              </TableCell>
              <TableCell>
                <h5>{securities[props.id].maturityDate.toString()} </h5>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h5>Coupon: </h5>
              </TableCell>
              <TableCell>
                <h5>{securities[props.id].coupon} </h5>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <h5>Face Value: </h5>
              </TableCell>
              <TableCell>
                <h5>{securities[props.id].faceValue} </h5>
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
