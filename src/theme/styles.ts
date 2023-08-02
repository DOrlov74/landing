import { myPrimary, mySecondary } from "./colors";

export const logoStyle = {
    fontSize: '2rem',
    textAlign: 'left',
    margin: '0 1rem'
} as const;

export const menuBoxStyle = {
    '&, &:link, &.visited': {
        borderBottom: `2px solid ${myPrimary.dark}`,
        margin: 0
    },
    '&:hover': {
        borderBottom: `2px solid ${mySecondary.light}`,
    },
    '&:active, &:focus': {

    }
} as const;

export const menuLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    textAlign: {xs:'left', sm:'right'},
    cursor: 'pointer'
} as const;

export const promoBoxStyle = {
    minHeight: { xs:'calc(100vh - 12rem)', sm:'calc(100vh - 4rem)'},
} as const;

export const promoTextStyle = {
    fontSize: '3rem',
    textAlign: 'left',
    lineHeight: '3rem'
} as const;

export const lineStyle = {
    width: '100%',
    borderBottom: `2px solid ${mySecondary.light}`
} as const;

export const promoCommentStyle = {
    fontSize: '1.2rem',
    textAlign: 'left'
} as const;

export const promoButtonStyle = {
    '&, &:link, &.visited': {
        fontSize: '2rem',
        textTransform: 'none',
        width: '20rem',
        margin: '2.5rem 0',
        color: myPrimary.dark,
        borderRadius: '0.5rem',
        padding: 0,
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
} as const;

export const aboutBoxStyle = {
    minHeight: '70vh',
} as const;

export const aboutTextStyle = {
    fontSize: '3rem',
    textAlign: 'right',
    lineHeight: '3rem'
} as const;

export const aboutContentStyle = {
    fontSize: '1.2rem',
    textAlign: 'right'
} as const;

export const sideLineStyle = {
    borderRight: `2px solid ${mySecondary.light}`
} as const;

export const pathTextStyle = {
    fontSize: '3rem',
    textAlign: 'left',
    lineHeight: '3rem'
} as const;

export const pathContentStyle = {
    fontSize: '1.2rem',
    textAlign: 'left'
} as const;

export const pathCommentStyle = {
    fontSize: '0.875rem',
    textAlign: 'left',
    lineHeight: '1rem'
} as const;

export const circleStyle = {
    width: '1.2rem',
    height: '1.2rem',
    marginTop: '0.15rem',
    borderRadius: '0.6rem',
    backgroundColor: myPrimary.light
} as const;

export const pathLineStyle = {
    borderRight: `2px solid ${mySecondary.light}`,
    flexGrow: 4,
    minHeight: '4rem'
} as const;

export const projectsBoxStyle = {
    minHeight: '100vh',
} as const;

export const projectsIconStyle = {
    width: '1.5rem', 
    objectFit: 'contain'
} as const;

export const skillsContentStyle = {
    fontSize: '1.2rem',
    textAlign: 'center'
} as const;

export const skillsIconStyle = {
    width: '4rem', 
    objectFit: 'contain'
} as const;

export const skillsBottomBoxStyle = {
    height: '1rem'
} as const;

export const inputStyle = {
    backgroundColor: myPrimary.light,
    border: 'none',
    borderRadius: '0.25rem',
    '&:focus': {
        borderColor: 'inherit',
        webkitBoxShadow: 'none',
        boxShadow: 'none'
    } 
}

export const contactBoxStyle = {
    minHeight: 'calc(100vh - 1.5rem)',
} as const;