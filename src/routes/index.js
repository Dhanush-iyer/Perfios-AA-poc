import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/homeScreen";
import DashBoard from "../screens/dashboard";
import ProductScreen from "../screens/productscreen";
import { ErrorProvider } from "../helper/errorProvider";
import Snackbar from "../components/snackbar";

const Layout = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ErrorProvider>
      <Snackbar handleOpen={open} handleClose={handleClose} />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/productscreen" element={<ProductScreen />} />
      </Routes>
    </ErrorProvider>
  );
};

export default Layout;
