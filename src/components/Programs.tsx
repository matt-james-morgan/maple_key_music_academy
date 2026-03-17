import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import programs from "../data/programs";

const Programs = () => {
  const items = [...programs, ...programs];

  return (
    <Box
      component="section"
      id="programs"
      sx={{
        bgcolor: "#96B3AD",
        overflow: "hidden",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 10, lg: 8 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontStyle: "italic",
          color: "#26394F",
          textAlign: "center",
          fontWeight: 400,
          fontSize: { xs: "2rem", md: "2.4rem" },
          mb: { xs: 4, md: 4 },
        }}
      >
        Our Programs
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          animation: "marquee 50s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: `translateX(-50%)` },
          },
        }}
      >
        {items.map((program, i) => (
          <Box
            key={i}
            component={Link}
            to={`/programs/${program.slug}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mx: { xs: 3, md: 5 },
              flexShrink: 0,
              textDecoration: "none",
              cursor: "pointer",
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
                mb: 1.5,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.08)" },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Programs;
