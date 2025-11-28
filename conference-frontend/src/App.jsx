import React from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}
