import * as React from "react";
import Title from "../components/Title";
import { FcGoogle } from "react-icons/fc";
import { SlSocialFacebook } from "react-icons/sl";
import LogInImage from "../assets/login.svg";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";


interface ILogInData {

  email: string;
  password: string;

}

export function LogInPage() {
  const [formData, setFormData] = React.useState<ILogInData>({

    email: "",
    password: "",

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate()
  const handleLogin = () =>{
    localStorage.setItem("user", JSON.stringify({
      id: '1234',
      type: 'customer'
    }));
  navigate('/')
  }


  return (
    <div className="w-full p-10 flex flex-row justify-center items-center gap-5">
      <img
        className="w-1/2 h-[400px] object-contain rounded-lg"
        src={LogInImage}
      />
      <div className="w-1/2  h-full pt-20   flex flex-col justify-center items-center bg-[#7ED957] rounded-lg gap-16">
        <Title content="Log In" size="md" />

        <div className=" flex flex-col justify-center items-center gap-4">

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
            value={formData.password}
            onChange={handleChange}
          />
          <a className="w-full text-right cursor-pointer hover:underline">Forgot Password?</a>
 

          <button onClick={handleLogin} className="w-[400px] h-[55px] bg-[#173e1f] mt-5 rounded-3xl font-semibold text-2xl text-white">
            Log In
          </button>
        </div>

        <div className="flex flex-row justify-center items-center w-full">
          <div className="border w-[calc(50%-50px)] h-0  border-b-0 border-t-[#173e1f] border-dashed"></div>
          <span className="w-[120px] text-sm flex justify-center items-center">
            or continue with
          </span>
          <div className="border w-[calc(50%-50px)] h-0  border-b-0 border-t-[#173e1f] border-dashed"></div>
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

          <a className="cursor-pointer hover:underline">
            Don't have an account? Sign Up
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
}
