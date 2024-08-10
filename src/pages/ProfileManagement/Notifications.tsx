import { FiChevronLeft } from 'react-icons/fi';
import Title from '../../components/Title';
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const selectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    width: '100%',
    height: '60px',
    borderRadius: '1.5rem',
    padding: '0 1rem',
    color: '#173e1f',
    fontSize: '1.125rem',
    outline: 0,
    border: state.isFocused ? '1px solid #34D399' : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? '1px solid #34D399' : 0,
    '&:hover': {
       border: state.isFocused ? '1px solid #34D399' : 0
    }
    
    
  })
}

const Notifications = () => {
  const navigate = useNavigate()
  const gotoPrevious =()=>{
    navigate(-1)
  }
  return (
    <div className='flex flex-col justify-start items-center min-h-screen'>
      <div className='mx-1 md:mx-5 pt-6 pb-4 w-full border-b-[1px] border-[#173e1f] flex flex-row justify-between items-center'>
        <div className='flex flex-col items-start justify-center gap-5'>
        <div onClick={gotoPrevious} className='flex flex-row justify-center items-center gap-1 hover:underline hover:cursor-pointer'>
            <FiChevronLeft />
            <span>Previous Screen</span>
          </div>
          <Title content='Notifications' />
        </div>
        <div className='hidden md:flex flex-col items-end justify-between h-full'>
          {/* <div className='flex flex-row justify-center items-center gap-4 translate-y-[-30px]'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#b2e89a] flex justify-center items-center'>
              <MdOutlineNotificationsActive size={24} />
            </div>
            <img className='w-[40px] h-[40px] rounded-full border border-[#173e1f]' alt='Profile' />
          </div> */}
          <div>Saving Changes</div>
        </div>
      </div>
      <div className='w-full px-1 md:px-5 pb-4 pt-20 grid grid-cols-1 md:grid-cols-2 gap-16'>

        
        <div className='flex flex-col justify-center items-start gap-4'>
          <span>Notification Type</span>
          <div className='w-full shadow-2xl rounded-3xl '><Select options={options} styles={selectStyles} />
        </div></div>
        <div className='flex flex-col justify-center items-start gap-4'>
          <span>Frequency</span>
          <div className='w-full shadow-2xl rounded-3xl '><Select options={options} styles={selectStyles} />
        </div></div>
        <div className='flex flex-col justify-center items-start gap-4'>
          <span>Newsletter Email(Optional)</span>
          <div className='w-full shadow-2xl rounded-3xl '><Select options={options} styles={selectStyles} />
        </div></div>

        <div></div>
        
        <button className='px-5 py-3 rounded-md bg-[#173e1f] text-xl text-white w-full md:w-[300px]'>Update Preference</button>
      </div>
    </div>
  )
}

export default Notifications
