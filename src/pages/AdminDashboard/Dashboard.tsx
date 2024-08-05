import React, { useState } from "react";
import { FiChevronLeft, FiDownload } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import Title from "../../components/Title";
import { CiSearch } from "react-icons/ci";
import { IoOptions } from "react-icons/io5";
import ProgressBar from "@ramonak/react-progress-bar";
import AdminDeliveryCard from "../../components/AdminDeliveryCard";
import EnhancedTable from "../../components/Datatable";
import AdminHeader from "../../components/AdminHeader";

const cards = [
  { id: 1, title: 'Order ID: #AD3467', status: 'Delivered', progress: 100, dates: ['21 Jun', '22 Jun', '23 Jun'], times: ['04:00:00 AM', '01:00:00 PM', '07:00:00 AM'] },
  { id: 2, title: 'Order ID: #AD3468', status: 'In Transit', progress: 33, dates: ['21 Jun', '22 Jun', '23 Jun'], times: ['04:00:00 AM', '01:00:00 PM', '07:00:00 AM'] },
  { id: 3, title: 'Order ID: #AD3469', status: 'Delivered', progress: 100, dates: ['21 Jun', '22 Jun', '23 Jun'], times: ['04:00:00 AM', '01:00:00 PM', '07:00:00 AM'] },
];
const dummyData1 = [
  { id: 1, fruit: 'Apple', quantity: 10, location: 'A1', customerName: 'John Doe', phoneNumber: '1234567890' },
  { id: 2, fruit: 'Banana', quantity: 20, location: 'B1', customerName: 'Jane Smith', phoneNumber: '0987654321' },
  // More rows...
];

const columns1 = [
  { id: 'fruit', label: 'Fruit', disablePadding: true },
  { id: 'quantity', label: 'Quantity', numeric: true },
  { id: 'location', label: 'Location' },
  { id: 'customerName', label: 'Customer Name' },
  { id: 'phoneNumber', label: 'Phone Number' },
];
const Dashboard = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(1); // default to 1st card

  const handleCardClick = (id: number) => {
      setSelectedCardId(id);
  };
  const handleDownloadClick = () => {
    // Handle the download button click
    console.log("Download button clicked");
  };
  return (
    <div className="flex flex-col justify-start items-center">
      {/* <div className="mx-5 pt-4 pb-4 w-full flex flex-row justify-between items-center">
        <div className="flex flex-col items-start justify-center gap-5">
          <Title content="Tracking Delivery" size="md" />
        </div>
        
        <div className="flex flex-col items-end justify-between h-full">
          <div className="flex flex-row justify-center items-center gap-4">
            <button className="flex justify-center py-1 px-2 items-center gap-1 text-white bg-[#173e1f] rounded-lg">
              Documentation <FiDownload color="fff" />
            </button>
            <div className="w-[40px] h-[40px] rounded-full bg-[#b2e89a] flex justify-center items-center">
              <MdOutlineNotificationsActive size={24} />
            </div>
            <img
              className="w-[40px] h-[40px] rounded-full border border-[#173e1f]"
              alt="Profile"
            />
          </div>
        </div>
      </div> */}
      <AdminHeader
        titleContent="Tracking Delivery"
        profileImageSrc="path_to_profile_image.jpg"
        onDownloadClick={handleDownloadClick}
      />

      <div className="w-full h-full pb-4 flex flex-col md:flex-row justify-center items-center gap-5 ">
        <div className="w-full md:w-3/5w-2/5 h-full flex flex-col justify-start items-start gap-2">
          <div className="w-[80%] h-[40px] flex justify-center items-center border py-1 pl-4 pr-6 rounded-2xl border-[#173e1f]">
            <CiSearch size={24} color="#173e1f" />
            <input
              className="w-full h-full bg-transparent border-none outline-none px-5"
              placeholder="Track deliveries"
            />
            <IoOptions size={24} color="#173e1f" />
          </div>
          <div className="w-full flex justify-start items-center gap-2 pt-2 pb-3">
            <span className="flex justify-center items-center px-2 py-1 gap-1 border border-[#173e1f] rounded-lg text-sm">
              21 Jun- 1 Jul <MdCancel size={16} />
            </span>
            <span className="flex justify-center items-center px-2 py-1 gap-1 border border-[#173e1f] rounded-lg text-sm">
              In transit <MdCancel size={16} />
            </span>
            <span className="flex justify-center items-center px-2 py-1 gap-1 border border-[#173e1f] rounded-lg text-sm">
              Delivered <MdCancel size={16} />
            </span>
          </div>
          {cards.map((card) => (
                <AdminDeliveryCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    status={card.status}
                    progress={card.progress}
                    dates={card.dates}
                    times={card.times}
                    isSelected={card.id === selectedCardId}
                    onClick={handleCardClick}
                />
            ))}
        </div>
        <div className="w-full md:w-3/5 h-full flex flex-col justify-start items-start gap-5">
        <Title content="Order ID: #1246B" size="md" />
        <div className="w-full h-[300px] border border-black">

        </div>
        <EnhancedTable data={dummyData1} columns={columns1} title="Fruit Inventory" />
        

        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
