import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const refId = searchParams.get("refId");

  useEffect(() => {
    if (refId) {
      const onReady = () => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      if (document.readyState === "complete") {
        onReady();
      } else {
        window.addEventListener("load", onReady);
        return () => window.removeEventListener("load", onReady);
      }
    }
  }, [refId]);

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "#96B3AD" }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: "#26394F", mb: 4 }}>
          Register
        </Typography>
        <ContactForm messagePlaceholder="Insert your message!" />
      </Container>
    </Box>
  );
};

export default Contact;
