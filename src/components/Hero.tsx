import { Box, Container, Typography, useTheme } from "@mui/material";
import logo from "../assets/full-logo-shorter.png";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        bgcolor: "#96B3AD",
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 6 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 2, md: 10, lg: 12 },
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Maple Key Music Academy"
            sx={{ width: { xs: 180, md: 320, lg: 600 } }}
          />
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontStyle: "italic",
            color: "#26394F",
            textAlign: "center",
            fontWeight: 400,
            fontSize: { xs: "1.25rem", md: "3.5rem" },
            mb: { xs: 2, md: 4 },
            mt: { xs: 2, md: 8 },
          }}
        >
          Discover the joy of music in the comfort of your own home
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.75rem", md: "1rem" },
            fontWeight: 400,
            lineHeight: 1.8,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            maxWidth: 680,
            mx: "auto",
            mb: { xs: 3, md: 4 },
            color: theme.palette.cream.main,
          }}
        >
          Founded in Toronto, Maple Key Music Academy provides quality in-home
          lessons for all ages and skill levels. our lessons are taught by
          educated, working professionals who have dedicated their lives to
          their passion for music. it's Our goal to nurture that same passion in
          our students. We strive to make the journey of learning fun and
          engaging for all. Let us help you find the right teacher for your
          learning goals today!
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
