import React, { useState } from "react";
import Layout from "./Layout";
import Navbar from "./Navbar";
import "./../styles/App.css";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Layout />
    </div>
  );
};

export default App;
