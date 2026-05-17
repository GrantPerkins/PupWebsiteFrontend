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
    marginTop: '2rem !important',
    marginBottom: '1.5rem !important',
    fontSize: '1.8rem !important',
  },
  sectionHeading: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    marginTop: '2rem !important',
    marginBottom: '1rem !important',
    fontSize: '1.3rem !important',
  },
  dogName: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '700 !important',
    marginBottom: '0.5rem !important',
  },
  paragraph: {
    marginBottom: '1rem !important',
    lineHeight: '1.7 !important',
  },
  dogCard: {
    marginBottom: '1rem',
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
    padding: '1rem',
  },
  catsPhoto: {
    width: '100%',
    maxHeight: 300,
    objectFit: 'cover',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    marginBottom: '1rem',
    display: 'block',
  },
  divider: {
    margin: '1.5rem 0 !important',
    borderColor: `${theme.palette.secondary.main} !important`,
  },
}));

export default function AboutMobile() {
  const classes = useStyles();
  const { about, dogs, cats, philosophy } = aboutContent;

  return (
    <>
      <CustomToolbar isMobile={true} />
      <Container maxWidth="sm">
        <Typography variant="h4" className={classes.pageTitle}>
          {about.heading}
        </Typography>

        <Typography variant="h5" className={classes.sectionHeading}>
          {dogs.heading}
        </Typography>
        {dogs.list.map((dog) => (
          <Box key={dog.name} className={classes.dogCard}>
            <img src={dogPhotos[dog.name]} alt={dog.name} className={classes.dogPhoto} />
            <Box className={classes.dogCardBody}>
              <Typography className={classes.dogName} variant="h6">{dog.name}</Typography>
              <Typography variant="body2" className={classes.paragraph}>
                {dog.description}
              </Typography>
            </Box>
          </Box>
        ))}
        <Typography variant="body2" className={classes.paragraph} sx={{ fontStyle: 'italic' }}>
          {dogs.closing}
        </Typography>

        <Divider className={classes.divider} />

        <Typography variant="h5" className={classes.sectionHeading}>
          {cats.heading}
        </Typography>
        <img src={catsImg} alt="Teddi and Eevee" className={classes.catsPhoto} />
        {cats.paragraphs.map((p, i) => (
          <Typography key={i} variant="body1" className={classes.paragraph}>
            {p}
          </Typography>
        ))}

        <Divider className={classes.divider} />

        <Typography variant="h5" className={classes.sectionHeading}>
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
