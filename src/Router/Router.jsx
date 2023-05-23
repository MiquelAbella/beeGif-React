import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Details } from "../Pages/Details/Details";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};
