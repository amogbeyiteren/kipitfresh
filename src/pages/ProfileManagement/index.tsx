import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FiChevronLeft } from 'react-icons/fi';
import { CiUser, CiCreditCard1, CiMenuBurger } from "react-icons/ci";
import { GiFarmTractor } from "react-icons/gi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import logo from "../../assets/LOGO.svg"

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    '& .MuiDrawer-paper': {
      backgroundColor: '#173e1f',
      color: '#ffffff',
      boxSizing: 'border-box',
      ...(open ? openedMixin(theme) : closedMixin(theme)),
    },
    
    ...(open && {
      ...openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
    }),
  }),
);
const user_type = localStorage.getItem('user_type');
let iconItems: any[];

if (user_type === 'farmer') {
  iconItems = [
    { text: 'Personal Info', icon: <CiUser size={32} />, path: 'personal-info' },
    { text: 'Credentials', icon: <CiCreditCard1 size={32}/>, path: 'credentials' },
    { text: 'Farm Details', icon: <GiFarmTractor size={32} />, path: 'farm-details' },
    { text: 'Notifications', icon: <MdOutlineNotificationsActive size={32}  />, path: 'notification' },
  ];
} else {
  iconItems = [
    { text: 'Personal Info', icon: <CiUser size={32} />, path: 'personal-info' },
    { text: 'Credentials', icon: <CiCreditCard1 size={32}/>, path: 'credentials' },
    { text: 'Notifications', icon: <MdOutlineNotificationsActive size={32}  />, path: 'notification' },
  ];
}



export default function ProfileManagement() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(isLargeScreen);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setOpen(isLargeScreen);
  }, [isLargeScreen]);

  useEffect(() => {
    const currentPath = location.pathname.replace('/profile-management/', '');
    if (currentPath === '') {
      setActiveIndex(0);
    } else {
      const activeItem = iconItems.findIndex(item => item.path === currentPath);
      setActiveIndex(activeItem !== -1 ? activeItem : null);
    }
  }, [location.pathname]);

  const handleItemClick = (index: number, path: string) => {
    setActiveIndex(index);
    navigate(`/profile-management/${path}`);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (
    <Box sx={{ display: 'flex', backgroundColor: '#F9FFF0' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {!isLargeScreen && (
            <div className='mt-5'>
            <IconButton onClick={toggleDrawer}>
              {
                open?<FiChevronLeft color='white' />:<CiMenuBurger color='white'/>
              }
              
            </IconButton>
            </div>
          )}
          <div className='w-full flex items-center justify-center mt-5'><img 
        className='w-[50px]'
        src={logo}
        /></div>
          
        </DrawerHeader>
        
        <div className={open?'text-left text-wrap font-bold text-3xl text-white p-3 pb-8':'text-[#173e1f]'}>
          Profile Management

        </div>
        
        
        <List>
          {iconItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleItemClick(index, item.path)}
              sx={{
                color: activeIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                
              }}
            >
              <ListItemIcon
                sx={{ color: activeIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)' }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  fontSize: 36,
                  color: activeIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>

        <Outlet />
      </Box>
    </Box>
  );
}
