import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IArticleCardProps {
  imageSrc: string;
  date: string;
  title: string;
  description?: string;
  tags?: string[];
  size?: 'lg' | 'md';
}





const ArticleCard: React.FC<IArticleCardProps> = ({
  imageSrc,
  date,
  title,
  description = '',
  tags = [],
  size = 'lg',
}) => {
  const isMd = size === 'md';
  const navigate = useNavigate();

  const gotoBlog = () => {
    navigate('/blog/1');
  };
  return (
    <div onClick={gotoBlog} className='w-full py-5 sm:py-10 flex flex-col justify-center items-start gap-4'>
      <img
        className={`w-full rounded-md ${isMd ? 'h-[200px]' : 'h-[350px] md:h-[500px]'}`}
        src={imageSrc}
        alt={title}
      />
      <span className='font-light text-gray-400'>{date}</span>
      <span className='font-bold text-2xl'>{title}</span>
      {!isMd && <p className='text-gray-700'>{description}</p>}
      {!isMd && (
        <div className='flex flex-row justify-start items-center gap-2'>
          {tags.map((tag, index) => (
            <button key={index} className='p-2 rounded-full bg-[#173e1f] text-sm text-white'>
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
