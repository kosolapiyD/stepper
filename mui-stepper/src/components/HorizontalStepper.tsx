import { Stepper, Step, StepButton } from '@mui/material';
import './HorizontalStepper.scss';

type Props = {
  activeStep: number;
  steps: { label: string; description: string }[];
  handleStep: (step: number) => () => void;
};

const HorizontalStepper = (props: Props) => {
  const { activeStep, steps, handleStep } = props;
  return (
    <div className='horizontal-stepper'>
      <div className='stepper-container'>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map(({ label }, index) => (
            <Step className='step' key={label}>
              <div className='stepBox'>
                <span> {label}</span>
                <StepButton
                  color='inherit'
                  onClick={handleStep(index)}
                ></StepButton>
              </div>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className='content-container'>
        <h2>{steps[activeStep].label}</h2>
        <div className='content'>
          <p>{steps[activeStep].description}</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalStepper;
