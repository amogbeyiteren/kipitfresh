import * as React from "react";
import Title from "../components/Title";
import ForgotPasswordImage from "../assets/forgotpassword.svg";
import FormInput from "../components/FormInput";

interface IForgotPasswordData {
  email: string;
}

export function ForgotPasswordPage() {
  const [formData, setFormData] = React.useState<IForgotPasswordData>({
    email: "",
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
      <div className="w-full  max-h-[600px]  h-full py-20 pb-36  flex flex-col justify-center items-center bg-[#7ED957] rounded-lg gap-16">
        <img
          className="w-[100px] object-contain rounded-lg"
          src={ForgotPasswordImage}
        />

        <Title content="Forgot Password" size="lg" />

        <div className=" flex flex-col justify-center items-center gap-4">
        <span className="w-[500px] text-center pb-5">Don't worry, it happens to the best of us! To reset your password, simply click the link below and follow the instructions.</span>

          <FormInput
            iconType="mail"
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="w-[400px] flex flex-row justify-between items-center pt-5 gap-8">
            <button className="w-[450px] h-[55px] bg-[#173e1f] rounded-full font-semibold text-xl text-white">
              Reset Password
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
