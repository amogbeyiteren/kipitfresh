import * as React from "react";
import Box from "@mui/material/Box";
import { CiHome } from "react-icons/ci";
import Modal from "@mui/material/Modal";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { CiReceipt } from "react-icons/ci";
import { PiNewspaperThin } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "0%",
  left: "0%",
  transform: "translate(-0%, -0%)",
  width: 220,
  height: "100vh",
  bgcolor: "#173e1f",
  boxShadow: 24,
  py: 2,
  px: 1,
  border: "none",
  outline: "none",
};
const navItems = [
  { label: "Dashboard", icon: <CiHome />, href: "/admin-dashboard" },
  { label: "Products", icon: <AiOutlineProduct />, href: "/products" },
  { label: "Orders", icon: <CiReceipt />, href: "/order-history" },
  { label: "About", icon: <HiOutlineInformationCircle />, href: "/about" },
  { label: "Blog", icon: <PiNewspaperThin />, href: "/blog" },
  { label: "Clean Energy", icon: <SlEnergy />, href: "/clean-energy" },

];



export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()

  const handleLogout = () =>{
    console.log('clicked')
    localStorage.removeItem('user')
    setOpen(false)
    navigate('/')
  
  }

  return (
    <div>
      <IoIosMenu
        size={30}
        color="white"
        onClick={handleOpen}
        className="hover:cursor-pointer"
      />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="h-10 flex flex-row justify-end items-center">
            <IoIosMenu
              size={30}
              color="white"
              onClick={handleClose}
              className="hover:cursor-pointer"
            />
          </div>

          <ul className="flex h-[100%-80px] flex-col justify-center items-center flex-1 px-3 pt-16 gap-2 font-light">
            {navItems.map((item, index) => (
              <li key={index} className="h-10 flex flex-row justify-start items-center w-full hover:cursor-pointer">
                <a
                  href={item.href}
                  className="flex flex-row text-white justify-center items-center text-xl gap-3"
                >
                  {" "}
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div onClick={handleLogout} className="pt-36 pb-16 flex flex-row justify-start items-center px-3 font-light">
            <a
              
              className="flex flex-row text-white justify-center items-center text-xl gap-3 hover:cursor-pointer"
            >
              {" "}
              <CiLogout /> Logout
            </a>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
