import React, { useEffect, useState } from "react";
import TableData from "./TableData";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://polar-taiga-99861.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>NAME</th>
            <th>EMAIL</th>
            <th>NUMBER</th>
            <th>ADDRESS</th>
            <th>ACTION</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <TableData key={users._id} users={users}></TableData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
