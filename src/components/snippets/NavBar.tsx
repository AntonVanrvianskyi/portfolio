import React, {useContext, useEffect, useMemo, useState} from "react";
import { Box, useMediaQuery } from "@mui/material";
import { theme } from "../../view/theme";
import { GitLogo, LinkedinLogo, TwiterLogo } from "../../icons";
import { NavLink } from "react-router-dom";
import BasicSelect from "./Select";
import {useMyContext} from "../../context";


interface Props {
  onOpen?: () => void;
  sxProps?: Record<string, string | number>;
}

const local = [
    {
        en: {
            home: "Home",
            about: "About",
            techStack: "Tech Stack",
            projects: "Projects",
            contacts: "Contact"
        },

        ua: {
            home: "Головна",
            about: "Про мене",
            techStack: "Технології",
            projects: "Проекти",
            contacts: "Контакти"
        }
    }
]
const NavBar = ({ sxProps }: Props) => {
  const isDesktop = useMediaQuery(theme.breakpoints.between("lg", "xl"));
    const { myValue } = useMyContext()




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
          {local[0][myValue]?.home}
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
          {local[0][myValue]?.about}
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
          {local[0][myValue]?.techStack}
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
          {local[0][myValue]?.projects}
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
          {local[0][myValue]?.contacts}
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
        <BasicSelect/>
    </Box>
  );
};

export { NavBar };
