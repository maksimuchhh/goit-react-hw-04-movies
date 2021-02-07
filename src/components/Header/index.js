import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/movies"}>Movies</Link>
    </header>
  );
}
