import { Stepper, Step, StepButton, StepContent } from '@mui/material';
import './VerticalStepper.scss';

type Props = {
  activeStep: number;
  steps: { label: string; description: string }[];
  handleStep: (step: number) => () => void;
};

const VerticalStepper = (props: Props) => {
  const { activeStep, steps, handleStep } = props;
  return (
    <div className='vertical-stepper'>
      <div className='stepper-container'>
        <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
          {steps.map(({ label }, index) => (
            <Step className='step' key={label}>
              <div className='stepBox'>
                <StepButton
                  color='inherit'
                  onClick={handleStep(index)}
                ></StepButton>
                <span className='step-label'>{label}</span>
              </div>
              <StepContent>
                <div className='content-box'>
                  {steps[activeStep].description}
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default VerticalStepper;
