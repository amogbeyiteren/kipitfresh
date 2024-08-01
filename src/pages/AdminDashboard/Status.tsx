import React from 'react'
import { FiChevronLeft } from 'react-icons/fi';
import Title from '../../components/Title';
import { MdOutlineNotificationsActive } from "react-icons/md";
import Select from 'react-select'
import AdminHeader from '../../components/AdminHeader';
import { CiSearch } from 'react-icons/ci';
import { IoOptions } from 'react-icons/io5';
import EnhancedTable from '../../components/Datatable';
import MySelect from '../../components/MySelect';
import { SelectChangeEvent } from '@mui/material/Select';


const dummyData2 = [
  { id: 1, orderId: 1001, quantity: 5, location: 'L1', customerName: 'Alice Johnson', phoneNumber: '5555555555', status: 'delivered' },
  { id: 2, orderId: 1002, quantity: 10, location: 'L2', customerName: 'Bob Brown', phoneNumber: '4444444444', status: '' },
  // More rows...
];

const columns2 = [
  { id: 'orderId', label: 'Order ID', disablePadding: true },
  { id: 'quantity', label: 'Quantity', numeric: true },
  { id: 'location', label: 'Location' },
  { id: 'customerName', label: 'Customer Name' },
  { id: 'phoneNumber', label: 'Phone Number' },
  { id: 'status', label: 'Status', render: (row: { status: any; id: any; }) => (
    <MySelect
    defaultValue={row.status}
    rowID={row.id}
      

    />
  ) },
];


const Status = () => {
  const handleDownloadClick = () => {
    // Handle the download button click
    console.log("Download button clicked");
  };
  return (
    <div className="flex flex-col justify-start items-center">
      
    <AdminHeader
      titleContent="Status"
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

export default Status
