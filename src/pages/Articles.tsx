import { Box, Container, Typography } from "@mui/material";

const Articles = () => {
  return (
    <Box sx={{ bgcolor: "#96B3AD", minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ color: "#26394F", mb: 1, fontStyle: "italic" }}>
          Articles
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
          Tips, guides, and insights from our teachers — coming soon.
        </Typography>
      </Container>
    </Box>
  );
};

export default Articles;
