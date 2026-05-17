import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import CustomToolbar from '../CustomToolbar';
import CustomFooter from '../CustomFooter';
import homeContent from '../../assets/json/home_content.json';

const useStyles = makeStyles((theme: any) => ({
  heroSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '3rem',
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  textContent: {
    flex: 1,
  },
  title: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '800 !important',
    marginBottom: '1.5rem !important',
    fontSize: '2.8rem !important',
  },
  introParagraph: {
    marginBottom: '1rem !important',
    lineHeight: '1.7 !important',
    fontSize: '1.05rem !important',
  },
  heroImage: {
    width: 340,
    flexShrink: 0,
    objectFit: 'contain',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    display: 'block',
  },
  ctaSection: {
    marginTop: '2rem',
    marginBottom: '3rem',
    textAlign: 'center',
  },
  ctaTitle: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    marginBottom: '1.5rem !important',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  mapSection: {
    marginBottom: '4rem',
  },
  mapHeading: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    marginBottom: '1rem !important',
    textAlign: 'center',
  },
  mapWrapper: {
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    overflow: 'hidden',
  },
  mapFrame: {
    width: '100%',
    height: 420,
    display: 'block',
    border: 'none',
  },
  mapLink: {
    display: 'block',
    textAlign: 'center',
    marginTop: '0.75rem',
    color: theme.palette.primary.main,
    fontSize: '0.9rem',
  },
  primaryButton: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: '#ffffff !important',
    borderRadius: '40px !important',
    padding: '0.7rem 2.5rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important' as any,
    fontSize: '1.05rem !important',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15) !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: `${theme.palette.primary.dark} !important`,
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(0,0,0,0.2) !important',
    },
  },
  outlineButton: {
    border: `2px solid ${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.main} !important`,
    borderRadius: '40px !important',
    padding: '0.7rem 2.5rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important' as any,
    fontSize: '1.05rem !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main} !important`,
      transform: 'translateY(-2px)',
    },
  },
  navLink: {
    textDecoration: 'none',
  },
}));

export default function HomeDesktop() {
  const classes = useStyles();

  return (
    <>
      <CustomToolbar isMobile={false} />
      <Container maxWidth="lg">
        <Box className={classes.heroSection}>
          <Box className={classes.textContent}>
            <Typography variant="h2" className={classes.title}>
              {homeContent.title}
            </Typography>
            {homeContent.intro.map((paragraph, i) => (
              <Typography key={i} variant="body1" className={classes.introParagraph}>
                {paragraph}
              </Typography>
            ))}
            <Box sx={{ display: 'flex', gap: '1.5rem', mt: 3 }}>
              <Link to="/gallery" className={classes.navLink}>
                <Button variant="contained" className={classes.primaryButton}>
                  View Gallery
                </Button>
              </Link>
              <Link to="/contact" className={classes.navLink}>
                <Button variant="outlined" className={classes.outlineButton}>
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Box>
          <img src="/photos/JSG07528.jpg" alt="Kylee's K9" className={classes.heroImage} />
        </Box>

        <Box className={classes.ctaSection}>
          <Typography variant="h4" className={classes.ctaTitle}>
            Based in Bothell, WA
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Serving the greater Seattle area with customized training programs for dogs of all backgrounds.
          </Typography>
          <Box className={classes.ctaButtons}>
            <Link to="/services" className={classes.navLink}>
              <Button variant="contained" className={classes.primaryButton}>
                My Services
              </Button>
            </Link>
            <Link to="/about" className={classes.navLink}>
              <Button variant="outlined" className={classes.outlineButton}>
                About Kylee
              </Button>
            </Link>
          </Box>
        </Box>

        <Box className={classes.mapSection}>
          <Typography variant="h5" className={classes.mapHeading}>
            Find Us
          </Typography>
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
        </Box>
      </Container>
      <CustomFooter />
    </>
  );
}
