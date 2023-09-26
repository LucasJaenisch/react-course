import styles from "./Button.module.css";

interface Props {
  children: string;
  type?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, type = "primary", onClick }: Props) => {
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
