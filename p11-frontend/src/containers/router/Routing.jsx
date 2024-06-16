import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import UserAccount from "../../pages/UserAccount"
import Page404 from "../../pages/Page404"
import Footer from "../footer/Footer";
import Transaction from "../../pages/Transaction";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profiles/" element={<UserAccount />} />
        <Route path="/transactions/" element={<Transaction />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/profiles/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing;