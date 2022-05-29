import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import useAdmin from "../../Hooks/useAdmin";

const OrderData = (props) => {
  const { name, email, address, phone, _id, product, quantity } = props.myOrder;
  const [user] = useAuthState(auth);
  const removeOrder = (id) => {
    const confirm = window.confirm("ARE YOU SURE?", id);
    if (confirm) {
      fetch(`https://polar-taiga-99861.herokuapp.com/removeOrder/${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <tr className="text-center">
      <th className="uppercase">{product}</th>
      <td className="uppercase">{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td className="uppercase">{address}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn-full signout" onClick={() => removeOrder(_id)}>
          CANCEL
        </button>
      </td>
    </tr>
  );
};

export default OrderData;
