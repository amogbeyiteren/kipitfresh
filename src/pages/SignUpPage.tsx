import * as React from "react";
import Title from "../components/Title";
import { FcGoogle } from "react-icons/fc";
import { SlSocialFacebook } from "react-icons/sl";
import signUpImage from "../assets/images/signup.svg";
import FormInput from "../components/FormInput";
import { useParams } from "react-router-dom";

interface ISignUpData {
  fullName: string;
  email: string;
  password1: string;
  password2: string;
  user_type: string;
  address: string;
  mobile_number: string
}

export function SignUpPage() {
   const { user_type } = useParams<Record<string, string>>();
  const [formData, setFormData] = React.useState<ISignUpData>({
    fullName: "",
    email: "",
    password1: "",
    password2: "",
    user_type: "",
    address: "",
    mobile_number:""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log('User type', user_type)

  return (
    <div className="w-full min-h-screen py-10 px-3 md:p-10 flex flex-col md:flex-row justify-center items-center gap-5">
      <img
        className="md:w-1/2 w-full md:h-[400px] object-contain rounded-lg"
        src={signUpImage}
      />
      <div className="md:w-[450px] lg:w-1/2 w-full h-full pt-20 px-3  flex flex-col justify-center items-center bg-[#7ED957] rounded-lg gap-16">
        <Title content="Sign Up" size="md" />

        <div className=" flex w-full flex-col justify-center items-center gap-4">
          <FormInput
            iconType="user"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <FormInput
            iconType="mail"
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            iconType="lock"
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password1}
            onChange={handleChange}
          />
          <FormInput
            iconType="lock"
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.password2}
            onChange={handleChange}
          />
            {user_type === 'farmer' && (
            <>
            <FormInput
              iconType="phone"
              placeholder="Phone Number"
              name="mobile_number"
              value={formData.mobile_number }
              onChange={handleChange}
            />
            <FormInput
              iconType="address"
              placeholder="Farm Address"
              name="address"
              value={formData.address }
              onChange={handleChange}
            />
            </>
          )}
          {user_type === 'driver' && (
            <>
            <FormInput
              iconType="phone"
              placeholder="Phone Number"
              name="mobile_number"
              value={formData.mobile_number }
              onChange={handleChange}
            />
            <FormInput
              iconType="address"
              placeholder="Address"
              name="Address"
              value={formData.address }
              onChange={handleChange}
            />
            </>
          )}

          <button className="w-full md:w-[400px] h-[55px] bg-[#173e1f] mt-5 rounded-3xl font-semibold text-2xl text-white">
            Sign up
          </button>
        </div>

        <div className="flex flex-row justify-center items-center w-full">
          <div className="border w-[calc(50%-55px)] h-0  border-b-0 border-t-[#173e1f] border-dashed"></div>
          <span className="w-[110px] text-sm flex justify-center items-center text-nowrap">
            or continue with
          </span>
          <div className="border w-[calc(50%-55px)] h-0  border-b-0 border-t-[#173e1f] border-dashed"></div>
        </div>

        <div className=" flex flex-col justify-center items-center gap-4">
          <div className="w-full h-[60px]  flex justify-center items-center gap-16">
            <i className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full">
              <FcGoogle size={36} />
            </i>

            <i className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full">
              <SlSocialFacebook size={36} color="#007FFF" />
            </i>
          </div>

          <a href="login" className="cursor-pointer hover:underline">
            Already have an account? Log in
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
}
