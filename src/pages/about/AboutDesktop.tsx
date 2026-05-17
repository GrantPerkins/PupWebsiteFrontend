import { Box, Typography, Container, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CustomToolbar from '../CustomToolbar';
import CustomFooter from '../CustomFooter';
import aboutContent from '../../assets/json/about_content.json';
import remiImg from '../../assets/remi.jpg';
import sydneyImg from '../../assets/sydney.jpg';
import catsImg from '../../assets/cats.jpg';

const dogPhotos: Record<string, string> = { Remi: remiImg, Sydney: sydneyImg };

const useStyles = makeStyles((theme: any) => ({
  pageTitle: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '800 !important',
    marginTop: '2.5rem !important',
    marginBottom: '1.5rem !important',
    fontSize: '2.5rem !important',
  },
  sectionHeading: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    marginTop: '2.5rem !important',
    marginBottom: '1rem !important',
    fontSize: '1.6rem !important',
  },
  dogName: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    marginBottom: '0.75rem !important',
    fontSize: '1.2rem !important',
  },
  paragraph: {
    marginBottom: '1rem !important',
    lineHeight: '1.75 !important',
    fontSize: '1.05rem !important',
  },
  dogSection: {
    display: 'flex',
    gap: '2rem',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  dogCard: {
    flex: 1,
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    overflow: 'hidden',
  },
  dogPhoto: {
    width: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'cover',
    display: 'block',
  },
  dogCardBody: {
    padding: '1.25rem',
  },
  catsPhoto: {
    width: '100%',
    maxHeight: 380,
    objectFit: 'cover',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    marginBottom: '1.25rem',
    display: 'block',
  },
  divider: {
    margin: '2rem 0 !important',
    borderColor: `${theme.palette.secondary.main} !important`,
  },
}));

export default function AboutDesktop() {
  const classes = useStyles();
  const { about, dogs, cats, philosophy } = aboutContent;

  return (
    <>
      <CustomToolbar isMobile={false} />
      <Container maxWidth="md">
        <Typography variant="h3" className={classes.pageTitle}>
          {about.heading}
        </Typography>

        <Typography variant="h4" className={classes.sectionHeading}>
          {dogs.heading}
        </Typography>
        <Box className={classes.dogSection}>
          {dogs.list.map((dog) => (
            <Box key={dog.name} className={classes.dogCard}>
              <img src={dogPhotos[dog.name]} alt={dog.name} className={classes.dogPhoto} />
              <Box className={classes.dogCardBody}>
                <Typography className={classes.dogName}>{dog.name}</Typography>
                <Typography variant="body1" className={classes.paragraph}>
                  {dog.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Typography variant="body1" className={classes.paragraph} sx={{ fontStyle: 'italic' }}>
          {dogs.closing}
        </Typography>

        <Divider className={classes.divider} />

        <Typography variant="h4" className={classes.sectionHeading}>
          {cats.heading}
        </Typography>
        <img src={catsImg} alt="Teddi and Eevee" className={classes.catsPhoto} />
        {cats.paragraphs.map((p, i) => (
          <Typography key={i} variant="body1" className={classes.paragraph}>
            {p}
          </Typography>
        ))}

        <Divider className={classes.divider} />

        <Typography variant="h4" className={classes.sectionHeading}>
          {philosophy.heading}
        </Typography>
        {philosophy.paragraphs.map((p, i) => (
          <Typography key={i} variant="body1" className={classes.paragraph}>
            {p}
          </Typography>
        ))}
      </Container>
      <CustomFooter />
    </>
  );
}
