import React from "react";
import Card from "./componenets/card";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWr8fLE1ifIbwu_vwbXZZHi18BdzVeKr0nXUCYLpM6g&s=10"
        name="Laptop"
        description="A high-performance laptop for coding."
        buttonText="Buy Now"
      />

      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gegTMTLm0ML2VU2GWnWE96fA3SDdu5eYtkUJDvEeEg&s=10"
        name="Mobile Phone"
        description="A latest-generation smartphone."
        buttonText="View Details"
      />

      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqT1MNTLM-IlzenlI1wbyLDP0dv3eEPjy7aHribAtQmQ&s=10"
        name="Headphones"
        description="Wireless noise-cancelling headphones."
        buttonText="Shop Now"
      />

        <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuQJ-2Z7Bl4_FIIqkyb2xHdyt-g84LMpIcjFfDmQ3FA&s=10"
        name="Smartwatch"
        description="A latest-generation smartwatch."
        buttonText="Shop Now"
      />
    </div>
  );
}

export default App;