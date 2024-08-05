import React from 'react';

interface ITitle {
  content: string;
  size?: 'md' | 'lg' | 'xl';
  center?: boolean;
  color?: 'primary' | 'white'
}

const Title: React.FC<ITitle> = ({ content, size='lg', center=false, color='primary' }) => {
  const getTextSizeClass = (size: 'md' | 'lg' | 'xl') => {
    switch (size) {
      case 'md':
        return 'text-2xl';
      case 'lg':
        return 'text-3xl';
      case 'xl':
        return 'text-3xl md:text-5xl';
      default:
        return 'text-3xl';
    }
  };
  const align = center ? 'text-center': ''
  const textSizeClass = getTextSizeClass(size);
  const colorCLass = color == 'primary' ? 'text-[#173e1f]': 'text-white'

  return (
    <span className={`${textSizeClass} ${align} font-semibold ${colorCLass}`}>
      {content}
    </span>
  );
};

export default Title;
