import { Box, Typography, Container, Card, CardContent, Button, Avatar } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/styles';
import CustomToolbar from '../CustomToolbar';
import CustomFooter from '../CustomFooter';
import contactInfo from '../../assets/json/contact_info.json';
import logo from '../../assets/thumbnail.png';

const useStyles = makeStyles((theme: any) => ({
  pageTitle: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '800 !important',
    marginTop: '2.5rem !important',
    marginBottom: '3rem !important',
    fontSize: '2.5rem !important',
    textAlign: 'center',
  },
  contactCard: {
    maxWidth: 480,
    margin: '0 auto',
    border: `2px solid ${theme.palette.secondary.main} !important`,
    borderRadius: '8px !important',
    marginBottom: '4rem',
  },
  cardContent: {
    padding: '3rem !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    width: '120px !important',
    height: '120px !important',
    border: `3px solid ${theme.palette.primary.main}`,
    marginBottom: '1.5rem',
  },
  name: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    fontSize: '1.8rem !important',
    marginBottom: '0.25rem !important',
  },
  title: {
    color: '#555555 !important',
    marginBottom: '0.5rem !important',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    color: '#777777',
    marginBottom: '2rem',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
  },
  phoneButton: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: '#ffffff !important',
    borderRadius: '40px !important',
    padding: '0.75rem 2rem !important',
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
  emailButton: {
    border: `2px solid ${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.main} !important`,
    borderRadius: '40px !important',
    padding: '0.75rem 2rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important' as any,
    fontSize: '1.05rem !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.main} !important`,
      transform: 'translateY(-2px)',
    },
  },
}));

export default function ContactDesktop() {
  const classes = useStyles();

  return (
    <>
      <CustomToolbar isMobile={false} />
      <Container maxWidth="sm">
        <Typography variant="h3" className={classes.pageTitle}>
          Contact
        </Typography>

        <Card className={classes.contactCard} elevation={0}>
          <CardContent className={classes.cardContent}>
            <Avatar src={logo} alt={contactInfo.name} className={classes.avatar} />
            <Typography variant="h4" className={classes.name}>
              {contactInfo.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.title}>
              {contactInfo.title}
            </Typography>
            <Box className={classes.location}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">{contactInfo.location}</Typography>
            </Box>

            <Box className={classes.buttonGroup}>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                href={`sms:${contactInfo.phone}`}
                className={classes.phoneButton}
              >
                Text {contactInfo.name} — {contactInfo.phoneDisplay}
              </Button>
              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                href={`mailto:${contactInfo.email}`}
                className={classes.emailButton}
              >
                Email {contactInfo.name}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <CustomFooter />
    </>
  );
}
