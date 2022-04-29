import "./styles.css";
import React from "react";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";
import ComponentC from "./component/ComponentC";
import ComponentD from "./component/ComponentD";
import ComponentE from "./component/ComponentE";
import Home from "./component/Home";
import Layout from "./component/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="a" element={<ComponentA />} />
            <Route path="b" element={<ComponentB />} />
            <Route path="c" element={<ComponentC />} />
            <Route path="d" element={<ComponentD />} />
            <Route path="e" element={<ComponentE />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
