import React from "react";
import NavBar from "./02_Navbar";
import Heading from "./03_Heading";
import OtherComponents from "./04_OtherComp";
import AllUsers from "./05_AllUsers";
import { getCookie } from "typescript-cookie";

export default function P01_LandingPage() {
  return (
    <div style={{ padding: "10px" }}>
      <NavBar />
      <Heading />
      <OtherComponents />
      <AllUsers />
    </div>
  );
}