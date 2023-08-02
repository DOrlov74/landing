import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
    return(
        <><Stack direction={'row'} spacing={2}
                alignItems={'stretch'}
                justifyContent={'center'}
                mx={'auto'}>
            <Typography>
                © 2023 | Designed & developed by Denis Orlov
            </Typography>
        </Stack></>
    );
}