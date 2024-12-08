import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Box, CssBaseline, useMediaQuery} from "@mui/material";
import ComputerPupAppBar from "./components/appbar/ComputerPupAppBar.tsx";
import PhonePupAppBar from "./components/appbar/PhonePupAppBar.tsx";
import Welcome from "./components/welcome/Welcome.tsx";
import {makeStyles} from "@mui/styles";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#234c4c',
        },
        secondary: {
            main: '#005e2e',
        },
        background: {
            default: '#cff5ee',
        },
    },
});

const useStyles = makeStyles({
    about: {
        padding: "5%"
    }
});

function App() {
    const isPhone = useMediaQuery('(max-width: 600px)');
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {isPhone ? <PhonePupAppBar />:
            <ComputerPupAppBar /> }
            <Box className={classes.about}>
                <Welcome />
            </Box>

        </ThemeProvider>
    );
}

export default App
