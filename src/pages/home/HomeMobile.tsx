import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import CustomToolbar from '../CustomToolbar';
import CustomFooter from '../CustomFooter';
import homeContent from '../../assets/json/home_content.json';

const useStyles = makeStyles((theme: any) => ({
  title: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '800 !important',
    marginBottom: '1.5rem !important',
    marginTop: '2rem !important',
    fontSize: '2rem !important',
    textAlign: 'center',
  },
  heroImage: {
    width: '100%',
    objectFit: 'contain',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    marginBottom: '1.5rem',
    display: 'block',
  },
  introParagraph: {
    marginBottom: '1rem !important',
    lineHeight: '1.7 !important',
  },
  ctaButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  primaryButton: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: '#ffffff !important',
    borderRadius: '40px !important',
    padding: '0.7rem 2rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important' as any,
    fontSize: '1rem !important',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15) !important',
    transition: 'all 0.3s ease !important',
  },
  outlineButton: {
    border: `2px solid ${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.main} !important`,
    borderRadius: '40px !important',
    padding: '0.7rem 2rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important' as any,
    fontSize: '1rem !important',
    transition: 'all 0.3s ease !important',
  },
  locationSection: {
    textAlign: 'center',
    marginBottom: '2rem',
    padding: '1.5rem 1.5rem 0',
    borderTop: `2px solid ${theme.palette.secondary.main}`,
  },
  locationTitle: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    marginBottom: '0.5rem !important',
  },
  mapWrapper: {
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    overflow: 'hidden',
    margin: '1rem 1.5rem',
  },
  mapFrame: {
    width: '100%',
    height: 300,
    display: 'block',
    border: 'none',
  },
  mapLink: {
    display: 'block',
    textAlign: 'center',
    marginBottom: '2rem',
    color: theme.palette.primary.main,
    fontSize: '0.9rem',
  },
  navLink: {
    textDecoration: 'none',
  },
}));

export default function HomeMobile() {
  const classes = useStyles();

  return (
    <>
      <CustomToolbar isMobile={true} />
      <Container maxWidth="sm">
        <Typography variant="h3" className={classes.title}>
          {homeContent.title}
        </Typography>
        <img src="/photos/JSG07528.jpg" alt="Kylee's K9" className={classes.heroImage} />
        {homeContent.intro.map((paragraph, i) => (
          <Typography key={i} variant="body1" className={classes.introParagraph}>
            {paragraph}
          </Typography>
        ))}
        <Box className={classes.ctaButtons}>
          <Link to="/gallery" className={classes.navLink}>
            <Button variant="contained" fullWidth className={classes.primaryButton}>
              View Gallery
            </Button>
          </Link>
          <Link to="/services" className={classes.navLink}>
            <Button variant="contained" fullWidth className={classes.primaryButton}>
              Our Services
            </Button>
          </Link>
          <Link to="/contact" className={classes.navLink}>
            <Button variant="outlined" fullWidth className={classes.outlineButton}>
              Contact Us
            </Button>
          </Link>
          <Link to="/about" className={classes.navLink}>
            <Button variant="outlined" fullWidth className={classes.outlineButton}>
              About Kylee
            </Button>
          </Link>
        </Box>

      </Container>

      <Box className={classes.locationSection}>
        <Typography variant="h5" className={classes.locationTitle}>
          Based in Bothell, WA
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Serving the greater Seattle area
        </Typography>
      </Box>

      <Box className={classes.mapWrapper}>
        <iframe
          title="Bothell, WA map"
          className={classes.mapFrame}
          src="https://www.openstreetmap.org/export/embed.html?bbox=-122.74,47.40,-121.67,48.12&layer=mapnik&marker=47.7623,-122.2054"
          loading="lazy"
        />
      </Box>
      <a
        href="https://maps.google.com/maps?q=Bothell,+WA+98012"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.mapLink}
      >
        Open in Google Maps ↗
      </a>

      <CustomFooter />
    </>
  );
}
