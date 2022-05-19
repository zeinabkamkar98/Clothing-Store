import React from "react";

import Header from "./components/Header";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";

import { CircularProgress } from "@mui/material";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ShopPage = React.lazy(() => import("./pages/ShopPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const CheckOutPage = React.lazy(() => import("./pages/CheckOutPage"));
const ShopDetailPage = React.lazy(() => import("./pages/ShopDetailPage"));

function App() {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <>
      <Header></Header>
      <React.Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/check-out" element={<CheckOutPage />}></Route>
          <Route
            path="/shop-detail/:collectionId"
            element={<ShopDetailPage />}
          ></Route>
          <Route
            path="/sign-in"
            element={currentUser ? <Navigate to="/" /> : <SignInPage />}
          ></Route>
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
