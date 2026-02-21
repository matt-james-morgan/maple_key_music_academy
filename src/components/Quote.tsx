import { Box, Container, Typography, Avatar } from "@mui/material";

const Quote = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: "#AC3F30" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          component="blockquote"
          sx={{
            color: "#FFFBEF",
            fontSize: { xs: "1.125rem", md: "1.25rem", lg: "1.5rem" },
            fontFamily: '"Calder", Georgia, serif',
            fontStyle: "italic",
            lineHeight: 1.8,
          }}
        >
          "I was, nearly beside myself for the support and attention to detail.
          What would it look like if the Earth was your canvas? I just have
          lessons at Maple Key Music Academy."
        </Typography>
        <Box sx={{ mt: 3, display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5 }}>
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
            alt="Sarah Thompson"
            sx={{ width: 48, height: 48 }}
          />
          <Typography sx={{ color: "#FFFBEF", fontWeight: 500 }}>
            Sarah Thompson
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Quote;
