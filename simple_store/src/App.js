import React from "react";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./pages/SignInPage";
import CheckOutPage from "./pages/CheckOutPage";
import ShopDetailPage from "./pages/ShopDetailPage";

import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

function App(props) {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/check-out" element={<CheckOutPage />}></Route>
        <Route path="/shop-detail" element={<ShopDetailPage />}></Route>
        <Route
          path="/sign-in"
          element={props.currentUser ? <Navigate to="/" /> : <SignInPage />}
        ></Route>
      </Routes>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
