import { Box, Typography } from "@mui/material";
import React, {useMemo} from "react";
import { theme } from "../view/theme";
import { GitHubProjectIcon, LinkLogo } from "../icons";
//@ts-ignore
import Project1 from "../avatar/Project1.png";
//@ts-ignore
import Project2 from "../avatar/Project2.png";
//@ts-ignore
import Project3 from "../avatar/Project3.png";
//@ts-ignore
import Project4 from "../avatar/Project4.png";
//@ts-ignore
import Project5 from "../avatar/Project5.png";
//@ts-ignore
import Project6 from "../avatar/Project6.png";
import { Link } from "react-router-dom";
import {useMyContext} from "../context";

const projects = [
  {
    img: Project1,
    title: "Project Tile goes here",
    subtitle:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Live Preview",
    gitLogo: <GitHubProjectIcon />,
    gitText: "View Code",
  },
  {
    img: Project2,
    title: "Project Tile goes here",
    subtitle:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Live Preview",
    gitLogo: <GitHubProjectIcon />,
    gitText: "View Code",
  },
  {
    img: Project3,
    title: "Project Tile goes here",
    subtitle:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Live Preview",
    gitLogo: <GitHubProjectIcon />,
    gitText: "View Code",
  },
  {
    img: Project4,
    title: "Project Tile goes here",
    subtitle:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Live Preview",
    gitLogo: <GitHubProjectIcon />,
    gitText: "View Code",
  },
  {
    img: Project5,
    title: "Project Tile goes here",
    subtitle:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Live Preview",
    gitLogo: <GitHubProjectIcon />,
    gitText: "View Code",
  },
  {
    img: Project6,
    title: "Project Tile goes here",
    subtitle:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    stack: "Tech stack : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Live Preview",
    gitLogo: <GitHubProjectIcon />,
    gitText: "View Code",
  },
];

const uaProjects = [
  {
    img: Project1,
    title: "Проєкт \"Плитка\" тут",
    subtitle:
        "Це приклад опису проекту випадкові речі тут в описі Це приклад проекту генератор lorem ipsum для фіктивного контенту",
    stack: "Технічний стек : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Попередній перегляд в реальному часі",
    gitLogo: <GitHubProjectIcon />,
    gitText: "Переглянути код",
  },
  {
    img: Project2,
    title: "Проєкт \"Плитка\" тут",
    subtitle:
        "Це приклад опису проекту випадкові речі тут в описі Це приклад проекту генератор lorem ipsum для фіктивного контенту",
    stack: "Технічний стек : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Попередній перегляд в реальному часі",
    gitLogo: <GitHubProjectIcon />,
    gitText: "Переглянути код",
  },
  {
    img: Project3,
    title: "Проєкт \"Плитка\" тут",
    subtitle:
        "Це приклад опису проекту випадкові речі тут в описі Це приклад проекту генератор lorem ipsum для фіктивного контенту",
    stack: "Технічний стек : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Попередній перегляд в реальному часі",
    gitLogo: <GitHubProjectIcon />,
    gitText: "Переглянути код",
  },
  {
    img: Project4,
    title: "Проєкт \"Плитка\" тут",
    subtitle:
        "Це приклад опису проекту випадкові речі тут в описі Це приклад проекту генератор lorem ipsum для фіктивного контенту",
    stack: "Технічний стек : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Попередній перегляд в реальному часі",
    gitLogo: <GitHubProjectIcon />,
    gitText: "Переглянути код",
  },
  {
    img: Project5,
    title: "Проєкт \"Плитка\" тут",
    subtitle:
        "Це приклад опису проекту випадкові речі тут в описі Це приклад проекту генератор lorem ipsum для фіктивного контенту",
    stack: "Технічний стек : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Попередній перегляд в реальному часі",
    gitLogo: <GitHubProjectIcon />,
    gitText: "Переглянути код",
  },
  {
    img: Project6,
    title: "Проєкт \"Плитка\" тут",
    subtitle:
        "Це приклад опису проекту випадкові речі тут в описі Це приклад проекту генератор lorem ipsum для фіктивного контенту",
    stack: "Технічний стек : HTML , JavaScript, SASS, React",
    linkLogo: <LinkLogo />,
    linkText: "Попередній перегляд в реальному часі",
    gitLogo: <GitHubProjectIcon />,
    gitText: "Переглянути код",
  },
];

const ProjectPage = () => {
  const { myValue } = useMyContext()
  const title = useMemo(()=>{
    if(myValue === "en"){
      return "Projects"
    }else return "Проекти"
  },[myValue])
  const subTitle = useMemo(()=>{
    if(myValue === "en"){
      return "Things I’ve built so far"
    }else return "Те, що я побудував до цього часу"
  },[myValue])
  const projectMe = useMemo(()=> {
    if(myValue === "en"){
      return projects
    }else return uaProjects
  },[myValue])
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "42px",
            mt: theme.spacing(10),
            color: theme.palette.colorChild,
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "20px", color: theme.palette.colorText }}>
          {subTitle}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "1fr 1fr 1fr",
            mt: theme.spacing(5),
          }}
        >
          {projectMe.map((value, index) => (
            <Box
              key={index}
              sx={{
                width: "373px",
                height: "500px",
                mb: theme.spacing(6),
                borderRadius: theme.spacing(5),
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <img src={value.img} alt="PhotoProject" />
              <Typography
                sx={{
                  fontSize: "28px",
                  boxSizing: "border-box",
                  p: theme.spacing(2),
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                {value.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  boxSizing: "border-box",
                  p: theme.spacing(2),
                  color: theme.palette.colorText,
                }}
              >
                {value.subtitle}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",

                  boxSizing: "border-box",
                  p: theme.spacing(2),
                  color: theme.palette.colorText,
                }}
              >
                {value.stack}
              </Typography>
              <Box
                sx={{
                  mt: theme.spacing(3),
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  {value.linkLogo}
                  <Link
                    to={"#"}
                    style={{
                      marginLeft: theme.spacing(1),
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {value.linkText}
                  </Link>
                </Box>
                <Box sx={{ display: "flex" }}>
                  {value.gitLogo}
                  <Link
                    to={"#"}
                    style={{
                      marginLeft: theme.spacing(1),
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    {value.gitText}
                  </Link>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { ProjectPage };
