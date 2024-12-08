import {makeStyles} from '@mui/styles';
import {Box, List, ListItem, Typography} from "@mui/material";
import about from "../../assets/json/about.json";
import mainPic from "../../assets/dome_rock.jpg";

const useStyles = makeStyles({
    aboutBox: {
        maxWidth: '100%',
        display: 'block',
        justifyContent: 'left',
        gap: "100px"
    },
    aboutText: {
        fontSize: 'clamp(16px, 5vw, 32px)', // Scales font size between 16px and 32px
        whiteSpace: 'nowrap', // Prevents wrapping
        overflow: 'hidden', // Ensures no overflow
    },
    childBox: {
        padding: "5px"
    },
    mainPicBox: {
        display: 'flex',
        justifyContent: 'center',
        width: "100%",
    },
    mainPic: {maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',}
});



function Welcome() {
    const classes = useStyles();
    return (
        <Box className={classes.aboutBox}>
            <Box className={classes.childBox}>
                <Typography sx={{
                    fontSize: '2em', // Dynamically scales the font size between 16px and 32px
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }} color={"primary"}>
                    About Kylee's K9s
                </Typography>
            </Box>
            <Box className={classes.childBox}>
                <Typography>
                    {about.description}
                </Typography>
            </Box>
            <Box className={classes.childBox}>
                <Typography sx={{fontWeight: 'bold'}}>We specialize in:</Typography>
                <List sx={{ listStyleType: 'disc', pl: 4}}>
                    {about.specialties.map((item, index) => { return (
                        <ListItem key={index} sx={{ display: 'list-item' }}>
                            <Typography>{item}</Typography>
                        </ListItem>
                    );})}
                </List>
            </Box>
            <Box className={classes.childBox}>
                <Typography sx={{fontWeight: 'bold'}}>Services we offer:</Typography>
                <List sx={{ listStyleType: 'disc', pl: 4}}>
                    {about.services.map((item, index) => { return (
                        <ListItem key={index} sx={{ display: 'list-item' }}>
                            <Typography><b>{item.name}</b>: {item.description}</Typography>
                        </ListItem>
                    );})}
                </List>
            </Box>
            <Box className={classes.childBox}>
                <Box className={classes.mainPicBox}>
                    <img src={mainPic} className={classes.mainPic}/>
                </Box>
            </Box>
        </Box>
    );
}

export default Welcome;