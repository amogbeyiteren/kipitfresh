import React from 'react';
import { InputNumber, InputGroup, Stack } from 'rsuite';
import './NumberInput.css'

export const NumInput = () => {
  const [value, setValue] = React.useState(0);
  const handleMinus = () => {
    setValue(prevValue => {
      const newValue = parseInt(prevValue, 10) - 12;
      return newValue >= 0 ? newValue : 0;
    });
  };
  const handlePlus = () => {
    setValue(parseInt(value, 10) + 12);
  };

  return (
    <div className='w-[90px] rounded-md h-[30px] bg-white flex justify-center items-center'>
      <button className='w-[30px] h-full' onClick={handleMinus}>-</button>
      <span className='w-[30px] h-full flex justify-center items-center border-x border-[#b2e89a]'>{value}</span>
      <button className='w-[30px] h-full' onClick={handlePlus}>+</button>


    </div>
  );
};

