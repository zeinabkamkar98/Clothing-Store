import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import SingIn from "./pages/SignIn";
import CheckOut from "./pages/CheckOut";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import ShopDetail from "./pages/ShopDetail";

function App(props) {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/check-out" element={<CheckOut />}></Route>
        <Route path="/shop-detail" element={<ShopDetail />}></Route>
        <Route
          path="/sign-in"
          element={props.currentUser ? <Navigate to="/" /> : <SingIn />}
        ></Route>
      </Routes>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
