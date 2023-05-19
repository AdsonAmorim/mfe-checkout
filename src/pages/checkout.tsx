import dynamic from "next/dynamic";
import React, { useEffect } from "react";

import { CreditCard } from "@/components/CreditCard";

export default function Checkout({ number = "5555" }: { number: string }) {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000000aa" }}>
      <CreditCard
        brand="visa"
        cvv="999"
        holderName="John Doe"
        number={number}
        validate={{ month: "03", year: "23" }}
      />
    </div>
  );
}
