import { Box, IconButton, Typography } from "@mui/material";
import { OfficeIcon, LocationIcon, CalendarIcon } from "../icons";
import React, { useState } from "react";
import { subscribe } from "diagnostics_channel";
import { theme } from "../view/theme";

const information = [
  {
    title: "About Me",
    subtitile:
      "The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.",
  },
  {
    title: "Work Experience",
    subtitile: [
      {
        staf: "Junior Web Developer",
        time: "Full Time",
        details: [
          {
            icon: <OfficeIcon />,
            subscribe: "Dr. Rajkumar’s Learning App",
          },
          {
            icon: <LocationIcon />,
            subscribe: "Bengaluru",
          },
          {
            icon: <CalendarIcon />,
            subscribe: "Sep 2021 - Dec 2021",
          },
        ],
      },
      {
        staf: "Web Development Intern",
        time: "Internship",
        details: [
          {
            icon: <OfficeIcon />,
            subscribe: "Dr. Rajkumar’s Learning App",
          },
          {
            icon: <LocationIcon />,
            subscribe: "Bengaluru",
          },
          {
            icon: <CalendarIcon />,
            subscribe: "Sep 2021 - Dec 2021",
          },
        ],
      },
      {
        staf: "SEO / SEM Specialist",
        time: "Internship",
        details: [
          {
            icon: <OfficeIcon />,
            subscribe: "Dr. Rajkumar’s Learning App",
          },
          {
            icon: <LocationIcon />,
            subscribe: "Bengaluru",
          },
          {
            icon: <CalendarIcon />,
            subscribe: "Sep 2021 - Dec 2021",
          },
        ],
      },
    ],
  },
  {
    title: "Education",
    subtitile: [
      {
        staf: "Bachelor in Electronics & Communication",
        time: "Full Time",
        details: [
          {
            icon: <OfficeIcon />,
            subscribe: "Dr. Rajkumar’s Learning App",
          },
          {
            icon: <CalendarIcon />,
            subscribe: "Sep 2021 - Dec 2021",
          },
        ],
      },
    ],
  },
];

const AboutPage = () => {
  const [] = useState()
  return (
    <Box
      sx={{
        width: "100%",
        height: "89vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "60%", height: "100%" }}>
        {information.map((field, index) => (
          <Box key={index} sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: "42px",
                color: theme.palette.colorChild,
                mb: theme.spacing(8),
                mt: theme.spacing(7),
              }}
            >
              {field.title}
            </Typography>
            {Array.isArray(field.subtitile) ? (
              field.subtitile.map((value, key) => (
                <Box
                  key={key}
                  sx={{
                    borderBottom: `2px solid ${theme.palette.borderColor}`,
                    height: "75px",
                    mt:theme.spacing(2)
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "20px", color: theme.palette.colorText }}
                    >
                      {value.staf}
                    </Typography>
                    <Box
                      sx={{
                        width: "94px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: theme.palette.bgColorWidget,
                        borderRadius: "10px",
                        height: "24px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: theme.palette.colorTextWidget,
                        }}
                      >
                        {value.time}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "70%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      {value.details.map((details, detailsKey) => (
                        <Box
                          sx={{ display: "flex", alignItems: "center" }}
                          key={detailsKey}
                        >
                          <IconButton sx={{ mr: theme.spacing(1) }}>
                            {details.icon}
                          </IconButton>
                          <Typography>{details.subscribe}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              ))
            ) : (
              <Typography
                sx={{ fontSize: "18px", color: theme.palette.colorText }}
              >
                {field.subtitile}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { AboutPage };
