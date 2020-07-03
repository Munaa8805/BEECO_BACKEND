import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar ">
        <Link className="navbar-item" to="/">
          Бүртгэлүүд
        </Link>
        <Link className="navbar-item ml-4" to="/">
          Гарах
        </Link>
      </div>
    </div>
  );
}
