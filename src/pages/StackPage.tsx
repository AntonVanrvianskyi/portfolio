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
import {useMyContext} from "../context";
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
const local = [
  {
    en: {
      home: "My Tech Stack",
      desc: "Technologies I’ve been working with recently"

    },

    ua: {
      home: "Мій технічний стек",
      desc: "Технології, з якими я працюю останнім часом"

    }
  }
]
const StackPage = () => {
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
            {local[0][myValue].home}
          </Typography>
          <Typography sx={{ fontSize: "20px", color: theme.palette.colorText }}>
            {" "}
            {local[0][myValue].desc}
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
