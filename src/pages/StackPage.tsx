import { Box, Typography } from "@mui/material";
import React from "react";
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  ReactLogo,
  TailwindLogo,
  SassLogo,
  GitIcon,
  GreenSockLogo,
  VsCodeLogo,
  GithubLogo,
} from "../icons";

import { theme } from "../view/theme";
const massStack = [
  {
    title: <HtmlLogo />,
  },
  {
    title: <CssLogo />,
  },
  {
    title: <JsLogo />,
  },
  {
    title: <ReactLogo />,
  },
  {
    title: <TailwindLogo />,
  },
  {
    title: <SassLogo />,
  },
  {
    title: <GitIcon />,
  },
  {
    title: <GreenSockLogo />,
  },
  {
    title: <VsCodeLogo />,
  },
  {
    title: <GithubLogo />,
  },
];

const StackPage = () => {
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
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "42px", color: theme.palette.colorChild }}
          >
            My Tech Stack
          </Typography>
          <Typography sx={{ fontSize: "20px", color: theme.palette.colorText }}>
            {" "}
            Technologies I’ve been working with recently
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            height: "60%",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          {massStack.map((icon, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
            >
              {icon.title}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { StackPage };
