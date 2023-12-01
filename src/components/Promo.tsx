import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import {
  lineStyle,
  promoBoxStyle,
  promoButtonStyle,
  promoCommentStyle,
  promoTextStyle,
} from "../theme/styles";
import { appear } from "../theme/animation";

const letterStyle = {
  display: "inline",
  animation: "appear 2s ease-out",
  animationFillMode: "both",
  "@keyframes appear": { ...appear },
};
export default function Promo() {
  return (
    <>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <Stack
          direction={"column"}
          spacing={2}
          alignItems={"flex-start"}
          justifyContent={"center"}
          sx={promoBoxStyle}
        >
          <Typography sx={promoTextStyle}>
            H<span style={letterStyle}>i</span>, I
            <span style={letterStyle}>'m</span> D
            <span style={letterStyle}>e</span>n
            <span style={letterStyle}>i</span>s,
            <br /> F<span style={letterStyle}>u</span>ll st
            <span style={letterStyle}>a</span>ck d
            <span style={letterStyle}>e</span>v
            <span style={letterStyle}>e</span>l
            <span style={letterStyle}>o</span>p
            <span style={letterStyle}>e</span>r
          </Typography>
          <Box style={lineStyle} />
          <Typography sx={promoCommentStyle}>
            Responsibility and result oriented approach
          </Typography>
          <Button
            size="large"
            disableRipple
            sx={promoButtonStyle}
            href="#contact"
          >
            contact me
          </Button>
        </Stack>
      </Grid>
    </>
  );
}
