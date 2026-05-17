import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
  footer: {
    padding: '2rem',
    marginTop: '4rem',
    borderTop: `2px solid ${theme.palette.secondary.main}`,
    textAlign: 'center',
  },
}));

export default function CustomFooter() {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer>
      <Box className={classes.footer}>
        <Typography variant="body2" color="text.secondary">
          © {year} Kylee's K9. All Rights Reserved. | Bothell, WA
        </Typography>
      </Box>
    </footer>
  );
}
