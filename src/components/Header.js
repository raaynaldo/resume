import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
// import Typed from "react-typed";
import avatar from "../avatar2.png";
const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Raynaldo" />
      {/* <Typography variant="h4"></Typography> */}
    </Box>
  );
};

export default Header;
