import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline, Typography} from "@mui/material";
import PupAppBar from "./components/PupAppBar.tsx";

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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <PupAppBar />
            <Typography variant="h1" component="h1">
                PUPS GO HERE
            </Typography>
            <Typography variant="body2" component="p">
                even more pups
            </Typography>
        </ThemeProvider>
    );
}

export default App
