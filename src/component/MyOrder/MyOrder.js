import React, { useEffect, useState } from "react";
import OrderData from "./OrderData";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myOrder")
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [myOrder]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>PRODUCT NAME</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>NUMBER</th>
            <th>ADDRESS</th>
            <th>TOTAL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {myOrder.map((myOrder) => (
            <OrderData key={myOrder._id} myOrder={myOrder}></OrderData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
