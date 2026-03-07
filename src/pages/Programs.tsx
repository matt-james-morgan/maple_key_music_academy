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
            mb: 6,
            fontSize: "1.1rem",
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
                  bgcolor: "#FFFBEF",
                  borderRadius: 2,
                  p: { xs: 2.5, md: 3.5 },
                  boxShadow: 3,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  component="img"
                  src={program.image}
                  alt={program.title}
                  sx={{
                    width: { xs: 100, md: 130 },
                    height: { xs: 100, md: 130 },
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
