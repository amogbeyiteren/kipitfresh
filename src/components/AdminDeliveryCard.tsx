import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';

interface ICardProps {
    id: number;
    title: string;
    status: string;
    progress: number;
    dates: string[];
    times: string[];
    isSelected: boolean;
    onClick: (id: number) => void;
}

const AdminDeliveryCard: React.FC<ICardProps> = ({ id, title, status, progress, dates, times, isSelected, onClick }) => {
    const handleClick = () => {
        onClick(id);
    };
    const selectedBorderColor = isSelected ? 'border-white' : 'border-[#173e1f]';
    const selectedBgColorClass = isSelected ? 'bg-white' : 'bg-[#173e1f]';

    return (
        <div 
            className={`w-full h-[200px] rounded-2xl flex flex-col justify-center items-start gap-2 pl-3 ${isSelected ? 'bg-[#173e1f] text-white' : 'bg-[#7ED957] text-[#173e1f]'}`} 
            onClick={handleClick}
        >
            <div className="w-full flex justify-between items-center">
                <span className="text-2xl font-semibold">{title}</span>
                <span className={`px-2 py-1 rounded-l-xl ${isSelected ? 'bg-[#7ED957]' : 'bg-[#173e1f] text-[#7ED957]'}`}>
                    {status}
                </span>
            </div>
            <div className="w-[70%]">
                <ProgressBar
                    height="10px"
                    completed={progress}
                    customLabel=" "
                    bgColor={isSelected ? '#7ED957' : '#173e1f'}
                />
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-row justify-start items-center gap-2">
                    <div className="flex flex-col justify-start items-start gap-1">
                        {dates.map((date, index) => (
                            <span className="text-nowrap h-5" key={index}>{date}</span>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className={`rounded-full w-4 h-4 ${selectedBgColorClass}`}></span>
                        <span className={`w-0 h-3 ${progress > 30 ? `border ${selectedBorderColor}` : `border ${selectedBorderColor} border-dashed`}`}></span>
                        <span className={`rounded-full w-4 h-4 ${progress > 50 ? selectedBgColorClass : `border-2 ${selectedBorderColor}`}`}></span>
                        <span className={`w-0 h-3 ${progress > 70 ? `border ${selectedBorderColor}` : `border ${selectedBorderColor} border-dashed`}`}></span>
                        <span className={`rounded-full w-4 h-4 ${progress === 100 ? selectedBgColorClass : `border-2 ${selectedBorderColor}`}`}></span>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                        <span className="text-nowrap h-5">Checking</span>
                        <span className="text-nowrap h-5">In Transit</span>
                        <span className="text-nowrap h-5">Delivered</span>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col justify-start items-end gap-1 pr-3">
                        {times.map((time, index) => (
                            <span className="text-nowrap h-5" key={index}>{time}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDeliveryCard;
