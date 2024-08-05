import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



interface IMySelectProps {
    defaultValue: string;
    rowID: string
  }

const MySelect: React.FC<IMySelectProps> =({ defaultValue, rowID}) => {
    const [value, setValue]= useState(defaultValue)
    console.log(rowID)
    
    const handleChange = (event: SelectChangeEvent) => {
        // Handle the status change
        const newStatus = event.target.value;
        setValue(newStatus)
        console.log(event.target.value)
        // Update the state or handle the change as needed
      }
      
    
    console.log(value)
  return (
    <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Select Status</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleChange}
        label="Select Status"
      >
        
        <MenuItem value="packaging">Packaging</MenuItem>
        <MenuItem value="transit">In Transit</MenuItem>
        <MenuItem value="checking">Checking</MenuItem>
        <MenuItem value="delivered">Delivered</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MySelect;

