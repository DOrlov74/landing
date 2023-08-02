import {createTheme} from "@mui/material/styles";
import '@fontsource-variable/league-spartan';
import { myPrimary, mySecondary } from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: myPrimary.dark,
        },
        secondary: {
            main: myPrimary.light,
        },
        background: {
            default: myPrimary.dark,
        },
    },
    typography: {
        fontFamily: 'League Spartan Variable',
    },
    components: {
        MuiInputBase:{
            styleOverrides:{
                input:{
                    fontSize: '1.2rem',
                    textAlign: 'right',
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
              root: {
                padding: 0,
                '&:before, &:after': {
                    display:'none'
                },
              },
              input:{
                padding: '0.5rem 1rem',
                borderWidth: 0,
                borderRadius:'0.25rem',
                color: myPrimary.dark,
                backgroundColor: 'white',
              }
            },
          },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    textAlign: 'right',
                    color: mySecondary.dark
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    '&, &:link, &.visited': {
                        textTransform: 'none',
                        color: myPrimary.dark,
                        boxShadow: `5px 5px 5px black`,
                        backgroundColor: myPrimary.light,
                        transition: 'all .2s'
                    },
                    '&:hover': {
                        color: mySecondary.dark,
                        backgroundColor: myPrimary.light,
                        boxShadow: '5px 10px 10px black',
                        transform: 'translateY(-5px)'
                    },
                    '&:active, &:focus': {
                        boxShadow: `5px 7px 5px black`,
                        transform: 'translateY(-2px)'
                    }
                }
            }
        }
    }
})

export default theme;