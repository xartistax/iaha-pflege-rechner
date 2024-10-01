import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ThankYouPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-5 second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust this duration if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          flexDirection="column"
          bgcolor="#f5f5f5"
          textAlign="center"
          p={3}
        >
          <CircularProgress color="primary" size={60} />
          <Typography variant="h6" mt={2}>
            Wir berechnen Ihre Ergebnisse, bitte warten...
          </Typography>
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          flexDirection="column"
          bgcolor="#f5f5f5"
          textAlign="center"
          p={3}
        >
          <CheckCircleIcon  sx={{ fontSize: 80, color: '#01438F' }} />
          <Typography variant="h3" mt={2} fontWeight="bold">
            Vielen Dank!
          </Typography>
          <Typography variant="h6" mt={1} color="textSecondary">
            Wir schätzen Ihre Zeit sehr.
          </Typography>
          <Typography variant="body1" mt={2}>
            Ihre Antworten wurden erfasst.<br />
            Wir verarbeiten nun die Daten und melden uns in den nächsten Minuten per E-Mail
          </Typography>

          {/* Optional CTA Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4, px: 4, py: 1.5, backgroundColor:"#01438F" }}
            onClick={() => {
              window.location.href = '/'; // Redirect to home or any other page
            }}
          >
            Zur Startseite
          </Button>
        </Box>
      )}
    </>
  );
}
