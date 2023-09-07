import { useState } from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

import './App.css';
const steps = [
  {
    label: 'שלב 1',
    description:
      'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.',
  },
  {
    label: 'שלב 2',
    description:
      'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.',
  },
  {
    label: 'שלב 3',
    description:
      'הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.',
  },
  {
    label: 'שלב 4',
    description:
      'קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.',
  },
];

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  console.log('activeStep', activeStep);

  return (
    <>
      <div className='stepper-container'>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map(({ label }, index) => (
            <Step className='step' key={label} completed={completed[index]}>
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
        <div className='content'>
          <p>{steps[activeStep].description}</p>
        </div>
      </div>
    </>
  );
};

export default App;
