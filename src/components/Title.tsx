import React from 'react';

interface ITitle {
  content: string;
  size?: 'md' | 'lg' | 'xl';
  center?: boolean
}

const Title: React.FC<ITitle> = ({ content, size='lg', center=false }) => {
  const getTextSizeClass = (size: 'md' | 'lg' | 'xl') => {
    switch (size) {
      case 'md':
        return 'text-2xl';
      case 'lg':
        return 'text-3xl';
      case 'xl':
        return 'text-5xl';
      default:
        return 'text-3xl';
    }
  };
  const align = center ? 'text-center': ''
  const textSizeClass = getTextSizeClass(size);

  return (
    <span className={`${textSizeClass} ${align} font-semibold text-[#173e1f]`}>
      {content}
    </span>
  );
};

export default Title;
