import React from 'react';
import { Grid } from "@mui/material";
import Header from '../components/Header';
import Promo from '../components/Promo';
import About from '../components/About';
import MyPath from '../components/MyPath';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return(
            <Grid container spacing={0} sx={{maxWidth: 'lg', 
                    margin: 'auto',
                    justifyContent:'space-between'}}>
                <Header />
                <Promo/>
                <About/>
                <MyPath/>
                <Projects/>
                <Skills/>
                <Contact/>
                <Footer/>
            </Grid>
    );
}
