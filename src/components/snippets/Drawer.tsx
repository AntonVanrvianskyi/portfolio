import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { NavBar } from "./NavBar";
type Anchor = "top" | "left" | "bottom" | "right";
interface Props {
  onClose: () => void;
  open?: boolean;
}
const CustomDrawer = ({ open, onClose }: Props) => {
  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
        boxSizing: "border-box",
        pt: "100px",
      }}
      role="presentation"
    >
      <NavBar
        sxProps={{ flexDirection: "column", width: "100%", gap: "30px" }}
      />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={1}>
        <Drawer anchor={"right"} open={open} onClose={onClose}>
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export { CustomDrawer };
