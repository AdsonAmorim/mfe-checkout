import dynamic from "next/dynamic";
import React from "react";

const Button = dynamic<any>((): any => import("shared/button"));

export default function Checkout() {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div>
      <Button content="UEPA" onClick={handleClick} />
    </div>
  );
}
