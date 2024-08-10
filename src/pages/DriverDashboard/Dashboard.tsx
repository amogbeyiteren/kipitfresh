import { useState } from 'react';
import { CiSearch, CiUser } from 'react-icons/ci';
import { IoOptions } from 'react-icons/io5';
import EnhancedTable from '../../components/Datatable';

interface IOrder {
  id: number;
  fruit: string;
  quantity: number;
  location: string;
  customerName: string;
  phoneNumber: string;
  status: string;
  action: string;
}

const dummyData: IOrder[] = [
  { id: 1, fruit: 'Apple', quantity: 10, location: 'L1', customerName: 'Alice Johnson', phoneNumber: '555-555-5555', status: 'Pending', action: '' },
  { id: 2, fruit: 'Banana', quantity: 20, location: 'L2', customerName: 'Bob Brown', phoneNumber: '444-444-4444', status: 'Completed', action: '' },
  { id: 3, fruit: 'Cherry', quantity: 30, location: 'L3', customerName: 'Charlie Davis', phoneNumber: '333-333-3333', status: 'Pending', action: '' },
  { id: 4, fruit: 'Date', quantity: 40, location: 'L4', customerName: 'Diana Evans', phoneNumber: '222-222-2222', status: 'Pending', action: '' },
  { id: 5, fruit: 'Elderberry', quantity: 50, location: 'L5', customerName: 'Edward Frank', phoneNumber: '111-111-1111', status: 'Pending', action: '' },
];

interface IRow {
  status: string;
  id: any; // Replace 'any' with the appropriate type if known
}

const columns = [
  { id: 'fruit', label: 'Fruit' },
  { id: 'quantity', label: 'Quantity' },
  { id: 'location', label: 'Location' },
  { id: 'customerName', label: 'Customer Name' },
  { id: 'phoneNumber', label: 'Phone Number' },
  { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action', render: (row: IRow) => (
    row.status === 'Pending' ? (
      <button
        className="bg-[#173e1f] mt-4 text-lg py-2 px-5 border-[#173e1f] border rounded-md text-white hover:text-[#173e1f] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"
      >
        Mark as Completed
      </button>
    ) : (
      <button
        className="bg-[#173e1f] mt-4 text-lg py-2 px-5 border-[#173e1f] border rounded-md text-white hover:text-[#173e1f] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"
      >
        Mark as Pending
      </button>
    )
  )}
];

const DriverDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'Pending' | 'Completed'>('Pending');

  const handleTabClick = (status: 'Pending' | 'Completed') => {
    setActiveTab(status);
  };

  const filteredData = dummyData.filter(order => order.status === activeTab);

  return (
    <div className="flex flex-col justify-start items-center">
      <div className="mx-5 pt-4 pb-4 w-full flex flex-row justify-between items-center">
        <div className="flex items-start justify-center gap-5">
          <span 
            className={`text-2xl text-[#173e1f] font-semibold flex flex-col items-start justify-start gap-3 cursor-pointer`} 
            onClick={() => handleTabClick('Pending')}
          >
            Pending Orders (23) <span className={`w-full ${activeTab === 'Pending' ? 'border-2 border-[#173e1f] rounded-full' : ''}`}></span>
          </span>
          <span 
            className={`text-2xl text-[#173e1f] font-semibold flex flex-col items-start justify-start gap-3 cursor-pointer`} 
            onClick={() => handleTabClick('Completed')}
          >
            Completed Orders (23) <span className={`w-full ${activeTab === 'Completed' ? 'border-2 border-[#173e1f] rounded-full' : ''}`}></span>
          </span>
        </div>
        <div className="flex flex-col items-end justify-between h-full">
          <div className="flex flex-row justify-center items-center gap-4">
            <a href='profile-management' className="w-[40px] h-[40px] rounded-full bg-[#b2e89a] flex justify-center items-center hover:cursor-pointer">
              <CiUser size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] flex justify-center items-center border py-1 pl-4 pr-6 rounded-2xl border-[#173e1f]">
        <CiSearch size={24} color="#173e1f" />
        <input
          className="w-full h-full bg-transparent border-none outline-none px-5"
          placeholder="Search for Orders by ID"
        />
        <IoOptions size={24} color="#173e1f" />
      </div>
      <div className='p-5 flex flex-col justify-start items-start gap-8 w-full min-h-screen'>
        <EnhancedTable data={filteredData} columns={columns} title="" onRowClick={(row) => console.log(row)} />
      </div>
    </div>
  );
}

export default DriverDashboardPage;
