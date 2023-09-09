import { useState } from 'react';

import './App.css';
import HorizontalStepper from './components/HorizontalStepper';
import VerticalStepper from './components/VerticalStepper';
import { steps } from './mock/mock-data';
import { useMediaQuery } from '@mui/material';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery('(max-width:800px)');

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <>
      {isMobile ? (
        <VerticalStepper
          activeStep={activeStep}
          steps={steps}
          handleStep={handleStep}
        />
      ) : (
        <HorizontalStepper
          activeStep={activeStep}
          steps={steps}
          handleStep={handleStep}
        />
      )}
    </>
  );
};

export default App;
