import { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import faqSections from "../data/faqs";

/** Adds FAQPage structured data while the page is mounted so search engines can show rich results. */
const useFaqStructuredData = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqSections.flatMap((section) =>
        section.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      ),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
};

const Faq = () => {
  useFaqStructuredData();

  return (
    <Box sx={{ bgcolor: "#96B3AD", minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" sx={{ color: "#26394F", mb: 1, fontStyle: "italic" }}>
          FAQ
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            mb: 6,
            maxWidth: 640,
            lineHeight: 1.8,
          }}
        >
          Answers to common questions about lessons, billing, instruments and our teachers.
        </Typography>

        {faqSections.map((section) => (
          <Box key={section.title} sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "#AC3F30",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                mb: 2,
              }}
            >
              {section.title}
            </Typography>
            {section.faqs.map((faq) => (
              <Accordion
                key={faq.question}
                disableGutters
                elevation={0}
                sx={{
                  bgcolor: "#FFFBEF",
                  borderRadius: "10px",
                  mb: 1.5,
                  "&:before": { display: "none" },
                  "&.MuiAccordion-rounded": { borderRadius: "10px" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#26394F" }} />}
                  sx={{ px: { xs: 2, md: 3 }, py: 0.5 }}
                >
                  <Typography component="h3" sx={{ color: "#26394F", fontWeight: 700, fontSize: "1rem" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pt: 0, pb: 2.5 }}>
                  <Typography sx={{ color: "#26394F", lineHeight: 1.8, opacity: 0.85 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography sx={{ color: "#26394F", fontWeight: 700, mb: 2 }}>
            Still have questions?
          </Typography>
          <Button
            component={Link}
            to="/#contact"
            sx={{
              bgcolor: "#AC3F30",
              color: "#FFFBEF",
              px: 4,
              py: 1.25,
              borderRadius: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              boxShadow: "none",
              "&:hover": { bgcolor: "#8e3427" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;
