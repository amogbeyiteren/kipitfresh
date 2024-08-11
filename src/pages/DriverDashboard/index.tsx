import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FiChevronLeft } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import logo from "../../assets/images/LOGO.svg";
import { CiLogout } from "react-icons/ci";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  
  

  "& .MuiDrawer-paper": {
    backgroundColor: "#173e1f",
    color: "#ffffff",
    boxSizing: "border-box",
    height: "100vh",
    ...(open ? openedMixin(theme) : closedMixin(theme)),
  },

  ...(open && {
    ...openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
  }),
}));

const iconItems = [
  { text: "Dashboard", icon: <MdDashboard size={32} />, path: "dashboard" },
];

export default function DriverDashboard() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(isLargeScreen);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setOpen(isLargeScreen);
  }, [isLargeScreen]);

  useEffect(() => {
    const currentPath = location.pathname.replace("/driver-dashboard/", "");
    if (currentPath === "") {
      setActiveIndex(0);
    }
  }, []);

  const handleItemClick = (index: number, path: string) => {
    navigate(`/driver-dashboard/${path}`);
    setActiveIndex(index);
    console.log("index", index);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F9FFF0" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {!isLargeScreen && open && (
            <IconButton onClick={handleDrawerClose}>
              <FiChevronLeft color="fff" />
            </IconButton>
          )}
          {!isLargeScreen && !open && (
            <IconButton onClick={handleDrawerOpen}>
              <BiMenuAltLeft color="fff" size={32} />
            </IconButton>
          )}
        </DrawerHeader>
        <a href="/" className="w-full flex justify-center hover:cursor-pointer">
          <img className={open ? "h-[50px]" : "h-[32px] my-3"} src={logo} />
        </a>

        <List>
          {iconItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleItemClick(index, item.path)}
              sx={{
                color:
                  activeIndex === index
                    ? "#ffffff"
                    : "rgba(255, 255, 255, 0.5)",
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    activeIndex === index
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.5)",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  fontSize: 36,
                  color:
                    activeIndex === index
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.5)",
                }}
              />
            </ListItem>
          ))}
        </List>
        <a href="/" className="absolute bottom-5">
          <ListItem
            sx={{
              color: "#ffffff",
            }}
          >
            <ListItemIcon sx={{ color: "#ffffff" }}>
              <CiLogout size={32} />
            </ListItemIcon>
            <ListItemText
              primary="Back to Home"
              sx={{
                fontSize: 36,
                color: "#ffffff",
              }}
            />
          </ListItem>
        </a>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: "100%", backgroundColor: "#F9FFF0" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
