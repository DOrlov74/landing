import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { aboutContentStyle, aboutTextStyle, projectsBoxStyle, projectsIconStyle, sideLineStyle } from '../theme/styles';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { icons, images, projects } from '../content/projects';

export default function Projects() {
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();
    const maxSteps = Object.entries(images).length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        if(step >= maxSteps){
            setActiveStep(0);
        }else if (step < 0) {
            setActiveStep(1);
        } else {
            setActiveStep(step);
        }
    };

    return(
        <><Grid item xs={1} sm={3}>
        </Grid>
        <Grid item xs={10} sm={8} id='projects'>
            <Stack direction={'column'} 
                            spacing={2} 
                            alignItems={'flex-end'} 
                            justifyContent={'center'}
                            sx={projectsBoxStyle}>
                <Typography sx={aboutTextStyle}>
                    Projects
                </Typography>
                <Box sx={{mt:0, position: 'relative'}}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents>
                        {projects.map((project, index) => {
                            return (
                                <img key={index} src={project.img} alt={project.name} 
                                    style={{maxWidth: '100%', objectFit: 'contain'}}>
                                        
                                    </img> 
                            )
                        })}; 
                    </SwipeableViews>
                    <IconButton 
                        sx={{
                            left: '-2rem',
                            }}
                            size="small" 
                            onClick={handleBack} 
                            disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                            ) : (
                            <KeyboardArrowLeft />
                            )}
                            Back
                    </IconButton>
                    <IconButton
                        sx={{
                            right: '-2rem',
                            }}
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                            >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                                    ) : (
                                <KeyboardArrowRight />
                                    )}
                    </IconButton>
                </Box>
                <Stack direction={'row'} spacing={2}
                        alignItems={'stretch'}
                        justifyContent={'flex-end'}>
                <Typography sx={aboutContentStyle}>
                    {projects[activeStep].description.map((str)=>(
                        <Fragment key={str}>{str}<br/></Fragment>
                        ))}
                </Typography> 
                <Box style={sideLineStyle}/>
                </Stack>
                <Stack direction={'row'} spacing={2}
                        alignItems={'stretch'}
                        justifyContent={'flex-end'}>
                    {projects[activeStep].href!=''?
                        <Typography sx={aboutContentStyle}>site: 
                            <a style={{color:'white', textDecoration:'none'}} href={projects[activeStep].href}> {projects[activeStep].href}</a>
                        </Typography>:''}
                    {projects[activeStep].icons.map((icon, index)=>{
                        return (
                            <Fragment key={index}>
                        <img src={icon.href} alt={icon.name} style={projectsIconStyle}></img>
                        </Fragment>
                        )
                    })}
                </Stack>
            </Stack>
        </Grid>
        <Grid item xs={1}>
            
        </Grid>
        </>
    );
}