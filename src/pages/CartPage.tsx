import Title from "../components/Title";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { NumInput } from "../components/NumberInput/NumberInput";
import { IoCard } from "react-icons/io5";
import { PiBankBold } from "react-icons/pi";
import { RiCashFill } from "react-icons/ri";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaRegCheckCircle } from "react-icons/fa";
// import 'rsuite/dist/rsuite.min.css';


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  bgcolor: "#7ED957",
  boxShadow: 24,
  py: 2,
  px: 1,
  border: "none",
  outline: "none",
  borderRadius: 5,
};

export interface ICartPageProps {}

export function CartPage() {
  const [currentSection, setCurrentSection] = useState<number>(1);
  const [activePaymentMethod, setActivePaymentMethod] = useState<string>("");

  const nextSection = () => {
    setCurrentSection((prev) => prev + 1);
  };

  const previousSection = () => {
    setCurrentSection((prev) => prev - 1);
  };

  const selectPaymentMethod = (method: string) => {
    setActivePaymentMethod(method);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-full h-full flex flex-col justify-center items-center gap-5 px-5">
          <FaRegCheckCircle size={80} color="#173e1f" />
          <Title center={true} size="md" content="Order Placed Successfully"/>
          <span className="flex flex-col justify-center items-center">
            <span className="text-xl text-center">Thank you for your purchase!</span>
            <span className="text-xl text-center">You can track your order status by visiting the <span className="font-bold">Order Tracking</span> page.</span>
          </span>
          <button className="w-full rounded-2xl py-4 bg-[#173e1f] text-white">
            Continue
          </button>


          </div>
        </Box>
      </Modal>
      {currentSection === 1 && (
        <section className="w-full flex flex-col justify-start items-center px-5 py-10 ">
          <div className="w-full py-20 px-20 flex justify-center items-start gap-4 flex-col bg-[#7ED957] text-[#173e1f] rounded-3xl">
            <span
              onClick={previousSection}
              className="text-black font-light w-full text-lg flex flex-row justify-start items-center gap-1 cursor-pointer"
            >
              <MdOutlineKeyboardArrowLeft /> Continue Shopping
            </span>
            <div className="text-black font-light w-full text-lg flex flex-row justify-between items-center">
              <Title content="Shopping Cart" />
              <span>
                Sort by: <span className="font-semibold">Price</span>
              </span>
            </div>
            <div className="w-full h-0 border border-[#173e1f] my-3"></div>
            <div className="w-full gap-y-5 flex flex-col justify-center items-center px-10 rounded-3xl bg-[#b2e89a]">
              <div className="w-full py-5 flex flex-row justify-between items-center gap-5">
                <div className="flex flex-row justify-center items-center gap-5">
                  <img className="w-[150px] h-[120px] rounded-lg" />
                  <div className="flex flex-col justify-center items-start gap-2">
                    <span className="font-semibold text-2xl">
                      Organic Pineapple - Unripe{" "}
                    </span>
                    <span className="font-light text-lg">Full Package </span>
                  </div>
                </div>
                <NumInput />
                <span className="font-semibold text-2xl">#10,000.00</span>
                <span className="font-semibold text-2xl">
                  <RiDeleteBinLine />
                </span>
              </div>
            </div>
            <div className="w-full gap-y-5 flex flex-col justify-center items-center px-10 rounded-3xl bg-[#b2e89a]">
              <div className="w-full py-5 flex flex-row justify-between items-center gap-5">
                <div className="flex flex-row justify-center items-center gap-5">
                  <img className="w-[150px] h-[120px] rounded-lg" />
                  <div className="flex flex-col justify-center items-start gap-2">
                    <span className="font-semibold text-2xl">
                      Organic Pineapple - Unripe{" "}
                    </span>
                    <span className="font-light text-lg">Full Package </span>
                  </div>
                </div>
                <NumInput />
                <span className="font-semibold text-2xl">#10,000.00</span>
                <span className="font-semibold text-2xl">
                  <RiDeleteBinLine />
                </span>
              </div>
            </div>

            <button
              onClick={nextSection}
              className="w-full h-10 mt-8 flex justify-center items-center gap-1 bg-[#173e1f] rounded-full text-white text-lg"
            >
              Proceed <IoIosArrowForward />
            </button>
          </div>
        </section>
      )}
      {currentSection === 2 && (
        <section className="w-full flex flex-col justify-start items-center px-5 py-10 ">
          <div className="w-full py-20 px-20 flex justify-center items-start gap-4 flex-col bg-white text-[#173e1f] rounded-3xl">
            <span
              onClick={previousSection}
              className="text-black font-light w-full text-lg flex flex-row justify-start items-center gap-1 cursor-pointer"
            >
              <MdOutlineKeyboardArrowLeft /> Estimated Total
            </span>
            <div className="text-black font-light w-full text-lg flex flex-row justify-between items-center">
              <Title content="Shopping Cart" />
              <span>
                Sort by: <span className="font-semibold">Price</span>
              </span>
            </div>
            <div className="w-full h-0 border border-[#173e1f] my-3"></div>
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-full gap-y-5 flex flex-col justify-center items-center px-10 rounded-t-3xl bg-[#7ED957]">
                <div className="w-full py-5 flex flex-col justify-center items-center gap-5 text-2xl">
                  <span className="w-full flex justify-between items-center">
                    <span className="text-right">SubTotal</span>
                    <span className="text-right text-nowrap">#10,000</span>
                  </span>
                  <span className="w-full flex justify-between items-center">
                    <span className="text-right">Discount</span>
                    <span className="text-right text-nowrap">#10,000</span>
                  </span>
                  <span className="w-full flex justify-between items-center">
                    <span className="text-right">Shipping</span>
                    <span className="text-right text-nowrap">#10,000</span>
                  </span>
                </div>
              </div>
              <div className="w-full gap-y-5 flex flex-col justify-center items-center px-10 rounded-b-3xl border-t-2 border-white bg-[#7ED957] text-2xl">
                <div className="w-full py-5 flex flex-col justify-center items-center gap-5">
                  <span className="w-full flex justify-between items-center">
                    <span className="text-right">Total</span>
                    <span className="text-right text-nowrap font-bold">
                      #10,000
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={nextSection}
              className="w-full h-10 mt-8 flex justify-center items-center gap-1 bg-[#173e1f] rounded-full text-white text-lg"
            >
              Make Payment <IoIosArrowForward />
            </button>
          </div>
        </section>
      )}
      {currentSection === 3 && (
        <section className="w-full flex flex-col justify-start items-center px-5 py-10 ">
          <div className="w-full py-20 px-20 flex justify-center items-start gap-4 flex-col bg-white text-[#173e1f] rounded-3xl">
            <span
              onClick={previousSection}
              className="text-black font-light w-full text-lg flex flex-row justify-start items-center gap-1 cursor-pointer"
            >
              <MdOutlineKeyboardArrowLeft /> Estimated Total
            </span>
            <div className="text-black font-light w-full text-lg flex flex-row justify-between items-center">
              <Title content="Payment Method" />
            </div>
            <div className="w-full h-0 border border-[#173e1f] my-3"></div>
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-full flex justify-around items-center rounded-t-3xl gap-10 bg-white">
                <div
                  onClick={() => selectPaymentMethod("card")}
                  className={`bg-[#7ED957] flex flex-col gap-4 justify-start items-start p-8 text-3xl text-[#173e1f] w-full rounded-2xl cursor-pointer ${
                    activePaymentMethod === "card"
                      ? "border-4 border-[#173e1f]"
                      : ""
                  }`}
                >
                  <IoCard size={60} />
                  <span>Card</span>
                </div>
                <div
                  onClick={() => selectPaymentMethod("bank")}
                  className={`bg-[#7ED957] flex flex-col gap-4 justify-start items-start p-8 text-3xl text-[#173e1f] w-full rounded-2xl cursor-pointer ${
                    activePaymentMethod === "bank"
                      ? "border-4 border-[#173e1f]"
                      : ""
                  }`}
                >
                  <PiBankBold size={60} />
                  <span>Bank</span>
                </div>
                <div
                  onClick={() => selectPaymentMethod("cash")}
                  className={`bg-[#7ED957] flex flex-col gap-4 justify-start items-start p-8 text-3xl text-[#173e1f] w-full rounded-2xl cursor-pointer ${
                    activePaymentMethod === "cash"
                      ? "border-4 border-[#173e1f]"
                      : ""
                  }`}
                >
                  <RiCashFill size={60} />
                  <span>Cash on Delivery</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleOpen}
              className="w-full h-10 mt-8 flex justify-center items-center gap-1 bg-[#173e1f] rounded-full text-white text-lg"
            >
              Complete Order <IoIosArrowForward />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
