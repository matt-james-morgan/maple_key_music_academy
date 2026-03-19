import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../assets/logo.png";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box component="footer" sx={{ bgcolor: "#26394F", py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.cream.main,
                  borderRadius: "100%",
                  width: 96,
                  height: 96,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Maple Key Music Academy"
                  sx={{
                    height: 96,
                    borderRadius: "100%",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                sx={{
                  color: "#FFFBEF",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  mb: 2,
                }}
              >
                Contact Us Directly
              </Typography>
              <Typography
                component="a"
                href="mailto:maplekeymusic.academy@gmail.com"
                sx={{
                  color: "rgba(255,251,239,0.8)",
                  mb: 1,
                  display: "block",
                  textDecoration: "none",
                  overflowWrap: "anywhere",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                maplekeymusic.academy@<wbr />gmail.com
              </Typography>
              <Typography sx={{ color: "rgba(255,251,239,0.8)" }}>
                Toronto, Ontario, Canada
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
              <Typography
                sx={{
                  color: "#FFFBEF",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  mb: 2,
                }}
              >
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  gap: 1,
                }}
              >
                <IconButton
                  href="#"
                  aria-label="Facebook"
                  sx={{ color: "#FFFBEF", "&:hover": { color: "#96B3AD" } }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="#"
                  aria-label="Instagram"
                  sx={{ color: "#FFFBEF", "&:hover": { color: "#96B3AD" } }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="#"
                  aria-label="YouTube"
                  sx={{ color: "#FFFBEF", "&:hover": { color: "#96B3AD" } }}
                >
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 5,
            pt: 4,
            borderTop: "1px solid rgba(255,251,239,0.2)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ color: "rgba(255,251,239,0.6)", fontSize: "0.875rem" }}
          >
            &copy; {new Date().getFullYear()} Maple Key Music Academy. All
            rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
