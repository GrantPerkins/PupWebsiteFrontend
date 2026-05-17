import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomToolbar from '../CustomToolbar';
import CustomFooter from '../CustomFooter';
import servicesContent from '../../assets/json/services_content.json';

const useStyles = makeStyles((theme: any) => ({
  pageTitle: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '800 !important',
    marginTop: '2.5rem !important',
    marginBottom: '0.5rem !important',
    fontSize: '2.5rem !important',
  },
  pageSubtitle: {
    color: 'text.secondary',
    marginBottom: '3rem !important',
    fontSize: '1.1rem !important',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    marginBottom: '4rem',
  },
  serviceCard: {
    border: `2px solid ${theme.palette.secondary.main} !important`,
    borderRadius: '8px !important',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: `${theme.palette.primary.main} !important`,
      boxShadow: '0 6px 20px rgba(212, 88, 154, 0.15) !important',
      transform: 'translateY(-3px)',
    },
  },
  serviceCardContent: {
    padding: '2rem !important',
  },
  serviceName: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    marginBottom: '1rem !important',
    fontSize: '1.3rem !important',
  },
  serviceParagraph: {
    marginBottom: '0.75rem !important',
    lineHeight: '1.7 !important',
    color: '#444444 !important',
    fontSize: '0.97rem !important',
  },
}));

export default function ServicesDesktop() {
  const classes = useStyles();
  const { heading, services } = servicesContent;

  return (
    <>
      <CustomToolbar isMobile={false} />
      <Container maxWidth="lg">
        <Typography variant="h3" className={classes.pageTitle}>
          {heading}
        </Typography>
        <Typography variant="body1" className={classes.pageSubtitle} color="text.secondary">
          Customized programs for dogs of all backgrounds, based in Bothell, WA.
        </Typography>

        <Box className={classes.servicesGrid}>
          {services.map((service) => (
            <Card key={service.name} className={classes.serviceCard} elevation={0}>
              <CardContent className={classes.serviceCardContent}>
                <Typography variant="h5" className={classes.serviceName}>
                  {service.name}
                </Typography>
                {service.paragraphs.map((p, i) => (
                  <Typography key={i} variant="body1" className={classes.serviceParagraph}>
                    {p}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
      <CustomFooter />
    </>
  );
}
