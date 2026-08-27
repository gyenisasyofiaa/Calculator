import React from 'react';

interface DisplayProps {
  history: string;
  currentValue: string;
}

const CalculatorDisplay: React.FC<DisplayProps> = ({ history, currentValue }) => {
  return (
    <div className="relative p-2 border-4 border-[#2A2A2A] rounded-xl min-h-[160px]">
      <div className="absolute bottom-4 right-4 text-white text-right font-light">
        {/* Teks riwayat yang lebih kecil (abu-abu muda) */}
        <div className="text-sm tracking-tight text-[#9F9F9F] mb-1">
          {history}
        </div>
        {/* Teks nilai saat ini yang besar (putih) */}
        <div className="text-7xl leading-none tracking-tight">
          {currentValue}
        </div>
      </div>
    </div>
  );
};

export default CalculatorDisplay;