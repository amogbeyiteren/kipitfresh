import React from 'react';
interface IButtonProps {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    bgColor?: string;
    textColor?: string;
    text: string;
    shadow?: boolean;
    rounded?: 'lg' | 'xl' |'full';
    font?: 'light' | 'medium' | 'bold';
  }
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'h-[55px] w-[140px] flex justify-center items-center',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };
  
  const roundedClasses = {
    
    lg: 'rounded-lg',
    xl: 'rounded-2xl',
    full: 'rounded-full',
  };
  const Button: React.FC<IButtonProps> = ({
    size = 'md',
    bgColor = '',
    textColor = 'text-white',
    text,
    shadow = false,
    rounded = 'xl',
    font= 'medium'
  }) => {
    const shadowClass = shadow ? 'shadow-lg' : 'hover:underline';
    const sizeClass = sizeClasses[size];
    const roundedClass = roundedClasses[rounded];
    const fontClass = `font-${font}`
    const backgroundColor = `bg-[${bgColor}]`
    console.log('Here', backgroundColor)
    
    
    

  
    return (
      <button
        style={{color: textColor, backgroundColor: bgColor}}
        className={` ${fontClass} ${sizeClass} ${shadowClass} ${roundedClass} text-[21px] border-none`}
        
      >
 
 
        {text}
      </button>
    );
  };
  
  export default Button;