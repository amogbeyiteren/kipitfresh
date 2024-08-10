import React from 'react';
import './NumberInput.css'

interface NumInputProps {
  size?: 'md' | 'lg';
}

export const NumInput: React.FC<NumInputProps> = ({ size = 'md' }) => {
  const [value, setValue] = React.useState('0');

  const handleMinus = () => {
    setValue((prevValue) => {
      const newValue = parseInt(prevValue, 10) - 12;
      return newValue >= 0 ? newValue.toString() : '0';
    });
  };

  const handlePlus = () => {
    setValue((prevValue) => (parseInt(prevValue, 10) + 12).toString());
  };

  const isLarge = size === 'lg';

  return (
    <div
      className={`rounded-md bg-white flex justify-center items-center ${isLarge ? 'w-[180px] h-[52px]' : 'w-[90px] h-[30px]'}`}
    >
      <button className={`${isLarge ? 'w-[60px]  text-xl font-semibold' : 'w-[30px]'} h-full`} onClick={handleMinus}>
        -
      </button>
      <span
        className={`flex justify-center items-center border-x border-[#b2e89a] ${isLarge ? 'w-[60px] text-xl' : 'w-[30px]'}`}
      >
        {value}
      </span>
      <button className={`${isLarge ? 'w-[60px] text-xl font-semibold' : 'w-[30px]'} h-full`} onClick={handlePlus}>
        +
      </button>
    </div>
  );
};


