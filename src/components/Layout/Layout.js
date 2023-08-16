import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AppBarComponent from "./AppBarComponent";
import CollapseableSidebar from "./Sidebar/CollapseableSidebar";
// import Footer from "./Footer";
import { useThemeContext } from "../../utils/ThemeContext";
import Box from "@mui/material/Box";


const Layout = ({ children, title }) => {
  const { currentTheme, open, toggleDrawer } = useThemeContext();
  
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBarComponent
          open={open}
          toggleDrawer={toggleDrawer}
          title={title}
        />
        <CollapseableSidebar open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          {children}
          {/* <Footer /> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
