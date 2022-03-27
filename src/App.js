import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Checkout } from "./components/Checkout";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
