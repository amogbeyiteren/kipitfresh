import AdminHeader from '../../components/AdminHeader';
import { CiSearch } from 'react-icons/ci';
import { IoOptions } from 'react-icons/io5';
import EnhancedTable from '../../components/Datatable';
import ActionMenu from '../../components/ActionMenu';


interface User {
  id: number;
  username: string;
  role: string;
  status: string;
  email: string;
  action: string;
}

const dummyData2: User[] = [
  { id: 1, username: 'john_doe', role: 'Admin', status: 'Active', email: 'john_doe@example.com', action: '' },
  { id: 2, username: 'jane_doe', role: 'User', status: 'Inactive', email: 'jane_doe@example.com', action: '' },
  // More rows...
];

const columns2 = [
  { id: 'username', label: 'Username' },
  { id: 'role', label: 'Role' },
  { id: 'status', label: 'Status' },
  { id: 'email', label: 'Email' },
  { id: 'action', label: 'Action', render: (row: User) => <ActionMenu status={row.status} /> },
];


const Users = () => {
  const handleDownloadClick = () => {
    // Handle the download button click
    console.log("Download button clicked");
  };
  return (
    <div className="flex flex-col justify-start items-center w-full p-1">
      
    <AdminHeader
      titleContent="Users"
      profileImageSrc="path_to_profile_image.jpg"
      onDownloadClick={handleDownloadClick}
    />
        <div className="w-full h-[40px] flex justify-center items-center border py-1 pl-4 pr-6 rounded-2xl border-[#173e1f]">
            <CiSearch size={24} color="#173e1f" />
            <input
              className="w-full h-full bg-transparent border-none outline-none px-5"
              placeholder="Search for Orders by ID"
            />
            <IoOptions size={24} color="#173e1f" />
        </div>
    <div className='p-5 flex flex-col justify-start items-start gap-8 w-full  min-h-screen'>
    <EnhancedTable data={dummyData2} columns={columns2} title="" onRowClick={(row) => console.log(row)} />
     
    

    </div>

    
  </div>
   
  )
}

export default Users
