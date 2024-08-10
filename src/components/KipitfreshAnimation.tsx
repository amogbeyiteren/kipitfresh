import { TypeAnimation } from 'react-type-animation';

const KipitfreshAnimation = () => {
  return (
    <div className='h-48 sm:h-36 md:h-24'>
    <TypeAnimation
    sequence={[
        'Kipitfresh: ',
        1000, // Wait 1 second before starting the specific service
        'Kipitfresh: Fresh Delivery',
        1000,
        'Kipitfresh: Efficient Logistics',
        1000,
        'Kipitfresh: Clean Energy',
        1000,
        'Kipitfresh: Farmer Training',
        1000,
        'Kipitfresh: Data Analytics',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.5rem', display: 'inline-block', color: '#173e1f', fontWeight: '600' }}
      repeat={Infinity}
    />
    </div>
  );
};

export default KipitfreshAnimation;
