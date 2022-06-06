import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./views/landing/landing_page.tsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="" element={<LandingPage></LandingPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
