import React from "react";
import dynamic from "next/dynamic";
import { Brands } from "@/types/brands";
import { Wrapper } from "./styles";

const Button = dynamic<any>((): any => import("shared/button"));
const TextField = dynamic<any>((): any => import("shared/text-field"));

type CreditCardProps = {
  number: string;
  brand: Brands;
  cvv: string;
  validate: {
    year: string;
    month: string;
  };
  holderName: string;
};

export const CreditCard = ({
  brand,
  cvv,
  holderName,
  number,
  validate,
}: CreditCardProps) => {
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 16 }}>Active</span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{holderName}</span>
          <span>{number}</span>
        </div>
        <span
          style={{ fontSize: 16 }}
        >{`${validate.month}/${validate.year}`}</span>
      </div>

      <div>{brand}</div>
    </Wrapper>
  );
};
