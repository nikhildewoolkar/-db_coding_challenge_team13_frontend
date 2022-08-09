import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BasicTable from "../components/tradeTable";

const Trades = () => {
  const params = useParams();
  const arr = [];
  const [data, setData] = useState();

  function dateInc(x) {
    var date = new Date();
    date.setDate(date.getDate() + x);
    return date;
  }
  const oneDay = 24 * 60 * 60 * 1000;
  const database = [
    {
      id: "1",
      bookId: "1",
      counterPartyId: "1",
      securityId: "86",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      settlementDate: new Date(),
      maturityDate: dateInc(1),
      timeToMature: Math.round(Math.abs((dateInc(1) - new Date()) / oneDay)),
    },
    {
      id: "2",
      bookId: "2",
      counterPartyId: "1",
      securityId: "7",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      settlementDate: new Date(),
      maturityDate: dateInc(2),
      timeToMature: Math.round(Math.abs((dateInc(2) - new Date()) / oneDay)),
    },
    {
      id: "3",
      bookId: "3",
      counterPartyId: "1",
      securityId: "8",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      settlementDate: new Date(),
      maturityDate: dateInc(3),
      timeToMature: Math.round(Math.abs((dateInc(3) - new Date()) / oneDay)),
    },
    {
      id: "4",
      bookId: "1",
      counterPartyId: "1",
      securityId: "9",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      settlementDate: new Date(),
      maturityDate: dateInc(4),
      timeToMature: Math.round(Math.abs((dateInc(4) - new Date()) / oneDay)),
    },
    {
      id: "5",
      bookId: "2",
      counterPartyId: "1",
      securityId: "17",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      settlementDate: new Date(),
      maturityDate: dateInc(5),
      timeToMature: Math.round(Math.abs((dateInc(5) - new Date()) / oneDay)),
    },
    {
      id: "6",
      bookId: "3",
      counterPartyId: "1",
      securityId: "8",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      settlementDate: new Date(),
      maturityDate: dateInc(5),
      timeToMature: Math.round(Math.abs((dateInc(5) - new Date()) / oneDay)),
    },
    {
      id: "7",
      bookId: "1",
      counterPartyId: "1",
      securityId: "36",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      settlementDate: new Date(),
      maturityDate: dateInc(6),
      timeToMature: Math.round(Math.abs((dateInc(6) - new Date()) / oneDay)),
    },
    {
      id: "8",
      bookId: "2",
      counterPartyId: "1",
      securityId: "7",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      settlementDate: new Date(),
      maturityDate: dateInc(7),
      timeToMature: Math.round(Math.abs((dateInc(7) - new Date()) / oneDay)),
    },
    {
      id: "9",
      bookId: "3",
      counterPartyId: "1",
      securityId: "8",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      settlementDate: new Date(),
      maturityDate: dateInc(8),
      timeToMature: Math.round(Math.abs((dateInc(8) - new Date()) / oneDay)),
    },
  ];

  async function formatData() {
    database.map((data, i) => {
      if (data.bookId === params.bookId) {
        arr.push(data);
      }
    });
  }

  useEffect(() => {
    formatData().then(() => {
      setData(arr);
    });
  }, [params.bookId]);

  return (
    <div>
      <h1>Trades</h1>
      {data === undefined && <h1>Loading...</h1>}
      {data !== undefined && <BasicTable data={data} />}
    </div>
  );
};

export default Trades;
