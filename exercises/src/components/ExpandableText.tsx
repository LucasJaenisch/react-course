import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
  onClicked: () => void;
}

const ExpandableText = ({ children, maxChars = 100, onClicked }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!isExpanded);
    onClicked();
  };

  return (
    <>
      {!isExpanded ? (
        <>
          <div>
            <p>{children.slice(0, maxChars) + "..."}</p>
          </div>
          <button onClick={toggle}>more</button>
        </>
      ) : (
        <>
          <div>
            <p>{children}</p>
          </div>
          <button onClick={toggle}>less</button>
        </>
      )}
    </>
  );
};

export default ExpandableText;
