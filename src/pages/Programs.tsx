import { Link } from "react-router-dom";
import { Box, Container, Typography, Grid } from "@mui/material";
import programs from "../data/programs";

const Programs = () => {
  return (
    <Box
      sx={{
        bgcolor: "#96B3AD",
        minHeight: "100vh",
        pt: { xs: 16, md: 20 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ color: "#26394F", textAlign: "center", mb: 2 }}
        >
          Our Programs
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "0.75rem", md: "1rem" },
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            lineHeight: 1.8,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Explore our wide range of music and performing arts programs. Click on
          any program to learn more.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {programs.map((program) => (
            <Grid key={program.slug} size={{ xs: 6, sm: 4, md: 3 }}>
              <Box
                component={Link}
                to={`/programs/${program.slug}`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  transition: "transform 0.2s",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box
                  component="img"
                  src={program.image}
                  alt={program.title}
                  sx={{
                    width: { xs: 120, md: 160 },
                    height: { xs: 120, md: 160 },
                    objectFit: "contain",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    color: "#26394F",
                    fontWeight: 700,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                  }}
                >
                  {program.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Programs;
