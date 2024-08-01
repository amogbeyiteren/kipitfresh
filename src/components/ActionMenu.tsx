import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiMenuKebab } from "react-icons/ci";

interface IActionMenuProps {
    status: string;
  }
  
  const ActionMenu: React.FC<IActionMenuProps> = ({ status }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  

  const handleEdit = () => {
    console.log('Edit action triggered');
    // Add edit logic here
    handleClose();
  };
  const handleDelete = () => {
    console.log('Edit action triggered');
    // Add edit logic here
    handleClose();
  };

  const handleToggleStatus = () => {
    console.log(`Toggle status action triggered for status: ${status}`);
    // Add toggle status logic here
    handleClose();
    
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <CiMenuKebab color='primary'/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { handleEdit(); }}>Edit</MenuItem>
        <MenuItem onClick={() => { handleToggleStatus(); handleClose(); }}>
          {status === 'Active' ? 'Deactivate' : 'Activate'}
        </MenuItem>
        <MenuItem onClick={() => { handleDelete(); handleClose(); }}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

export default ActionMenu;
