"use client";
// need to convert the CustomButton into a client side component, on default, all components are server side component
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

//if a component has props, need to delcear the props type first!!!
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled
}: CustomButtonProps) => {
  //need to create "types" folder and inside types/index.ts, declear and export the interface CustomButtonProps
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
           src={rightIcon}
           alt="right icon"
           fill
           className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
