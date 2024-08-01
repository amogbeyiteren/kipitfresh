//#D8E9A8 #173e1f
import * as React from 'react';
import { useState } from 'react';
import Title from '../components/Title';
import driver from '../assets/driver.svg';
import farmer from '../assets/farmer.svg';
import wholesaler from '../assets/wholesaler.svg';

interface IUserType {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const userTypes: IUserType[] = [
  {
    id: 'farmer',
    title: "I'm a Farmer",
    description: 'For those who grow the goodness',
    imageSrc: farmer,
  },
  {
    id: 'driver',
    title: "I'm a Driver",
    description: 'For those who transport the produce',
    imageSrc: driver,
  },
  {
    id: 'wholesaler',
    title: "I'm a Wholesaler",
    description: 'For those who distribute the produce',
    imageSrc: wholesaler,
  },
];

export interface IAppProps {}

export function OnboardingPage() {
  const [showSecondSection, setShowSecondSection] = useState(false);

  const handleGetStartedClick = () => {
    setShowSecondSection(true);
  };

  return (
    <div>
      {!showSecondSection ? (
        <section className='w-screen min-h-screen flex flex-col justify-end items-start p-12 pb-24 text-[#173e1f] bg-[#7ED957] gap-8'>
          <Title content='Revolutionizing Agriculture Through Innovation' size='xl' />
          <span>Explore a realm of opportunities where traditional farming intersects with modern technologies.</span>
          <button
            className='shadow-2xl w-[210px] h-[55px] rounded-2xl font-bold bg-white text-[#173e1f] text-lg'
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </section>
      ) : (
        <section className='w-screen py-10 px-32 text-[#173e1f]'>
          <div className='w-full py-12 rounded-3xl bg-[#7ED957] flex flex-col items-center justify-center'>
            <Title content="Let’s get you started on your journey" size='md' />
            <span className='w-[400px] text-lg text-[#173e1f] py-4 text-center'>
              Tell us who you are, so we can tailor your Farmers - Market experience
            </span>
            <div className='w-full mt-6 flex flex-row justify-center gap-5 hover:cursor-pointer items-center'>
              {userTypes.map((userType) => (
                <div key={userType.id} className='flex flex-col bg-white h-[300px] w-[250px] rounded-xl justify-center items-center shadow-2xl p-5'>
                  <img
                    className='rounded-full w-[100px] h-[100px]'
                    src={userType.imageSrc}
                    alt={userType.title}
                  />
                  <span className='font-bold text-lg pb-3'>{userType.title}</span>
                  <span className='font-semilight text-base text-center'>{userType.description}</span>
                </div>
              ))}
            </div>
            <button className='mt-16 w-[400px] h-[70px] rounded-full bg-[#173e1f] text-2xl text-white'>
              Continue
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
