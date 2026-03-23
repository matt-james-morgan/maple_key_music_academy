import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  Container,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isHome = location.pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLink = (hash: string) => (isHome ? hash : `/${hash}`);

  const navSx = {
    color: "#26394F",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    fontSize: "1rem",
    textDecoration: "none",
    "&:hover": { color: "#AC3F30" },
    transition: "color 0.2s",
  };

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{ bgcolor: "transparent", py: 1.5 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 5,
              }}
            >
              <Box component={Link} to="/" sx={navSx}>
                Home
              </Box>
              <Box component={Link} to="/programs" sx={navSx}>
                Programs
              </Box>
              <Box component={Link} to="/teachers" sx={navSx}>
                Teachers
              </Box>
              <Box component="a" href={navLink("#contact")} sx={navSx}>
                Contact
              </Box>
              <Box component={Link} to="/resources" sx={navSx}>
                Resources
              </Box>
              <Box component={Link} to="/pre-register" sx={navSx}>
                Pre-Register
              </Box>
            </Box>

            <IconButton
              onClick={toggleMenu}
              aria-label="Toggle menu"
              sx={{ display: { xs: "flex", md: "none" }, color: "#26394F" }}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>

            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <Button
                component={Link}
                to="/refer"
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  border: "2px solid #FFFBEF",
                  color: "#FFFBEF",
                  bgcolor: "transparent",
                  px: 3,
                  py: 1,
                  borderRadius: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#FFFBEF", color: theme.palette.red.main },
                  transition: "all 0.2s",
                }}
              >
                Refer a Friend
              </Button>
              <Button
                component={Link}
                to="/register"
                sx={{
                  bgcolor: "#FFFBEF",
                  color: theme.palette.red.main,
                  px: { xs: 2, md: 3 },
                  py: 1,
                  borderRadius: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: { xs: "0.75rem", md: "1rem" },
                  whiteSpace: "nowrap",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#f5f0e0" },
                  transition: "all 0.2s",
                }}
              >
                <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>Register Now</Box>
                <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>Register</Box>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="top"
        open={isMenuOpen}
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            bgcolor: "#26394F",
            height: "100vh",
          },
        }}
        sx={{ display: { md: "none" } }}
      >
        <Box
          sx={{
            px: 2,
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={toggleMenu}
            sx={{ color: "#FFFBEF" }}
            aria-label="Close menu"
          >
            <CloseIcon sx={{ fontSize: 32 }} />
          </IconButton>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              component={Link}
              to="/refer"
              onClick={toggleMenu}
              sx={{
                border: "1px solid #FFFBEF",
                color: "#FFFBEF",
                px: 2.5,
                py: 1,
                borderRadius: 1,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontSize: "0.875rem",
                "&:hover": { bgcolor: "#FFFBEF", color: "#26394F" },
              }}
            >
              Refer
            </Button>
            <Button
              component={Link}
              to="/register"
              onClick={toggleMenu}
              sx={{
                border: "1px solid #FFFBEF",
                color: "#FFFBEF",
                px: 2.5,
                py: 1,
                borderRadius: 1,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontSize: "0.875rem",
                "&:hover": { bgcolor: "#FFFBEF", color: "#26394F" },
              }}
            >
              Register Now
            </Button>
          </Box>
        </Box>

        <Box
          component="nav"
          sx={{
            px: 3,
            pt: 4,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {[
            { label: "Home", href: "/", isRoute: true },
            { label: "Programs", href: "/programs", isRoute: true },
            { label: "Teachers", href: "/teachers", isRoute: true },
            { label: "Contact", href: navLink("#contact") },
            { label: "Resources", href: "/resources", isRoute: true },
            { label: "Pre-Register", href: "/pre-register", isRoute: true },
          ].map((item) => (
            <Box
              key={item.label}
              component={item.isRoute ? Link : "a"}
              {...(item.isRoute ? { to: item.href } : { href: item.href })}
              onClick={toggleMenu}
              sx={{
                color: "#FFFBEF",
                fontWeight: 700,
                fontSize: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textDecoration: "none",
                display: "block",
                "&:hover": { color: "#96B3AD" },
                transition: "color 0.2s",
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
