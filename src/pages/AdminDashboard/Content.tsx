import AdminHeader from '../../components/AdminHeader';
import MyEditor from '../../components/TextEditor';


const Content = () => {

  const handleDownloadClick = () => {
    // Handle the download button click
    console.log("Download button clicked");
  };

  return (
    <div className="flex flex-col justify-start items-center">

          <AdminHeader
            titleContent="Create a Blog Post"
            profileImageSrc="path_to_profile_image.jpg"
            onDownloadClick={handleDownloadClick}
          />
          <div className='p-5 flex flex-col justify-start items-start gap-8 w-full'>
            <div className='w-full sm:w-4/5 flex flex-col items-start justify-start text-[#173e1f]'>
              <span className='font-semibold'>Title</span>
              <input 
                className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
               
              />
            </div>
            <div className='flex flex-col sm:flex-row items-start justify-start w-full gap-5'>
              <div className='w-full sm:w-1/2 flex flex-col items-start justify-start text-[#173e1f]'>
                <span className='font-semibold'>Author Name</span>
                <input 
                  className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                />
              </div>
              <div className='w-full sm:w-1/2 flex flex-col items-start justify-start text-[#173e1f]'>
                <span className='font-semibold'>Author Location</span>
                <input 
                  className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'

                />
              </div>
            </div>
            <div className='w-full sm:w-1/2 flex flex-col items-start justify-start text-[#173e1f]'>
              <span className='font-semibold'>Heading</span>
              <input 
                className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                
              />
            </div>
            <div className='flex flex-col sm:flex-row items-start justify-start w-full gap-5'>
              <div className='w-full sm:w-1/2 flex flex-col items-start justify-start text-[#173e1f]'>
                <span className='font-semibold'>Header Image</span>
                <input 
                  className='w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
     
                />
              </div>
              <div className='w-full sm:w-1/2 flex flex-col items-start justify-start text-[#173e1f]'>
                <span className='font-semibold'>Tags</span>
                <input 
                  className='w-full sm:w-full p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                  placeholder='seperate by comma'

                />
              </div>
            </div>
            <div className='w-full sm:w-4/5 flex flex-col items-start justify-start text-[#173e1f]'>
              <span className='font-semibold'>Brief Description</span>
              <textarea 
                className='w-full h-[100px] p-2 border outline-none border-[#173e1f] bg-transparent rounded-md focus:border-[#7ED957]'
                placeholder='Short blog Description'
              />
            </div>
            <div className='w-full sm:w-4/5 flex flex-col items-start justify-start text-[#173e1f]'>
              <span className='font-semibold'>Brief Description</span>
              <MyEditor />
            </div>
            <div className='w-full sm:w-1/2 flex items-start justify-start text-[#173e1f] gap-5'>
              <button
                className="bg-[#173e1f] text-lg py-2 px-5 border-[#173e1f] border rounded-md  text-white hover:text-[#173e1f] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"
                
              >
                Upload Post
              </button>
              
            </div>
          </div>
        
     
    </div>
  );
};

export default Content;
