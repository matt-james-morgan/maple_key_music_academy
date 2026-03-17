import { Box, Container, Typography, useTheme } from "@mui/material";
import logo from "../assets/logo.png";

const Quote = () => {
  const theme = useTheme();
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography
          component="h2"
          sx={{
            color: theme.palette.red.main,
            fontSize: { xs: "1.3rem", md: "2.4rem" },
            fontFamily: 'chippewa-falls, sans-serif',
            fontStyle: "italic",
            lineHeight: 1.6,
            fontWeight: 400,
            mb: { xs: 4, md: 4 },
          }}
        >
          "I was, nearly beside myself for the support and attention to detail.
          What would it look like if the Earth was your canvas? I just have
          lessons at Maple Key Music Academy."
        </Typography>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Maple Key Music Academy"
            sx={{
              height: { xs: 56, md: 96 },
              borderRadius: "100%",
            }}
          />
          <Typography sx={{ color: theme.palette.red.main, fontWeight: 500 }}>
            Sarah Thompson
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Quote;
