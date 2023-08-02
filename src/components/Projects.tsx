import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { aboutContentStyle, aboutTextStyle, projectsBoxStyle, projectsIconStyle, sideLineStyle } from '../theme/styles';
import project1 from "../assets/Project1.png";
import reactIcon from "../assets/react_icon.svg";
import typescriptIcon from "../assets/typescript.svg";
import materialUIIcon from "../assets/materialui.svg";
import firebaseIcon from "../assets/firebase_.svg";
import telegramIcon from "../assets/telegram.svg";

export default function Projects() {
    return(
        <><Grid item xs={1} sm={3}></Grid>
        <Grid item xs={10} sm={8} id='projects'>
            <Stack direction={'column'} 
                            spacing={2} 
                            alignItems={'flex-end'} 
                            justifyContent={'center'}
                            sx={projectsBoxStyle}>
                <Typography sx={aboutTextStyle}>
                    Projects
                </Typography>
                <a href='https://magia-5bd20.web.app/'>
                    <img src={project1} alt='Project 1' style={{maxWidth: '100%', objectFit: 'contain'}}></img> 
                </a> 
                <Stack direction={'row'} spacing={2}
                        alignItems={'stretch'}
                        justifyContent={'flex-end'}>
                <Typography sx={aboutContentStyle}>
                    Project was developed as a massage service booking system. <br/>
                    It has user registration and bookings storing features powered by Firebase. <br/>
                    Employee with admin privilegies may add available hours, <br/>
                    users may book services and send messages through Telegram API. <br/>
                    Logo, main design, architecture and functionality were developed from scratch. <br/>
                    Technologies used in this project: React, Typescript, Material UI, Firebase.
                </Typography> 
                <Box style={sideLineStyle}/>
                </Stack>
                <Stack direction={'row'} spacing={2}
                        alignItems={'stretch'}
                        justifyContent={'flex-end'}>
                    <img src={reactIcon} alt='React Icon' style={projectsIconStyle}></img>
                    <img src={typescriptIcon} alt='Typescript Icon' style={projectsIconStyle}></img>
                    <img src={materialUIIcon} alt='MaterialUI Icon' style={projectsIconStyle}></img>
                    <img src={firebaseIcon} alt='Firebase Icon' style={projectsIconStyle}></img>
                    <img src={telegramIcon} alt='Firebase Icon' style={projectsIconStyle}></img>  
                </Stack>
            </Stack>
        </Grid>
        <Grid item xs={1}></Grid>
        </>
    );
}