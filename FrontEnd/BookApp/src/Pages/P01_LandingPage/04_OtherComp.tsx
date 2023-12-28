import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { getCookie } from "typescript-cookie";

function FormLogic() {
  const [regVis, setRegVis] = useState(false);
  const [signVis, setSignVis] = useState(false);
  const [msgVis, setMsgVis] = useState(true);

  const handleRegClick = () => {
    setRegVis(true);
    setSignVis(false);
    setMsgVis(false);
  };

  const handleSignClick = () => {
    setRegVis(false);
    setSignVis(true);
    setMsgVis(false);
  };

  return { regVis, signVis, msgVis, handleRegClick, handleSignClick };
}

export default function OtherComp() {
  const { regVis, signVis, msgVis, handleRegClick, handleSignClick } =
    FormLogic();

  return (
    <>
      <center>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleRegClick}
        >
          Register
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleSignClick}
        >
          Sign In
        </button>
      </center>
      <br />
      {regVis && <RegForm />}
      {signVis && <SignInForm />}
      {msgVis && <Message />}
    </>
  );
}

export function Message() {
  // const location = useLocation();
  const params = new URLSearchParams(location.search);
  const value = params.get("val");
  return (
    <div>
      <center>
        <br />
        <b>
          {value === "userAdded" ? (
            <span style={{ color: "green" }}>New User Added Successfully!</span>
          ) : (
            "Welcome to the Book Application"
          )}
        </b>
      </center>
    </div>
  );
}

export function SignInForm() {
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
    console.log(formData);
    axios
      .post("http://localhost:8080/login", formData, { withCredentials: true })
      // .post("http://localhost:8080/user/signIn", formData, { withCredentials: true })
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
        if (response.data === "success") {
          // console.log(response.data);
          // window.location.href = "/home";
        }
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Sign In</h3>
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

export function RegForm() {
  const xsrfToken = window.sessionStorage.getItem("XSRF-TOKEN");
  if (xsrfToken) axios.defaults.headers["X-XSRF-TOKEN"] = xsrfToken;

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
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
      .post("http://localhost:8080/user/addUser", formData, {
        withCredentials: true,
      })
      .then((response) => {
        // Handle the response from the server
        window.location.href = "/?val=userAdded";
        // console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Register</h3>
      <div className="d-flex justify-content-center">
        <form style={{ minWidth: "500px" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="regName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="regName"
              aria-describedby="nameHelp"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="regEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="regEmail"
              aria-describedby="emailHelp"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="regPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="regPassword1"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="regPhone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="regPhone"
              aria-describedby="phoneHelp"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="regAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="regAddress"
              aria-describedby="addressHelp"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <center>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </center>
        </form>
      </div>
    </>
  );
}
