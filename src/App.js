import { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Checkout } from "./components/Checkout";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Payment } from "./components/Payment";
import { useDataLayerValue } from "./Context/DataLayer";
import { auth } from "./firebase/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Orders } from "./components/Orders";

const stripePromise = loadStripe(
  "pk_test_51KiNIlSFDNKoj7RHuaF3rDNjKY75IrQPCFivvvbuhGZNHNcLtor4JJymB0KtV7RMXccSuLrhHIDRdl0wxZA63Rbr00Roqc2ysb"
);
function App() {
  const [{}, dispatch] = useDataLayerValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      {/* header */}
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
        <Route
          path="payment"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
