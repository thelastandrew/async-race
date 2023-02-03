import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import GenerateCars from './GenerateCars';

const GenerateCarsContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cars, totalCars, isFetchingCars, generateNCars } = state.garage;

  const handleGenerateNCars = (n: number) => () => {
    generateNCars(n, cars, totalCars)(dispatch);
  };

  const handleGenerate10Cars = handleGenerateNCars(10);

  return <GenerateCars
    handleGenerate={handleGenerate10Cars}
    isFetchingCars={isFetchingCars}
  />
};

export default GenerateCarsContainer;