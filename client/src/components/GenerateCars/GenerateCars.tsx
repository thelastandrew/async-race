import Button from '../../UI/Button/Button';

type PropsType = {
  handleGenerate: () => void;
  isFetchingCars: boolean;
};

const GenerateCars = ({ handleGenerate, isFetchingCars }: PropsType) => {
  return <Button
    handleClick={handleGenerate}
    disabled={isFetchingCars}
  >Generate cars</Button>;
};

export default GenerateCars