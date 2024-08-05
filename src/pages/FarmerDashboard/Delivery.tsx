import React from 'react'
import UserHeader from '../../components/UserHeader';
import { CiSearch } from 'react-icons/ci';
import { IoOptions } from 'react-icons/io5';
import EnhancedTable from '../../components/Datatable';

interface IDelivery {
  id: number;
  fruit: string;
  quantity: number;
  location: string;
  customerName: string;
  phoneNumber: string;
  status: string;
}
const dummyData: IDelivery[] = [
  { id: 1, fruit: 'Apple', quantity: 10, location: 'L1', customerName: 'Alice Johnson', phoneNumber: '555-555-5555', status: 'Pending' },
  { id: 2, fruit: 'Banana', quantity: 20, location: 'L2', customerName: 'Bob Brown', phoneNumber: '444-444-4444', status: 'Completed' },
  { id: 3, fruit: 'Cherry', quantity: 30, location: 'L3', customerName: 'Charlie Davis', phoneNumber: '333-333-3333', status: 'Pending' },
  { id: 4, fruit: 'Date', quantity: 40, location: 'L4', customerName: 'Diana Evans', phoneNumber: '222-222-2222', status: 'Processing' },
  { id: 5, fruit: 'Elderberry', quantity: 50, location: 'L5', customerName: 'Edward Frank', phoneNumber: '111-111-1111', status: 'Shipped' },
];
const columns = [
  { id: 'fruit', label: 'Fruit' },
  { id: 'quantity', label: 'Quantity' },
  { id: 'location', label: 'location' },
  { id: 'customerName', label: 'Customer Name'},
  { id: 'phoneNumber', label: 'Phone Number'},
  { id: 'status', label: 'Status' },
 ];


const AdminDeliveryPage = () => {
  const handleDownloadClick = () => {
    // Handle the download button click
    console.log("Download button clicked");
  };
  return (
    <div className="flex flex-col justify-start items-center">
      
      <UserHeader
        titleContent="Delivery"
        profileImageSrc="path_to_profile_image.jpg"
        onDownloadClick={handleDownloadClick}
      />
      
              <div className="w-full h-[40px] flex justify-center items-center border py-1 pl-4 pr-6 rounded-2xl border-[#173e1f]">
            <CiSearch size={24} color="#173e1f" />
            <input
              className="w-full h-full bg-transparent border-none outline-none px-5"
              placeholder="Search for Delivery by ID"
            />
            <IoOptions size={24} color="#173e1f" />
        </div>
    <div className='p-5 flex flex-col justify-start items-start gap-8 w-full  min-h-screen'>
    <EnhancedTable data={dummyData} columns={columns} title="" onRowClick={(row) => console.log(row)} />
     
    

    </div>

      
    </div>
  )
}

export default AdminDeliveryPage
