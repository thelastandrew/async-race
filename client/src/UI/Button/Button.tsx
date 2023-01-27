import s from './Button.module.css';

type PropsType = {
  handleClick: () => void;
  children: string;
};

const Button = ({ handleClick, children }: PropsType) => {
  return <button className={s.myButton} onClick={handleClick}>{ children }</button>
};

export default Button;