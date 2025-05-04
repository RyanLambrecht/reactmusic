import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/styles.css";

import TopBanner from "./components/TopBanner";
import SideBar from "./components/SideBar";
import HorizontalList from "./components/HorizontalList";

// Dummy example data
const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const App = () => {
  return (
    <div className="app-container">
      <TopBanner />
      <div className="main-content">
        <SideBar />
        <HorizontalList items={items} />
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
