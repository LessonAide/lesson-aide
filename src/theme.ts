import { createTheme, darken, lighten } from '@mui/material/styles';

const PRIMARY_COLOR = '#004852';
const SECONDARY_COLOR = '#F5DD90';
// const TERITARY_COLOR = '#F68E5F';

export const theme = createTheme({
    spacing: 8,
    palette: {
        primary: {
            main: PRIMARY_COLOR,
            dark: darken(PRIMARY_COLOR, 0.1),
            light: '#007C3A'
        },
        secondary: {
            main: SECONDARY_COLOR,
            dark: darken(SECONDARY_COLOR, 0.1),
            light: lighten(SECONDARY_COLOR, 0.85)
        },
        background: {
            default: '#D4D4D4'
        },
        text: {
            primary: '#000000',
            secondary: '#949494'
        },
        success: {
            main: '#33FF33'
        },
        warning: {
            main: '#FFDD33',
            light: '#FDF5C7'
        },
        error: {
            main: '#FF3333',
            light: '#FFE8E8'
        },
    },
    typography: {
        fontFamily: ['Montserrat', 'serif'].join(',')
    }
});