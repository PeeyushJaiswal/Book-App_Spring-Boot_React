import { MouseEvent } from "react";
import React, { useEffect, useState } from "react";

function Table() {
  const fn = "Peeyush";
  const ln = "Jaiswal";
  const items = ["Peeyush", "Jaiswal"];
  // const response = fetch("http://localhost:8080/listUsers");

  const [x, setx] = useState("abc");

  const hC = (e: MouseEvent) => {
    return console.log("here..." + e.altKey);
  };

  const handleClick = (item: string) => {
    console.log("The item clicked is " + item);
  };
  const getMessage = () => {
    return "abc";
  };
  function gM() {
    return "efg";
  }
  return (
    <>
      <h1>{x}</h1>
      <table className="table">
        <thead className="table-light">
          <th scope="col">Id</th>
          <th scope="col">User Name</th>
          <th scope="col">Password</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
        </thead>
        <tbody>
          <tr>
            <th scope="row">4</th>
            {items.map((item) => (
              <td onClick={hC} className="active">
                {item}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">3</th>
            {items.map((item, index) => (
              <td onClick={() => handleClick(item)}>{item}</td>
            ))}
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{gM()}</td>
            <td>{getMessage()}</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            {items.map((item, index) => (
              <td onClick={() => {console.log(item, index);setx(item)}}>{item}</td>
            ))}
            {/* <td>{fn}</td> */}
            {/* <td>{ln}</td> */}
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;

export function Heading1() {
  const s1 = {
    textAlign: "center",
  };

  return (
    <>
      <h1>Book Application</h1>
    </>
  );
}

export const UserTable = () => {
  interface UserData {
    id: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    address: string;
  }

  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/user/listUsers");
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
          {data.map((item) => (
            <tr>
              <td key={item.id}>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};

export const BookTable = () => {
  interface BookData {
    bid: number;
    bookname: string;
    author: string;
    sid: number;
  }

  const [data, setData] = useState<BookData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/book/listBooks");
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
        <center>All Books</center>
      </h2>
      <table className="table table-striped">
        <thead>
          <th scope="col">Book Id</th>
          <th scope="col">Book Name</th>
          <th scope="col">Author</th>
          <th scope="col">SID</th>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td key={item.bid}>{item.bid}</td>
              <td>{item.bookname}</td>
              <td>{item.author}</td>
              <td>{item.sid}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
};