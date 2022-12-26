import { ReactNode, useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  sidebarClasses,
} from "react-pro-sidebar";
import { Box, Typography, IconButton, Avatar, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

type ItemType = {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected: React.Dispatch<string>;
  collapsed: boolean;
};

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  collapsed,
}: ItemType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
      rootStyles={{
        "& .ps-menu-label": {
          color: `${colors.grey[100]}`,
          display: `${collapsed ? "none" : "flex"}`,
        },
        "& .ps-menu-button": {
          paddingLeft: "1rem",
        },
      }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box display="flex" maxHeight="100%">
      <ProSidebar
        rootStyles={{
          "& .ps-sidebar-container": {
            backgroundColor: `${colors.primary[400]} !important`,
          },
          "& .ps-menuitem-root": {
            padding: "1rem !important",
          },
          "& .ps-menuitem-root:hover, .ps-menuitem-root:hover .ps-menu-label": {
            color: "#868dfb !important",
          },
          "& .ps-menuitem-root.ps-active, .ps-menuitem-root.ps-active .ps-menu-label":
            {
              color: "#6870fa !important",
              padding: "0rem !important",
            },
          "& .ps-menu-button": {
            backgroundColor: "transparent !important",
            padding: `${collapsed ? "0px" : "0 20px !important"}`,
          },
          ".ps-sidebar-root": {
            borderRight: "0px !important",
          },
        }}
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            icon={
              collapsed ? (
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              ) : undefined
            }
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!collapsed && (
            <Box mb="1rem">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Avatar
                  alt="user avatar"
                  src="./user.png"
                  sx={{ width: 100, height: 100, cursor: "pointer" }}
                />
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Babu Rao Aapte
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Star Dial Admin
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : "1rem"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              collapsed={collapsed}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              collapsed={collapsed}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
