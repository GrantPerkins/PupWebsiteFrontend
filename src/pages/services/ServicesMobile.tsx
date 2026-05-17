import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomToolbar from '../CustomToolbar';
import CustomFooter from '../CustomFooter';
import servicesContent from '../../assets/json/services_content.json';

const useStyles = makeStyles((theme: any) => ({
  pageTitle: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '800 !important',
    marginTop: '2rem !important',
    marginBottom: '1.5rem !important',
    fontSize: '1.8rem !important',
  },
  serviceCard: {
    border: `2px solid ${theme.palette.secondary.main} !important`,
    borderRadius: '8px !important',
    marginBottom: '1.5rem',
  },
  serviceCardContent: {
    padding: '1.5rem !important',
  },
  serviceName: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    marginBottom: '1rem !important',
    fontSize: '1.1rem !important',
  },
  serviceParagraph: {
    marginBottom: '0.75rem !important',
    lineHeight: '1.7 !important',
    color: '#444444 !important',
  },
}));

export default function ServicesMobile() {
  const classes = useStyles();
  const { heading, services } = servicesContent;

  return (
    <>
      <CustomToolbar isMobile={true} />
      <Container maxWidth="sm">
        <Typography variant="h4" className={classes.pageTitle}>
          {heading}
        </Typography>
        <Box sx={{ mb: 4 }}>
          {services.map((service) => (
            <Card key={service.name} className={classes.serviceCard} elevation={0}>
              <CardContent className={classes.serviceCardContent}>
                <Typography variant="h6" className={classes.serviceName}>
                  {service.name}
                </Typography>
                {service.paragraphs.map((p, i) => (
                  <Typography key={i} variant="body2" className={classes.serviceParagraph}>
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
