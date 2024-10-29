import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/homeScreen";
import DashBoard from "../screens/dashboard";
import ProductScreen from "../screens/productscreen";
import ErrorPage from "../screens/errorPage";
import { ErrorProvider } from "../helper/errorProvider";
import Snackbar from "../components/snackbar";

const Layout = () => {
 
  return (
    <ErrorProvider>
      
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/productscreen" element={<ProductScreen />} />
        <Route path="/productscreen" element={<ProductScreen />} />
        <Route path="/errorpage" element={<ErrorPage />} />
      </Routes>
    </ErrorProvider>
  );
};

export default Layout;
