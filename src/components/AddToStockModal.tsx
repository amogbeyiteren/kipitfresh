import * as React from "react";
import Box from "@mui/material/Box";
import Title from "./Title";
import { Modal, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "white",
  boxShadow: 24,
  py: 2,
  px: 1,
  border: "none",
  outline: "none",
  borderRadius: 5,
};

export default function AddtoStock() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-[#173e1f] mt-4 text-lg py-2 px-5 border-[#173e1f] border rounded-md  text-white hover:text-[#173e1f] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"
      >
        Add to Stock
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-full h-full flex flex-col justify-center items-center gap-5">
            <Title content="Choose Number of Units" size="md" center />

            <TextField
              id="outlined-basic"
              label="Number"
              sx={{ color: "#173e1f" }}
              variant="outlined"
            />

            <button
              onClick={handleClose}
              className="bg-[#173e1f] mt-4 text-lg py-2 px-5 border-[#173e1f] border rounded-md  text-white hover:text-[#173e1f] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"
            >
              Add
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
