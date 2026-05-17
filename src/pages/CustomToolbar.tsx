import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Button, Drawer, List, ListItem,
  ListItemButton, ListItemIcon, ListItemText, IconButton, Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ImageIcon from '@mui/icons-material/Image';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { makeStyles } from '@mui/styles';
import logo from '../assets/thumbnail.png';

interface ToolbarProps {
  isMobile: boolean;
}

const useStyles = makeStyles((theme: any) => ({
  appBar: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: '#ffffff !important',
    color: '#222222 !important',
  },
  toolbar: {
    padding: '0 2rem',
  },
  logo: {
    height: 80,
    [theme.breakpoints.down('sm')]: {
      height: 60,
    },
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    marginLeft: 'auto',
  },
  buttonText: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    textTransform: 'none !important' as any,
    color: '#222222 !important',
    '&:hover': {
      color: `${theme.palette.primary.main} !important`,
      backgroundColor: 'transparent !important',
    },
  },
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  drawerPaper: {
    width: '200px !important',
    backgroundColor: '#ffffff !important',
  },
  menuIcon: {
    marginLeft: 'auto',
  },
  drawerLink: {
    textDecoration: 'none',
    color: 'inherit',
    width: '100%',
    display: 'block',
  },
}));

const navItems = [
  { label: 'Home', to: '/', icon: <HomeIcon /> },
  { label: 'About', to: '/about', icon: <InfoIcon /> },
  { label: 'Services', to: '/services', icon: <BuildIcon /> },
  { label: 'Gallery', to: '/gallery', icon: <ImageIcon /> },
  { label: 'Contact', to: '/contact', icon: <ContactMailIcon /> },
];

export default function CustomToolbar({ isMobile }: ToolbarProps) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (!isMobile) {
    return (
      <AppBar position="sticky" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.navLink}>
            <img src={logo} alt="Kylee's K9s" className={classes.logo} />
          </Link>
          <Box className={classes.navLinks}>
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className={classes.navLink}>
                <Button className={classes.buttonText}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <>
      <AppBar position="sticky" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.navLink}>
            <img src={logo} alt="Kylee's K9s" className={classes.logo} />
          </Link>
          <Box className={classes.menuIcon}>
            <IconButton onClick={() => setDrawerOpen(true)} aria-label="open menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link
                to={item.to}
                className={classes.drawerLink}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'secondary.main', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
