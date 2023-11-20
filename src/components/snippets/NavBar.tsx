import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { theme } from "../../view/theme";
import { GitLogo, LinkedinLogo, TwiterLogo } from "../../icons";
import { NavLink } from "react-router-dom";

interface Props {
  onOpen?: () => void;
  sxProps?: Record<string, string | number>;
}

const NavBar = ({ sxProps }: Props) => {
  const isDesktop = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  console.log(isDesktop, "sdgjsgdjk");

  return (
    <Box
      sx={{
        ...sxProps,
        display: "flex",
        width: sxProps?.width ? sxProps.width : "80%",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <NavLink
        to="home"
        className="link_header"
        style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: "20px",
          textDecoration: "none",
          height: "26px",
          //   color: theme.palette.colorText,
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className="link_header"
        style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: "20px",
          textDecoration: "none",
          //   color: theme.palette.colorText,
          height: "26px",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="stack"
        className="link_header"
        style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: "20px",
          textDecoration: "none",
          //   color: theme.palette.colorText,
          height: "26px",
        }}
      >
        Tech Stack
      </NavLink>
      <NavLink
        to="projects"
        className="link_header"
        style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: "20px",
          textDecoration: "none",
          //   color: theme.palette.colorText,
          height: "26px",
        }}
      >
        Projects
      </NavLink>
      <NavLink
        to="contact"
        className="link_header"
        style={{
          fontFamily: theme.typography.fontFamily,
          fontSize: "20px",
          textDecoration: "none",
          //   color: theme.palette.colorText,
          height: "26px",
        }}
      >
        Contact
      </NavLink>
      {sxProps ? null : (
        <Box
          sx={{
            width: isDesktop ? "10%" : "14%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <GitLogo />
          <TwiterLogo />
          <LinkedinLogo />
        </Box>
      )}
    </Box>
  );
};

export { NavBar };
