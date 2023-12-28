import { MouseEvent } from "react";
import React, { useEffect, useState } from "react";

export const UserTable = () => {
  interface UserData {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    address: string;
  }

  const [data, setData] = useState<UserData>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/getUserDetails");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <br />
      <h2>
        <center>All Users</center>
      </h2>
      <table className="table table-striped">
        <thead>
          <th scope="col">Id</th>
          <th scope="col">User Name</th>
          <th scope="col">Password</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
        </thead>
        <tbody>
          
            <tr>
              {/* <td key={data.id}>{data.id}</td>
              <td>{data.username}</td>
              <td>{data.password}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.address}</td> */}
            </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
};
