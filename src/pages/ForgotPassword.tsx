import * as React from "react";
import Title from "../components/Title";
import ForgotPasswordImage from "../assets/images/forgotpassword.svg";
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
    <div className="w-full min-h-screen p-5 flex flex-row justify-center items-center">
      <div className="w-full h-full px-3 py-10 pb-16 md:py-20 md:pb-36  flex flex-col justify-center items-center bg-[#7ED957] rounded-lg gap-8 md:gap-16">
        <img
          className="w-[100px] object-contain rounded-lg"
          src={ForgotPasswordImage}
        />

        <Title content="Forgot Password" size="lg" />

        <div className=" flex flex-col justify-center items-center gap-4">
        <span className="w-full md:w-[500px] text-center pb-5">Don't worry, it happens to the best of us! To reset your password, simply click the link below and follow the instructions.</span>

          <FormInput
            iconType="mail"
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className=" w-full md:w-[400px] flex flex-col md:flex-row justify-between items-center pt-5 gap-8">
            <button className="w-full px-4 py-3 bg-[#173e1f] rounded-full font-semibold text-xl text-white">
              Reset Password
            </button>
            <a href="login" className="w-full flex h-full flex-row justify-center md:justify-end items-center cursor-pointer hover:underline">
              Return to Login Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
