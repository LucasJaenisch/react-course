import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "secondary";
  onClick: () => void;
}

const Danger = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Danger;
