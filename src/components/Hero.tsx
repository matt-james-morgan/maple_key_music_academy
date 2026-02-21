import { Box, Container } from "@mui/material";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        bgcolor: "#96B3AD",
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Box
            component="img"
            src={logo}
            alt="Maple Key Music Academy"
            sx={{ width: { xs: 256, md: 320, lg: 384 } }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
