import {AppBar, Toolbar, Typography, Box} from '@mui/material';
import {makeStyles} from '@mui/styles';

import logo from "../../assets/thumbnail.png";

const useStyles = makeStyles({
    img: {
        // maxHeight: '100%',  // Ensure the logo does not exceed the parent container's height
        minWidth: '10px',   // Ensure the logo width scales proportionally
        maxWidth: "100%",
        objectFit: 'contain', // Maintain aspect ratio while fitting within the parent
    },
    logoBox: {
        width: "30%"
    },
    nameBox: {
        width: "70%"
    },
    titleBox: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        // maxWidth: "50%",
        align: "left"
    },
    message: {
        display: 'flex',
        alignItems: 'right',
        whiteSpace: 'nowrap',
        justifyContent: 'flex-end',
        align: "right",
        marginLeft: "auto",
        marginRight: "5px"
    }
});


function PhonePupAppBar() {
    const classes = useStyles();
    return (
        <AppBar position="static" color="transparent" elevation={1}>
            <Toolbar sx={{height: "10%", width: "100%", diplay: "flex"}}>
                {/* Logo */}
                <Box className={classes.titleBox}>
                    <Box className={classes.logoBox}>
                        <img src={logo} alt="Logo" className={classes.img}/>
                    </Box>
                    <Box className={classes.nameBox}>
                        <Typography
                            variant="h5"
                            sx={{fontWeight: 'bold'}}
                            color={"primary"}
                        >
                            Kylee's K9s
                        </Typography>
                        <a href={"sms:7743293944"}>
                            <Typography
                                variant="h6"
                                sx={{fontWeight: 'bold'}}
                                color={"primary"}
                            >
                                +1 (774) 329 - 3944
                            </Typography>
                        </a>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default PhonePupAppBar;
