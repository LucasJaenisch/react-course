import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClicked: () => void;
}

const Like = ({ onClicked }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClicked();
  };

  if (status)
    return <AiFillHeart color="#ff6b81" size={100} onClick={toggle} />;
  return <AiOutlineHeart size={100} onClick={toggle} />;
};

export default Like;
