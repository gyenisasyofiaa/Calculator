'use client';

import Display from './Display';
import Keypad from './Keypad';

const Calculator: React.FC = () => {
  // Data simulasi seperti pada gambar
  const initialData = {
    history: '',
    currentValue: '',
  };

  return (
    <div className="flex flex-col gap-5">
      <Display
        history={initialData.history}
        currentValue={initialData.currentValue}
      />
      <Keypad />
    </div>
  );
};

export default Calculator;