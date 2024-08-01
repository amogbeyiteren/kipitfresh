import React from 'react';
import { CiUser, CiMail, CiLock, CiMapPin, CiPhone  } from 'react-icons/ci';

interface IFormInputProps {
    iconType: 'user' | 'mail' | 'lock' | 'address' | 'phone';
    placeholder: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    className?: string;
    inputClassName?: string;
}

const iconComponents = {
    user: CiUser,
    mail: CiMail,
    lock: CiLock,
    address: CiMapPin,
    phone: CiPhone
};

const FormInput: React.FC<IFormInputProps> = ({
    iconType,
    placeholder,
    type = 'text',
    value,
    onChange,
    name,
    className = '',
    inputClassName = '',
}) => {
    const IconComponent = iconComponents[iconType];

    return (
        <div className={`w-[400px] h-[50px] bg-white rounded-3xl shadow-2xl flex flex-row justify-start items-center px-2 gap-2 ${className}`}>
            <i className='w-[36px] h-[36px] rounded-3xl bg-[#7ED957] flex justify-center items-center'>
                <IconComponent size={24} color='#173e1f' />
            </i>
            <input
                className={`w-full outline-none border-none ${inputClassName}`}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default FormInput;
