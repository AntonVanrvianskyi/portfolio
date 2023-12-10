import { Box, Typography } from "@mui/material";
import React, {useMemo} from "react";
import { theme } from "../view/theme";
import {
  GitHubBottomLogo,
  LinkedinBottomLogo,
  TwitterBottomLogo,
  LogoBottom,
} from "../icons";
import "./Pages.css";
import {useMyContext} from "../context";

const ContactPage = () => {
    const { myValue } = useMyContext()
    const title = useMemo(()=>{
        if(myValue === "en"){
            return "For any questions please mail us:"
        }else return "Якщо у вас виникли запитання, будь ласка, напишіть мені:"
    },[myValue])
  return (
    <Box
      sx={{
        width: "100%",
        height: "87vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            height: "196px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "55px", color: theme.palette.colorChild }}
          >
              {title}
          </Typography>
          <Typography
            className="name_head"
            sx={{ fontSize: "58px", color: theme.palette.colorChild }}
          >
            hi@pavanmg.in
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            p: theme.spacing(5),
            mt: theme.spacing(10),
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "140px",
            borderBottom: `2px solid ${theme.palette.colorText}`,
          }}
        >
          <LogoBottom />
          <Box
            sx={{
              width: "20%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <GitHubBottomLogo />
            <LinkedinBottomLogo />
            <TwitterBottomLogo />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ContactPage };
