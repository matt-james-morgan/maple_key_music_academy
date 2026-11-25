import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  Drawer,
  Container,
  ListSubheader,
  Menu,
  MenuItem,
  useTheme,
  useScrollTrigger,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface NavItem {
  label: string;
  /** In-app route, or a "#hash" on the home page */
  to: string;
  external?: boolean;
}

interface NavGroup {
  heading: string;
  items: NavItem[];
}

// Desktop top bar and the start of the mobile menu
const primaryLinks: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Teachers", to: "/teachers" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "#contact" },
];

// Desktop "More" menu and the grouped part of the mobile menu
const moreGroups: NavGroup[] = [
  {
    heading: "About Us",
    items: [
      { label: "About", to: "/about" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
  {
    heading: "Students & Families",
    items: [
      { label: "Pre-Register", to: "/pre-register" },
      { label: "Cancellation Policy", to: "/cancellation-policy" },
      { label: "Books & Resources", to: "/resources" },
      { label: "Articles", to: "/articles" },
    ],
  },
  {
    heading: "For Teachers",
    items: [
      { label: "Apply to Teach", to: "/apply" },
      { label: "Teacher Login", to: "https://maplekeymusic.com/login", external: true },
    ],
  },
];

const drawerLinkSx = {
  color: "#FFFBEF",
  fontWeight: 700,
  fontSize: "1.25rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  textDecoration: "none",
  display: "block",
  py: 1.25,
  "&:hover": { color: "#96B3AD" },
  transition: "color 0.2s",
} as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [moreAnchor, setMoreAnchor] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const theme = useTheme();
  const isHome = location.pathname === "/";
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 80 });

  const handleMoreOpen = (e: React.MouseEvent<HTMLElement>) =>
    setMoreAnchor(e.currentTarget);
  const handleMoreClose = () => setMoreAnchor(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // Hash links scroll on the home page; elsewhere they navigate home first
  const linkProps = (item: NavItem) => {
    if (item.external) return { component: "a" as const, href: item.to };
    if (item.to.startsWith("#")) return { component: "a" as const, href: isHome ? item.to : `/${item.to}` };
    return { component: Link, to: item.to };
  };

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
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? "#96B3AD" : "transparent",
          py: 1.5,
          transition: "background-color 0.3s",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                gap: { lg: 3, xl: 5 },
              }}
            >
              {primaryLinks.map((item) => (
                <Box key={item.label} {...linkProps(item)} sx={navSx}>
                  {item.label}
                </Box>
              ))}

              <ButtonBase
                id="more-menu-button"
                disableRipple
                onClick={handleMoreOpen}
                aria-haspopup="true"
                aria-controls={moreAnchor ? "more-menu" : undefined}
                aria-expanded={moreAnchor ? "true" : undefined}
                sx={{
                  ...navSx,
                  fontFamily: "inherit",
                  gap: 0.25,
                  "&.Mui-focusVisible": { outline: "2px solid #26394F", outlineOffset: 4, borderRadius: 1 },
                }}
              >
                More
                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: "1.1rem",
                    transition: "transform 0.2s",
                    transform: moreAnchor ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </ButtonBase>
              <Menu
                id="more-menu"
                anchorEl={moreAnchor}
                open={Boolean(moreAnchor)}
                onClose={handleMoreClose}
                disableScrollLock
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      mt: 1,
                      borderRadius: "10px",
                      bgcolor: "#FFFBEF",
                      minWidth: 220,
                      border: "1px solid #e8e0cc",
                    },
                  },
                  list: { "aria-labelledby": "more-menu-button", sx: { py: 0.5 } },
                }}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              >
                {moreGroups.flatMap((group, i) => [
                  <ListSubheader
                    key={group.heading}
                    sx={{
                      bgcolor: "transparent",
                      color: "#AC3F30",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      lineHeight: 1,
                      pt: 2,
                      pb: 0.75,
                      position: "static",
                      ...(i > 0 && { borderTop: "1px solid #e8e0cc", mt: 0.5 }),
                    }}
                  >
                    {group.heading}
                  </ListSubheader>,
                  ...group.items.map((item) => (
                    <MenuItem
                      key={item.label}
                      {...linkProps(item)}
                      onClick={handleMoreClose}
                      sx={{
                        color: "#26394F",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        fontSize: "0.875rem",
                        py: 1.25,
                        "&:hover": { color: "#AC3F30", bgcolor: "transparent" },
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  )),
                ])}
              </Menu>
            </Box>

            <IconButton
              onClick={toggleMenu}
              aria-label="Toggle menu"
              sx={{ display: { xs: "flex", lg: "none" }, color: "#26394F", width: 48, height: 48, ml: -1 }}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>

            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <Button
                component={Link}
                to="/refer"
                sx={{
                  display: { xs: "none", lg: "inline-flex" },
                  border: `2px solid ${scrolled ? "#26394F" : "#FFFBEF"}`,
                  color: scrolled ? "#26394F" : "#FFFBEF",
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
                  minHeight: 44,
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
            // 100dvh = the visible area on iPhone; 100vh runs under the browser toolbar
            height: "100vh",
            "@supports (height: 100dvh)": { height: "100dvh" },
            overflowY: "auto",
            pb: "calc(24px + env(safe-area-inset-bottom))",
          },
        }}
        sx={{ display: { lg: "none" } }}
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
            sx={{ color: "#FFFBEF", width: 48, height: 48, ml: -1 }}
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
                px: 2,
                minHeight: 44,
                borderRadius: 1,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontSize: "0.875rem",
                whiteSpace: "nowrap",
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
                px: 2,
                minHeight: 44,
                borderRadius: 1,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontSize: "0.875rem",
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#FFFBEF", color: "#26394F" },
              }}
            >
              Register Now
            </Button>
          </Box>
        </Box>

        <Box
          component="nav"
          aria-label="Main"
          sx={{
            px: 3,
            pt: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {primaryLinks.map((item) => (
            <Box key={item.label} {...linkProps(item)} onClick={toggleMenu} sx={drawerLinkSx}>
              {item.label}
            </Box>
          ))}
          {moreGroups.map((group) => (
            <Box key={group.heading} sx={{ mt: 3 }}>
              <Box
                component="h2"
                sx={{
                  m: 0,
                  mb: 0.5,
                  color: "#96B3AD",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                {group.heading}
              </Box>
              {group.items.map((item) => (
                <Box key={item.label} {...linkProps(item)} onClick={toggleMenu} sx={drawerLinkSx}>
                  {item.label}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
