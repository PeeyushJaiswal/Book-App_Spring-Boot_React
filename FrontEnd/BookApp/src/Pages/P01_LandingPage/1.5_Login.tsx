import { ChangeEvent, FormEvent, useState } from "react";
import NavBar from "./02_Navbar";
import Heading from "./03_Heading";
import axios from "axios";
import {getCookie} from "typescript-cookie"

export default function P01_LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Perform form submission logic or API call here
    // console.log(formData);
    axios
      // .post("http://localhost:8080/user/signIn", formData)
      .post("http://localhost:8080/login", formData, { withCredentials: true })
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
        if (response.data === "success") {
          window.location.href = "/home";
        }
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <>
      <NavBar />
      <Heading />
      <h3 style={{ textAlign: "center" }}>Sign In First...</h3>
      <div className="d-flex justify-content-center">
        <form style={{ minWidth: "500px" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="signInEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="signInEmail"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signInPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="signInPassword"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <center>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </center>
        </form>
      </div>
    </>
  );
}
