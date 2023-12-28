import P02_HomePage from "./Pages/P02_HomePage/01_Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import P01_LandingPage from "./Pages/P01_LandingPage/01_Main";
import P01_LoginPage from "./Pages/P01_LandingPage/1.5_Login";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<P01_LandingPage />} />
          <Route path="/login" element={<P01_LoginPage />} />
          <Route path="/home" element={<P02_HomePage />} />
        </Routes>
      </Router>
    </>
  );
}