import { Box, Container, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Register = () => {
  return (
    <Box
      sx={{
        bgcolor: "#96B3AD",
        minHeight: "100vh",
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ color: "#26394F", mb: 1, fontStyle: "italic" }}
        >
          Register
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            mb: 1,
            lineHeight: 1.8,
          }}
        >
          Fill out the form below and we'll be in touch to get you started.
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            fontSize: "0.7rem",
            letterSpacing: "0.06em",
            opacity: 0.85,
            mb: 4,
            lineHeight: 1.6,
            textTransform: "none",
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Required:
          </Box>{" "}
          name and email.{" "}
          <Box
            component="span"
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Optional:
          </Box>{" "}
          phone and instrument — adding them helps us respond faster.
        </Typography>

        <ContactForm messagePlaceholder="Tell us about yourself! Please include the instrument or teacher you're interested in." />
      </Container>
    </Box>
  );
};

export default Register;
