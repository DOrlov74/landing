import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { lineStyle, promoBoxStyle, promoButtonStyle, promoCommentStyle, promoTextStyle } from '../theme/styles';

export default function Promo() {
    return(
        <>
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
            <Stack direction={'column'} 
                            spacing={2} 
                            alignItems={'flex-start'} 
                            justifyContent={'center'}
                            sx={promoBoxStyle}>
                <Typography sx={promoTextStyle}>
                    Hi, I'm Denis,<br/> Full stack developer
                </Typography> 
                <Box style={lineStyle}/> 
                <Typography sx={promoCommentStyle}>
                    Responsibility and result oriented approach
                </Typography> 
                <Button size="large" disableRipple
                        sx={promoButtonStyle} 
                        href="#contact">
                        contact me
                </Button>
            </Stack>
        </Grid></>
    );
}