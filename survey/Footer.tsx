"use client"
import { Box, Container, Link, Typography } from "@mui/material";
import theme from "../theme";

export default function Footer () {
    return (<>
    

    <Box
              component="footer"
              sx={{
                py: 2,
                mt: 4,
                backgroundColor: theme.palette.grey[100], // Light grey background
                borderTop: `1px solid ${theme.palette.divider}`,
                borderColor: theme.palette.grey[100]

              }}
            >
              <Container maxWidth="lg">
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    © 2024 <Link href="https://www.iaha.ch/" target="_blank"> IAHA - International Association for Healthy Aging </Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Powered by <Link href="https://bexolutions.ch/" target="_blank"> Bexolutions Marketing und Vertrieb AG </Link>
                  </Typography>
                </Box>
              </Container>
            </Box>


    </>)
}