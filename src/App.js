import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Siderbar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="App__body">
        {/* Siderbar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
