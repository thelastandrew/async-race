import s from './Button.module.css';

type PropsType = {
  handleClick: () => void;
  disabled?: boolean
  children: string;
};

const Button = ({ handleClick, children, disabled = false }: PropsType) => {
  return <button className={s.myButton} onClick={handleClick} disabled={disabled}>{children}</button>
};

export default Button;