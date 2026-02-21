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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navLink = (hash: string) => (isHome ? hash : `/${hash}`);

  const navSx = {
    color: "#26394F",
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    fontSize: "0.875rem",
    textDecoration: "none",
    "&:hover": { color: "#AC3F30" },
    transition: "color 0.2s",
  };

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{ bgcolor: "transparent", py: 2 }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 5 }}
            >
              <Box component="a" href={navLink("#programs")} sx={navSx}>
                Programs
              </Box>
              <Box component={Link} to="/teachers" sx={navSx}>
                Teachers
              </Box>
              <Box component="a" href={navLink("#contact")} sx={navSx}>
                Contact
              </Box>
            </Box>

            <IconButton
              onClick={toggleMenu}
              aria-label="Toggle menu"
              sx={{ display: { xs: "flex", md: "none" }, color: "#26394F" }}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>

            <Button
              component="a"
              href={navLink("#contact")}
              sx={{
                border: "2px solid #AC3F30",
                color: "#AC3F30",
                bgcolor: "#FFFBEF",
                px: 3,
                py: 1,
                borderRadius: "9999px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "0.875rem",
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#AC3F30", color: "#FFFBEF" },
                transition: "all 0.2s",
              }}
            >
              Register Now
            </Button>
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
        <Box sx={{ px: 2, py: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <IconButton onClick={toggleMenu} sx={{ color: "#FFFBEF" }} aria-label="Close menu">
            <CloseIcon sx={{ fontSize: 32 }} />
          </IconButton>
          <Button
            component="a"
            href={navLink("#contact")}
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

        <Box component="nav" sx={{ px: 3, pt: 4, display: "flex", flexDirection: "column", gap: 3 }}>
          {[
            { label: "Programs", href: navLink("#programs") },
            { label: "Teachers", href: "/teachers", isRoute: true },
            { label: "Contact", href: navLink("#contact") },
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
