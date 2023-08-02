import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { lineStyle, pathTextStyle, projectsBoxStyle, skillsBottomBoxStyle, skillsContentStyle, skillsIconStyle } from '../theme/styles';
import reactIcon from "../assets/react_icon.svg";
import dotNetIcon from "../assets/dot_net_icon.svg";
import apiIcon from "../assets/api_icon.svg";
import javascriptIcon from "../assets/javascript.svg";
import typescriptIcon from "../assets/typescript.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css3.svg";
import cplusplusIcon from "../assets/c++.svg";
import csharpIcon from "../assets/c-sharp.svg";
import azureIcon from "../assets/azure.svg";
import firebaseIcon from "../assets/firebase_.svg";
import muiIcon from "../assets/materialui.svg";
import vStudioIcon from "../assets/visual-studio_.svg";
import vStudioCodeIcon from "../assets/visual-studio-code.svg";
import dockerIcon from "../assets/docker.svg";
import gitIcon from "../assets/git.svg";
import figmaIcon from "../assets/figma.svg";
import photoshopIcon from "../assets/photoshop.svg";
import illustratorIcon from "../assets/illustrator.svg";
import msSqlIcon from "../assets/msql-server.svg";
import mongoDbIcon from "../assets/mongodb.svg";
import postgreSqlIcon from "../assets/postgres.svg";
import mySqlIcon from "../assets/mysql_.svg";
import autoCadIcon from "../assets/autodesk.svg";

export default function Skills() {
    return(
        <><Grid item xs={1}></Grid>
        <Grid item xs={10} id='skills'>
        <Stack direction={'column'} 
                        spacing={2} 
                        alignItems={'flex-start'} 
                        justifyContent={'center'}
                        sx={projectsBoxStyle}>
            <Box>
                <Typography sx={pathTextStyle}>
                    Skills
                </Typography>  
                <Box style={lineStyle}/>
            </Box>
            <Stack direction={'row'} spacing={2}
                    alignItems={'stretch'}
                    justifyContent={'flex-start'}
                    flexWrap={'wrap'}>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={cplusplusIcon} alt='C++ Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        C++
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={csharpIcon} alt='C# Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        C#
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={reactIcon} alt='React Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        React
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={dotNetIcon} alt='Dot NET Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        .NET
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={apiIcon} alt='API Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        REST API
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={azureIcon} alt='Azure Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Azure
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={firebaseIcon} alt='Firebase Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Firebase
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={javascriptIcon} alt='Javascript Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Javascript
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={typescriptIcon} alt='Typescript Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Typescript
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={htmlIcon} alt='HTML5 Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        HTML5
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={cssIcon} alt='CSS3 Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        CSS3
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={muiIcon} alt='MaterialUI Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        MaterialUI
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={vStudioIcon} alt='Visual Studio Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Visual Studio
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={vStudioCodeIcon} alt='Visual Studio Code Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Visual Studio<br/> Code
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={dockerIcon} alt='Docker Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Docker
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={gitIcon} alt='Git Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Git
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={figmaIcon} alt='Figma Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Figma
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={photoshopIcon} alt='Photoshop Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Photoshop
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={illustratorIcon} alt='Illustrator Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        Illustrator
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={msSqlIcon} alt='MS SQL Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        MS SQL
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={mongoDbIcon} alt='MongoDb Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        MongoDb
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={postgreSqlIcon} alt='PostgreSQL Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        PostgreSQL
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={mySqlIcon} alt='MySQL Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        MySQL
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
                <Stack direction={'column'} 
                        spacing={1} 
                        alignItems={'center'} 
                        justifyContent={'flex-start'}>
                    <img src={autoCadIcon} alt='autoCad Icon' style={skillsIconStyle}></img>
                    <Typography sx={skillsContentStyle}>
                        AutoCad
                    </Typography> 
                    <Box sx={skillsBottomBoxStyle}></Box>
                </Stack>
            </Stack>
        </Stack>
    </Grid>
    <Grid item xs={1}></Grid></>
    );
}