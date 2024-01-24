import React from "react";
import Item from "./Item";
import ItemDate from "./ItemDate";
import "./Card.css";

function Card() {
  const response = [
    {
      itemName: "Nirma",
      itemDay: "20",
      itemMonth: "June",
      itemyear: "1998",
    },
    {
      itemName: "SurfExcel",
      itemDay: "22",
      itemMonth: "july",
      itemyear: "1999",
    },
    {
      itemName: "555",
      itemDay: "25",
      itemMonth: "Aug",
      itemyear: "2001",
    },
  ];
  return (
    <div className="card">
      <Item name={response[0].itemName}>Gaurav</Item>
      <ItemDate
        day={response[0].itemDay}
        month={response[0].itemMonth}
        year={response[0].itemyear}
      />

      <Item name={response[1].itemName} />
      <ItemDate
        day={response[1].itemDay}
        month={response[1].itemMonth}
        year={response[1].itemyear}
      />

      <Item name={response[2].itemName} />
      <ItemDate
        day={response[2].itemDay}
        month={response[2].itemMonth}
        year={response[2].itemyear}
      />
    </div>
  );
}

export default Card;
