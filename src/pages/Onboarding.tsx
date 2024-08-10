import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Title from '../components/Title';
import driver from '../assets/images/driver.svg';
import farmer from '../assets/images/farmer.svg';
import wholesaler from '../assets/images/wholesaler.svg';
import logo from '../assets/images/LOGO.svg'

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
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);

  const handleUserTypeClick = (id: string) => {
    setSelectedUserType(id);
  };

  const handleGetStartedClick = () => {
    setShowSecondSection(true);
  };

  const navigate = useNavigate();

  

  const navigateToSignup = () => {
    navigate(`/signup/${selectedUserType}`);
  };

  return (
    <div>
      {!showSecondSection ? (
        <section className='w-screen min-h-screen flex flex-col justify-end items-start p-12 pb-24 bg-[#173e1f] text-[#7ED957] gap-8'>
          <img 
          src={logo}

          className='w-[250px] aspect-auto'
          />

          <Title content='Revolutionizing Agriculture Through Innovation' size='xl' color='white' />
          <span className='text-white'>Explore a realm of opportunities where traditional farming intersects with modern technologies.</span>
          <button
            className='shadow-2xl w-[210px] h-[55px] rounded-2xl font-bold bg-white text-[#173e1f] text-lg'
  
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </section>
      ) : (
        <section className='w-screen min-h-screen flex justify-center items-center py-10 px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32 text-[#173e1f]'>
          <div className='w-full py-12 px-3 rounded-3xl bg-[#7ED957] flex flex-col items-center justify-center'>
            <Title content="Let’s get you started on your journey" size='md' center={true} />
            <span className='w-full sm:w-[400px] text-lg text-[#173e1f] py-4 text-center'>
              Tell us who you are, so we can tailor your Farmers - Market experience
            </span>
            <div className='w-full mt-6 flex flex-col flex-wrap sm:flex-row justify-center gap-5 hover:cursor-pointer items-center'>
              {userTypes.map((userType) => (
                <div key={userType.id} 
                className={`flex flex-col bg-white h-[300px] w-[250px] rounded-xl justify-center items-center shadow-2xl p-5 cursor-pointer ${
                  selectedUserType==userType.id ? 'border-2 border-[#173e1f]' : ''
                }`}
                //className='flex flex-col bg-white h-[300px] w-[250px] rounded-xl justify-center items-center shadow-2xl p-5'
                onClick={() => handleUserTypeClick(userType.id)}
                >
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
            <button onClick={navigateToSignup} className='mt-16 w-full px-4 py-4 md:w-[400px] rounded-full bg-[#173e1f] text-2xl text-white'>
              Continue
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
