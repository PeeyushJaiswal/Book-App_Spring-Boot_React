import React, { useEffect, useState } from "react";



const MyComponent = () => {
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
    </div>
  );
};

export default MyComponent;

// function Data() {
//   return (
//     <>
//       <p>Will display data here...</p>
//       <p>Will display data here...</p>
//     </>
//   );
// }

// export default Data;
