import * as React from "react";
import Title from "../components/Title";
import ResetPasswordImage from "../assets/resetpassword.svg";
import FormInput from "../components/FormInput";

interface IResetPasswordData {
  password1: string;
  password2: string;
}

export function ResetPasswordPage() {
  const [formData, setFormData] = React.useState<IResetPasswordData>({
    password1: "",
    password2: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full p-5 flex flex-row justify-center items-center">
      <div className="w-full  max-h-[600px]  h-full py-20 pb-36  flex flex-col justify-center items-center bg-[#7ED957] rounded-lg gap-8">
        <img
          className="w-[100px] object-contain rounded-lg"
          src={ResetPasswordImage}
        />

        <Title content="Set a New Pasword" size="lg" />

        <div className=" flex flex-col justify-center items-center gap-4">
        <span className="w-[500px] text-center pb-2">Set a new password to access your <span className="font-bold">KipitFresh</span> account.</span>
          <FormInput
            iconType="lock"
            placeholder="New Password"
            name="password1"
            type="password"
            value={formData.password1}
            onChange={handleChange}
          />
          <FormInput
            iconType="lock"
            placeholder="Confirm Password"
            name="password2"
            type="password"
            value={formData.password2}
            onChange={handleChange}
          />
          <div className="w-[400px] flex flex-row justify-between items-center pt-12 gap-8">
            <button className="w-[450px] h-[55px] bg-[#173e1f] rounded-full font-semibold text-xl text-white">
              Change Password
            </button>
            <a className="w-full flex h-full flex-row justify-end items-center cursor-pointer hover:underline">
              Return to Login Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
