import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import OrderData from "./OrderData";

const MyOrder = () => {
  const [order, setMyOrder] = useState([]);
  const [user] = useAuthState(auth);
  const email = user.email;
  useEffect(() => {
    fetch(`http://localhost:5000/myorder/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [order]);
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
          {order.map((myOrder) => (
            <OrderData key={myOrder._id} myOrder={myOrder}></OrderData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
