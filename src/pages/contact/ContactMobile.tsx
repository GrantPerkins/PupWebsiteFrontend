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
    marginTop: '2rem !important',
    marginBottom: '2rem !important',
    fontSize: '2rem !important',
    textAlign: 'center',
  },
  contactCard: {
    border: `2px solid ${theme.palette.secondary.main} !important`,
    borderRadius: '8px !important',
    marginBottom: '3rem',
  },
  cardContent: {
    padding: '2rem !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    width: '100px !important',
    height: '100px !important',
    border: `3px solid ${theme.palette.primary.main}`,
    marginBottom: '1.25rem',
  },
  name: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    fontSize: '1.5rem !important',
    marginBottom: '0.25rem !important',
  },
  title: {
    color: '#555555 !important',
    marginBottom: '0.5rem !important',
    fontSize: '0.95rem !important',
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    color: '#777777',
    marginBottom: '1.5rem',
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
    padding: '0.7rem 1.5rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important' as any,
    fontSize: '0.95rem !important',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15) !important',
    transition: 'all 0.3s ease !important',
  },
  emailButton: {
    border: `2px solid ${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.main} !important`,
    borderRadius: '40px !important',
    padding: '0.7rem 1.5rem !important',
    fontWeight: '600 !important',
    textTransform: 'none !important' as any,
    fontSize: '0.95rem !important',
    transition: 'all 0.3s ease !important',
  },
}));

export default function ContactMobile() {
  const classes = useStyles();

  return (
    <>
      <CustomToolbar isMobile={true} />
      <Container maxWidth="sm">
        <Typography variant="h4" className={classes.pageTitle}>
          Contact
        </Typography>

        <Card className={classes.contactCard} elevation={0}>
          <CardContent className={classes.cardContent}>
            <Avatar src={logo} alt={contactInfo.name} className={classes.avatar} />
            <Typography variant="h5" className={classes.name}>
              {contactInfo.name}
            </Typography>
            <Typography variant="subtitle2" className={classes.title}>
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
                Text {contactInfo.name}
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
