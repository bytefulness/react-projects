import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
