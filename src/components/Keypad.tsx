import React from 'react';

// Definisi untuk setiap tombol
const buttons = [
  { label: 'AC', type: 'special' }, 
  { label: '+/-', type: 'function' },
  { label: '%', type: 'function' }, 
  { label: '÷', type: 'operator', style: 'orange' },
  { label: '7', type: 'number' },
  { label: '8', type: 'number' },
  { label: '9', type: 'number' },
  { label: '×', type: 'operator', style: 'orange' }, 
  { label: '4', type: 'number' },
  { label: '5', type: 'number' },
  { label: '6', type: 'number' },
  { label: '-', type: 'operator', style: 'orange' }, 
  { label: '1', type: 'number' },
  { label: '2', type: 'number' },
  { label: '3', type: 'number' },
  { label: '+', type: 'operator', style: 'orange' }, 
  { label: '0', type: 'number', colSpan: 2 },
  { label: '.', type: 'number' },
  { label: '=', type: 'operator', style: 'full-orange' }, 
];

const CalculatorKeypad: React.FC = () => {
  return (
    // Gunakan CSS Grid untuk tata letak tombol
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn, index) => {
        let baseClasses =
          'h-14 flex items-center justify-center text-3xl font-medium w';        
        let dynamicClasses = '';
        if (btn.type === 'number') {
          // Tombol angka: Abu-abu medium, teks abu-abu gelap
          dynamicClasses = 'bg-[#404040] text-[#E0E0E0] hover:bg-[#505050]';
        } else if (btn.type === 'function' || btn.type === 'special') {
          // Tombol fungsi & AC: Abu-abu tua, teks oranye muda
          dynamicClasses = 'bg-[#1C1C1C] text-[#F3C471] hover:bg-[#2C2C2C]';
        } else if (btn.type === 'operator') {
          if (btn.style === 'orange') {
            // Tombol operator reguler: Abu-abu tua, simbol oranye
            dynamicClasses = 'bg-[#1C1C1C] text-[#FF9F0A] hover:bg-[#2C2C2C]';
          } else if (btn.style === 'full-orange') {
            // Tombol '=': Seluruhnya oranye
            dynamicClasses = 'bg-[#FF9F0A] text-white hover:bg-[#FFAF2A]';
          }
        }
        // Terapkan rentang kolom untuk tombol '0'
        const gridColSpan = btn.colSpan ? `col-span-${btn.colSpan}` : '';
        // Teks oranye muda khusus untuk 'AC' seperti pada gambar
        const textLabelClasses = btn.label === 'AC' ? 'text-[#F3C471]' : '';
        return (
          <div
            key={index}
            className={`${baseClasses} ${dynamicClasses} ${gridColSpan}`}
          >
            <span className={`${textLabelClasses}`}>{btn.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CalculatorKeypad;