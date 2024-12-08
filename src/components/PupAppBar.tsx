import { AppBar, Toolbar, Typography, Box, IconButton, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { styled } from '@mui/system';

import logo from "../assets/thumbnail.png";

const Logo = styled('img')({
    maxHeight: '10%',  // Ensure the logo does not exceed the parent container's height
    maxWidth: '20%',   // Ensure the logo width scales proportionally
    objectFit: 'contain', // Maintain aspect ratio while fitting within the parent
    marginRight: 16,
});



function PupAppBar() {
    return (
        <AppBar position="static" color="transparent" elevation={1}>
            <Toolbar sx={{ height: "10%" }}>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, marginLeft: 15, maxWidth: "30%" }}>
                    <Logo src={logo} alt="Logo" />
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 'bold', color: '#234c4c' }}
                    >
                        Kylee's K9s Unincorporated
                    </Typography>
                </Box>

                {/* Navigation Links */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant={"outlined"}>Home</Button>
                    <Button>Services</Button>
                    <Button>Meet Our Team</Button>
                    <Button>German Shepherd Sales</Button>
                    <Button>Blog</Button>
                    <Button>Contact</Button>
                </Box>

                {/* Phone Icon and Number */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 1, whiteSpace: 'nowrap' }}>
                    <IconButton color="inherit">
                        <PhoneIcon />
                    </IconButton>
                    <Typography variant="body1" color="textSecondary">
                        +1 (774) 329 - 3944
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default PupAppBar;
