import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../view/theme";
//@ts-ignore
import avatar from "../avatar/avatar.png";
import "./Pages.css";
import {useMyContext} from "../context";
const local = [
    {
        en: {
            hi: "Hi 👋",
            nameIs :"My name is",
            name: "Pavan MG",
            desc: "I build things for web"

        },

        ua: {
            hi: "Привіт 👋",
            nameIs :"Мене звати",
            name: "Pavan MG",
            desc: "Я створюю речі для інтернету"

        }
    }
]
const HomePage = () => {
  // const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
    const { myValue } = useMyContext()


    return (
    <Box
      sx={{
        width: "100%",
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          height: "450px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "none",
        }}
      >
        <Typography
          sx={{
            width: isMobile ? "100%" : "637px",
            color: theme.palette.colorChild,
            height: "297px",
            fontSize: isMobile ? "36px" : "53px",
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
            mb: "30px",
          }}
        >
            {local[0][myValue].hi},
          <br />
            {local[0][myValue].nameIs} <span className="name_head">{local[0][myValue].name}</span>
            {local[0][myValue].desc}
        </Typography>

        <img
          style={{
            width: isMobile ? "300px" : "",
            height: isMobile ? "300px" : "",
          }}
          src={avatar}
          alt="avatar"
        />
      </Box>
    </Box>
  );
};

export { HomePage };
