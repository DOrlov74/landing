import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { circleStyle, pathCommentStyle, pathContentStyle, pathLineStyle, pathTextStyle } from '../theme/styles';
import { achievements } from '../content/achievements';

export default function MyPath(){
    let rowNum = 0;
    return(
        <><Grid item xs={1}></Grid>
        <Grid item xs={11} >
            <Stack direction={'column'} 
                            spacing={2} 
                            alignItems={'flex-start'} 
                            justifyContent={'center'}>
                <Typography sx={pathTextStyle}>
                    My path
                </Typography>
                <Box sx={{display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: 'repeat(11, [col] auto )',
                    gridTemplateRows: `repeat(${achievements.length}, [row] auto  )`}}>
                {achievements.map((a)=>(  
                <Fragment key={a.name}>
                    <Typography sx={{fontSize: '1.2rem',
                            textAlign: 'left',
                            gridColumn: 'col',
                            gridRow: `row ${++rowNum}` }}>
                        {a.years.map((y)=>(<Fragment key={y}>{y}<br /></Fragment>))}
                    </Typography>
                    <Stack sx={{gridColumn: 'col 2',
                            gridRow: `row ${rowNum}`}}
                            direction={'column'}
                            spacing={2}
                            alignItems={'center'}
                            alignContent={'stretch'}>
                            <Box style={circleStyle} />
                            <Box style={pathLineStyle} />
                    </Stack>
                    <Stack sx={{gridColumn: 'col 3 / span 9',
                            gridRow: `row ${rowNum}`}}
                            direction={'column'}
                                alignItems={'flex-start'}
                                justifyContent={'flex-start'}>
                            <Typography sx={pathContentStyle}>
                                    {a.name}
                            </Typography>
                            <Typography sx={pathCommentStyle}>
                                    {a.comments.map((c) => (<Fragment key={c}>{c}<br /></Fragment>))}
                            </Typography>
                    </Stack>
                </Fragment>))}
                </Box>
            </Stack>
        </Grid>
    </>
    );
}