import React from "react";
type ButtonProps =  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button
      className={`w-full bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-6 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
