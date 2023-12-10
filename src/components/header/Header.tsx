import { useMediaQuery, IconButton } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { theme } from "../../view/theme";
import { LogoIcon } from "../../icons";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { NavBar } from "../snippets";


interface Props {
  onOpen: () => void;
    setTrigger:(value:boolean)=> void;
}

const Header = ({ onOpen }: Props) => {
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          p: theme.spacing(4),
          height: "90px",
          zIndex: 0,
          bgcolor: "transparent",
        }}
      >
        <Toolbar
          sx={{
            width: "80%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "space-between" : "space-around",
          }}
        >
          <LogoIcon />

          {isMobile ? (
            <IconButton
              onClick={onOpen}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <NavBar />
          )}

        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
