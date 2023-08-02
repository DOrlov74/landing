import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from "formik";
import { aboutContentStyle, aboutTextStyle, contactBoxStyle, sideLineStyle, skillsIconStyle } from '../theme/styles';
import linkedInIcon from "../assets/linkedin.svg";
import { mySecondary } from '../theme/colors';
import { sendNotification } from '../telegram/api';

export default function Contact() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [submited, setSubmited] = useState(false);
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(true);

    const myFirstName = 'denis';
    const myLasname = 'orlov';
    
    const validationSchema = yup.object({
        username: yup
            .string()
            .min(3, 'Name should be of minimum 3 characters length')
            .required('Name is required'),
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        message: yup
            .string()
            .min(8, 'Should be of minimum 8 characters length')
            .required('Message is required'),
    });
    const formik = useFormik({
        initialValues: {
            username: userName,
            email: userEmail, 
            message: userMessage
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const {username, email, message} = values;
            const packet = `name: ${username}, email: ${email}, message: ${message}`;
            const result = sendNotification(packet, setSent, setLoading);
            console.log(result);
            setSubmited(true);
            clearForm();
        },
    });

    const clearForm = () => {
        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };

    const handleNameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const n = event.target.value as string;
        setUserName(n);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const p = event.target.value as string;
        setUserEmail(p);
    };

    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const m = event.target.value as string;
        setUserMessage(m);
    };
    return(
        <><Grid item xs={1}></Grid>
        <Grid item xs={10} id='contact'>
            <Stack direction={'column'} 
                            spacing={2} 
                            alignItems={'flex-end'} 
                            justifyContent={'center'}
                            sx={contactBoxStyle}>
                <Typography sx={aboutTextStyle}>
                    Contact me
                </Typography>
                <Grid container >  
                    <Grid item xs={12} md={6}>
                        <Stack direction={'row'} spacing={2}
                                alignItems={'stretch'}
                                justifyContent={'flex-end'}>
                            <Stack direction={'column'} spacing={2}
                                alignItems={'stretch'}
                                justifyContent={'flex-start'}>
                                <Typography sx={aboutContentStyle}>
                                    If you have any problem in mind,<br/>
                                    that I could help you with, <br/>
                                    don’t hesitate to contact me, <br/>
                                    I’ll respond as soon as I can.
                                </Typography> 
                                <Stack direction={'row'} spacing={2}
                                alignItems={'center'}
                                justifyContent={'flex-end'}>
                                    <Typography sx={aboutContentStyle}>
                                        me in social:
                                    </Typography> 
                                    <a href='https://www.linkedin.com/in/denis-orlov-627146178/'>
                                        <img src={linkedInIcon} alt='LinkedIn Icon' style={skillsIconStyle}/>
                                    </a>
                                </Stack>
                            </Stack>
                        <Box style={sideLineStyle}/>
                        </Stack>
                        <Box sx={{height: '2rem'}}/>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box component="form"
                            sx={{
                                paddingLeft: '1rem',
                                display: 'grid',
                                columnGap: '1rem',
                                gridTemplateColumns: {xs:'[col] auto', sm:'repeat(5, [col] auto )'},
                                gridTemplateRows: {xs:'repeat(9, [row] auto  )', sm:'repeat(6, [row] auto  )'}}}
                                noValidate
                                autoComplete="off"
                                onSubmit={formik.handleSubmit}>
                            <Typography component="label"
                                sx={{
                                    for:'nameInput',
                                    minHeight: {xs:'2rem', sm:'4.5rem'},
                                    fontSize: '1.2rem',
                                    textAlign: 'right',
                                    gridColumn: {xs:'col', sm:'col / span 2'},
                                    gridRow: 'row' }}>
                                    Your Name<span style={{color: mySecondary.light}}>*</span>
                            </Typography>
                            <Box sx={{
                                minHeight:'4.625rem',
                                gridColumn: {xs:'col', sm:'col 3/ span 3'},
                                gridRow: {xs:'row 2',sm:'row'},}}>
                                <TextField
                                    margin="none"
                                    fullWidth
                                    hiddenLabel
                                    variant="filled"
                                    id="nameInput"
                                    name="username"
                                    type="text"
                                    required
                                    value={formik.values.username}
                                    onChange={(e)=>{
                                        formik.handleChange(e);
                                        handleNameChange(e);}}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}/>
                            </Box>
                            <Typography sx={{
                                fontSize: '1.2rem',
                                minHeight: {xs:'2rem', sm:'4.5rem'},
                                textAlign: 'right',
                                gridColumn: {xs:'col', sm:'col / span 2'},
                                gridRow: {xs:'row 3', sm:'row 2'} }}>
                                    Your Email<span style={{color: mySecondary.light}}>*</span>
                            </Typography>
                            <Box sx={{
                                minHeight:'4.625rem',
                                gridColumn: {xs:'col', sm:'col 3/ span 3'},
                                gridRow: {xs:'row 4', sm:'row 2'}}}>
                                <TextField
                                    margin="none"
                                    fullWidth
                                    hiddenLabel
                                    variant="filled"
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={(e)=>{
                                        formik.handleChange(e);
                                        handleEmailChange(e);}}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}/>
                            </Box>
                            <Typography sx={{
                                fontSize: '1.2rem',
                                minHeight: {xs:'2rem', sm:'7.2rem'},
                                textAlign: 'right',
                                gridColumn: {xs:'col', sm:'col / span 2'},
                                gridRow: {xs:'row 5', sm:'row 3'} }}>
                                    Your Message<span style={{color: mySecondary.light}}>*</span>
                            </Typography>
                            <Box sx={{
                                minHeight:'7.16rem',
                                gridColumn: {xs:'col', sm:'col 3/ span 3'},
                                gridRow: {xs:'row 6 /span 2', sm:'row 3/ span 2'}}}>
                                <TextField
                                    margin="none"
                                    fullWidth
                                    hiddenLabel
                                    variant="filled"
                                    id="message"
                                    name="message"
                                    multiline minRows={3} maxRows={3}
                                    value={formik.values.message}
                                    onChange={(e)=>{
                                        formik.handleChange(e);
                                        handleMessageChange(e);}}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                    helperText={formik.touched.message && formik.errors.message}/>
                            </Box>
                            <Button size="large" disableRipple 
                                    sx={{
                                        height: '2rem',
                                        fontSize: '1.2rem',
                                        padding: '0.25rem 0.5rem',
                                        gridColumn: {xs:'col', sm:'col 3/ span 3'},
                                        gridRow: {xs:'row 8', sm:'row 5'}}} 
                                    type='submit'>
                                    send message
                            </Button>
                            <Box sx={{
                                height: '2rem',
                                gridColumn: {xs:'col', sm:'col 3/ span 3'},
                                gridRow: {xs:'row 9', sm:'row 6'},
                                }}>
                            {submited &&
                            <Typography sx={{
                                    fontSize: '1rem',
                                    padding: '0.5rem',
                                    marginTop: '1rem'
                                }}>{loading?'sending...':
                                    sent?'Your message was sent, thank you':
                                    `Something went wrong, sorry, try to send me an email at ${myFirstName}.${myLasname}.pt@gmail.com`}
                            </Typography>}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Stack>
        </Grid>
        <Grid item xs={1}></Grid>
    </>
    );
}