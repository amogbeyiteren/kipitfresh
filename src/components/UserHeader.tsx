import React from 'react';
import Title from './Title';
import { CiUser } from 'react-icons/ci';

interface IUserHeaderProps {
  titleContent: string;
  profileImageSrc: string;
  onDownloadClick: () => void;
}

const UserHeader: React.FC<IUserHeaderProps> = ({ titleContent, profileImageSrc}) => {
  console.log(profileImageSrc)
  return (
    <div className="mx-5 pt-4 pb-4 w-full flex flex-row justify-between items-center">
      <div className="flex flex-col items-start justify-center gap-5">
        <Title content={titleContent} size="md" />
      </div>
      <div className="flex flex-col items-end justify-between h-full">
        <div className="flex flex-row justify-center items-center gap-4">
          
          <div className="w-[40px] h-[40px] rounded-full bg-[#b2e89a] flex justify-center items-center">
            <CiUser size={24} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
