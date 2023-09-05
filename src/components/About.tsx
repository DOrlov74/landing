import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  aboutBoxStyle,
  aboutContentStyle,
  aboutTextStyle,
  sideLineStyle,
} from "../theme/styles";

export default function About() {
  return (
    <>
      <Grid item xs={11} id="about">
        <Stack
          direction={"column"}
          spacing={2}
          alignItems={"flex-end"}
          justifyContent={"center"}
          sx={aboutBoxStyle}
        >
          <Typography sx={aboutTextStyle}>About me</Typography>
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"stretch"}
            justifyContent={"flex-end"}
          >
            <Typography sx={aboutContentStyle}>
              I’m a software developer with more than 4 years of programming
              experience <br />
              and I can work with a wide range of computer technologies.
              <br />
              I have a deep understanding of the development process <br />
              and am passionate about creating high-quality,
              <br />
              user-friendly and efficient websites and applications.
            </Typography>
            <Box style={sideLineStyle} />
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={1}></Grid>
    </>
  );
}
