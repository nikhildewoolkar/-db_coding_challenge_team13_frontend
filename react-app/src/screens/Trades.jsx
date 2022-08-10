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
      securityId: "1",
      quantity: "10",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(1),
      timeToMature: Math.round(Math.abs((dateInc(1) - new Date()) / oneDay)),
    },
    {
      id: "2",
      bookId: "2",
      counterPartyId: "1",
      securityId: "2",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(2),
      timeToMature: Math.round(Math.abs((dateInc(2) - new Date()) / oneDay)),
    },
    {
      id: "3",
      bookId: "3",
      counterPartyId: "1",
      securityId: "3",
      quantity: "4",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(3),
      timeToMature: Math.round(Math.abs((dateInc(3) - new Date()) / oneDay)),
    },
    {
      id: "4",
      bookId: "4",
      counterPartyId: "1",
      securityId: "1",
      quantity: "14",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(4),
      timeToMature: Math.round(Math.abs((dateInc(4) - new Date()) / oneDay)),
    },
    {
      id: "5",
      bookId: "1",
      counterPartyId: "1",
      securityId: "2",
      quantity: "42",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(5),
      timeToMature: Math.round(Math.abs((dateInc(5) - new Date()) / oneDay)),
    },
    {
      id: "6",
      bookId: "2",
      counterPartyId: "1",
      securityId: "3",
      quantity: "8",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(6),
      timeToMature: Math.round(Math.abs((dateInc(6) - new Date()) / oneDay)),
    },
    {
      id: "7",
      bookId: "3",
      counterPartyId: "1",
      securityId: "1",
      quantity: "24",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(7),
      timeToMature: Math.round(Math.abs((dateInc(7) - new Date()) / oneDay)),
    },
    {
      id: "8",
      bookId: "4",
      counterPartyId: "1",
      securityId: "2",
      quantity: "34",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(8),
      timeToMature: Math.round(Math.abs((dateInc(8) - new Date()) / oneDay)),
    },
    {
      id: "9",
      bookId: "1",
      counterPartyId: "1",
      securityId: "3",
      quantity: "54",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(9),
      timeToMature: Math.round(Math.abs((dateInc(9) - new Date()) / oneDay)),
    },
    {
      id: "10",
      bookId: "2",
      counterPartyId: "1",
      securityId: "1",
      quantity: "40",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(10),
      timeToMature: Math.round(Math.abs((dateInc(10) - new Date()) / oneDay)),
    },
    {
      id: "11",
      bookId: "3",
      counterPartyId: "1",
      securityId: "2",
      quantity: "42",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(11),
      timeToMature: Math.round(Math.abs((dateInc(11) - new Date()) / oneDay)),
    },
    {
      id: "12",
      bookId: "4",
      counterPartyId: "1",
      securityId: "3",
      quantity: "6",
      status: "Ok",
      price: "100",
      buy_sell: "100",
      tradeDate: new Date(),
      maturityDate: dateInc(12),
      timeToMature: Math.round(Math.abs((dateInc(12) - new Date()) / oneDay)),
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
