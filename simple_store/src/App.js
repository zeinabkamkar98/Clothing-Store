import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import SingIn from "./pages/SignIn";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/sign-in"
          element={props.currentUser ? <Navigate to="/" /> : <SingIn />}
        ></Route>
      </Routes>
    </>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(App);
