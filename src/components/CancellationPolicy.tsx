import { Box, Button, Container, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const policy = [
  "Each student can cancel up to 3 lessons per semester with at least 24 hours' notice. Those lessons are not charged; their cost stays on your account as credit and comes off your next invoice automatically.",
  "Statutory holidays, school breaks, and time away that you tell us about before the invoice goes out do not count toward the 3.",
  "Cancellations with less than 24 hours' notice, and missed lessons, are charged.",
];

const CancellationPolicy = () => (
  <Box sx={{ bgcolor: "#96B3AD", minHeight: "100svh", pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" sx={{ color: "#26394F", mb: 1, fontStyle: "italic" }}>
        Cancellation Policy
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
        How cancelled and missed lessons are handled on your invoice.
      </Typography>

      <Box sx={{ bgcolor: "#FFFBEF", borderRadius: "10px", px: { xs: 2, md: 4 }, py: { xs: 2, md: 3 } }}>
        <List sx={{ listStyleType: "disc", pl: 2.5, py: 0 }}>
          {policy.map((item) => (
            <ListItem key={item} sx={{ display: "list-item", px: 0, py: 1, color: "#26394F" }}>
              <Typography sx={{ color: "#26394F", lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.05rem" } }}>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Typography sx={{ color: "#26394F", lineHeight: 1.8, mt: 4 }}>
        Questions about credits, refunds or payments? See our{" "}
        <Box component={Link} to="/faq" sx={{ color: "#AC3F30", fontWeight: 700 }}>
          FAQ
        </Box>
        .
      </Typography>

      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography sx={{ color: "#26394F", fontWeight: 700, mb: 2 }}>Need to cancel a lesson?</Typography>
        <Button
          component={Link}
          to="/#contact"
          sx={{
            bgcolor: "#AC3F30",
            color: "#FFFBEF",
            px: 4,
            py: 1.25,
            minHeight: 44,
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

export default CancellationPolicy;
