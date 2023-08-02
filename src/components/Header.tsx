import React from 'react';
import { Box, Grid, Stack, Typography } from "@mui/material";
import { logoStyle, menuBoxStyle, menuLinkStyle } from "../theme/styles";

export default function Header(){
    return(
        <><Grid item container xs={12} sm={4} alignItems={'flex-end'} 
                        sx={{height: '4rem'}}>
                    <Typography sx={logoStyle}>
                        DO
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} 
                            spacing={{xs:0, sm:2}} mx={2} 
                            alignItems={{xs: 'flex-start', sm: 'flex-end'}} 
                            justifyContent={{xs: 'flex-start', sm: 'flex-end'}}
                            sx={{minHeight: '4rem'}}>
                        <Box sx={menuBoxStyle}>
                            <Typography component={'a'} href='#about' 
                                    sx={menuLinkStyle}>
                                About me
                            </Typography>
                        </Box>
                        <Box sx={menuBoxStyle}>
                            <Typography component={'a'} href='#projects' 
                                    sx={menuLinkStyle}>
                            Projects
                            </Typography>
                        </Box>
                        <Box sx={menuBoxStyle}>
                            <Typography component={'a'} href='#skills' 
                                    sx={menuLinkStyle}>
                            Skills
                            </Typography>
                        </Box>
                        <Box sx={menuBoxStyle}>
                            <Typography component={'a'} href='#contact'
                                    sx={menuLinkStyle}>
                            Contact me
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
            </>
    );
}