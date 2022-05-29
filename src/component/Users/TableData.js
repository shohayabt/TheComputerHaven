import React from "react";

const TableData = (props) => {
  const { name, email, address, number, _id } = props.users;
  const makeAdmin = (id) => {
    const url = `http://localhost:5000/makeAdmin/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({ id }),
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <tr className="text-center">
      <td className="uppercase">{name}</td>
      <td>{email}</td>
      <td>{number}</td>
      <td className="uppercase">{address}</td>
      <td>
        <button className="btn-full signout" onClick={() => makeAdmin(_id)}>
          MAKE ADMIN
        </button>
      </td>
    </tr>
  );
};

export default TableData;
