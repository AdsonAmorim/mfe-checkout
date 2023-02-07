import dynamic from "next/dynamic";

const Button = dynamic(() => import("shared/button"));

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
