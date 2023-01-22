import './button.css';

type PropsType = {
  handleClick: () => void;
  children: string;
};

const Button = ({ handleClick, children }: PropsType) => {
  return <button className='my-button' onClick={handleClick}>{ children }</button>
};

export default Button;