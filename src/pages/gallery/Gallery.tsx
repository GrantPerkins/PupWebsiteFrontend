import { useState } from 'react';
import {
  Box, Typography, Container, Dialog, DialogContent,
  IconButton, CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import CustomToolbar from '../CustomToolbar';
import CustomFooter from '../CustomFooter';

interface GalleryProps {
  isMobile: boolean;
}

const thumbnailModules = import.meta.glob(
  '../../assets/gallery/*.jpg',
  { eager: true }
) as Record<string, { default: string }>;

const galleryPhotos = Object.entries(thumbnailModules).map(([path, mod]) => {
  const filename = path.split('/').pop()!;
  return {
    thumbnailUrl: mod.default,
    lightboxUrl: `/photos/${encodeURIComponent(filename)}`,
    filename,
  };
}).sort((a, b) => a.filename.localeCompare(b.filename));

const useStyles = makeStyles((theme: any) => ({
  pageTitle: {
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '800 !important',
    marginTop: '2.5rem !important',
    marginBottom: '0.5rem !important',
    fontSize: '2.5rem !important',
  },
  pageSubtitle: {
    marginBottom: '2.5rem !important',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginBottom: '4rem',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  thumbnailWrapper: {
    overflow: 'hidden',
    cursor: 'pointer',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    transition: 'all 0.25s ease',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      transform: 'scale(1.02)',
      boxShadow: '0 4px 16px rgba(212, 88, 154, 0.2)',
    },
  },
  thumbnail: {
    width: '100%',
    height: 220,
    objectFit: 'cover',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      height: 260,
    },
  },
  closeButton: {
    position: 'absolute !important' as any,
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.5) !important',
    color: '#ffffff !important',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.75) !important',
    },
  },
  dialogContent: {
    padding: '0 !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    position: 'relative',
    backgroundColor: '#000000',
  },
  lightboxImage: {
    maxWidth: '100%',
    maxHeight: '90vh',
    objectFit: 'contain',
    display: 'block',
  },
}));

export default function Gallery({ isMobile }: GalleryProps) {
  const classes = useStyles();
  const [selectedPhoto, setSelectedPhoto] = useState<typeof galleryPhotos[number] | null>(null);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

  const openLightbox = (photo: typeof galleryPhotos[number]) => {
    setLightboxLoaded(false);
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    setLightboxLoaded(false);
  };

  return (
    <>
      <CustomToolbar isMobile={isMobile} />
      <Container maxWidth="lg">
        <Typography variant={isMobile ? 'h4' : 'h3'} className={classes.pageTitle}>
          Gallery
        </Typography>
        <Typography variant="body1" className={classes.pageSubtitle} color="text.secondary">
          Click any photo to view full size.
        </Typography>

        <Box className={classes.grid}>
          {galleryPhotos.map((photo) => (
            <Box
              key={photo.filename}
              className={classes.thumbnailWrapper}
              onClick={() => openLightbox(photo)}
            >
              <img
                src={photo.thumbnailUrl}
                alt=""
                className={classes.thumbnail}
                loading="lazy"
              />
            </Box>
          ))}
        </Box>
      </Container>

      <Dialog
        open={!!selectedPhoto}
        onClose={closeLightbox}
        maxWidth="xl"
        fullWidth
        PaperProps={{ sx: { backgroundColor: '#000000', m: 1 } }}
      >
        <DialogContent className={classes.dialogContent}>
          <IconButton className={classes.closeButton} onClick={closeLightbox} aria-label="close">
            <CloseIcon />
          </IconButton>
          {!lightboxLoaded && <CircularProgress sx={{ color: '#ffffff' }} />}
          {selectedPhoto && (
            <img
              src={selectedPhoto.lightboxUrl}
              alt=""
              className={classes.lightboxImage}
              onLoad={() => setLightboxLoaded(true)}
              style={{ display: lightboxLoaded ? 'block' : 'none' }}
            />
          )}
        </DialogContent>
      </Dialog>

      <CustomFooter />
    </>
  );
}
