import React from "react";
import UserDetails from "./02_UserDetails";
import { getCookie } from "typescript-cookie";

function LoginHome() {
  let xsrf = getCookie("XSRF-TOKEN");
  if (xsrf) window.sessionStorage.setItem("XSRF-TOKEN", xsrf);

  return (
    <div>
      <h1>New Page Contents Here...</h1>
      <UserDetails />
    </div>
  );
}

export default LoginHome;
