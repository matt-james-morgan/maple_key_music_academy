import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/full-logo-shorter.png";

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 8,
        px: 2,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Maple Key Music Academy"
        sx={{ width: 220, mb: 4 }}
      />
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "3rem", md: "4.5rem" }, mb: 1 }}
      >
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 480 }}>
        Sorry, the page you're looking for doesn't exist or has been moved.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        sx={{
          bgcolor: "red.main",
          color: "cream.main",
          fontWeight: 700,
          px: 4,
          "&:hover": { bgcolor: "red.light" },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFound;
