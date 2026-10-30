import { Link } from "react-router-dom";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import teachers from "../data/teachers";
import logo from "../assets/full-logo-shorter.webp";
import mattHeadshot from "../assets/mattMorganHeadshot.jpg";

const bill = teachers.find((t) => t.slug === "bill-kervin");

const approach = [
  {
    title: "Taught by working musicians",
    text: "Our teachers perform across Toronto and beyond, and bring that experience into every lesson.",
  },
  {
    title: "Matched to you",
    text: "We match each student with a teacher based on their goals, style and personality.",
  },
  {
    title: "Led by the student",
    text: "Lessons follow the music each student loves, at their own pace.",
  },
  {
    title: "Try it free",
    text: "Your first 30-minute lesson is a free trial, so you can meet your teacher before you commit.",
  },
];

const founders = [
  {
    name: "Matt Morgan",
    image: mattHeadshot,
    text: "A Humber College music graduate, Matt taught at other Toronto music schools before co-founding Maple Key, and cares about building a community where musicians can afford to live, play and teach in this city.",
  },
  {
    name: "Bill Kervin",
    image: bill?.image,
    link: "/teacher-bio/bill-kervin",
    text: "A Humber College music graduate, drummer and mandolinist, Bill tours with bluegrass band Duke Street Turnaround and teaches drums, guitar and mandolin at Maple Key.",
  },
];

// A short red bar before each section heading separates it from the body text
const headingSx = {
  color: "#26394F",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontSize: { xs: "1rem", md: "1.15rem" },
  mb: 2,
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  "&::before": {
    content: '""',
    width: 24,
    height: 3,
    bgcolor: "red.light",
    borderRadius: 2,
  },
} as const;

const bodySx = {
  color: "#26394F",
  fontSize: { xs: "1rem", md: "1.1rem" },
  lineHeight: 1.8,
  mb: 2,
};

const About = () => {
  return (
    <Box
      sx={{
        bgcolor: "#96B3AD",
        minHeight: "100vh",
        pt: { xs: 16, md: 20 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Box
          component="img"
          src={logo}
          alt="Maple Key Music Academy"
          sx={{ display: "block", width: { xs: 150, md: 190 }, mx: "auto", mb: 3 }}
        />
        <Typography
          variant="h1"
          sx={{
            color: "red.light",
            textAlign: "center",
            fontSize: { xs: "3.25rem", md: "5.5rem" },
            lineHeight: 1.05,
            textWrap: "balance",
            mb: 2,
          }}
        >
          About Maple Key
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            textAlign: "center",
            mb: 3,
            fontSize: { xs: "0.75rem", md: "1rem" },
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            lineHeight: 1.8,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          A Toronto music school run by musicians, for students and the
          teachers who teach them.
        </Typography>
        <Box
          sx={{
            width: 64,
            height: 3,
            bgcolor: "red.light",
            borderRadius: 2,
            mx: "auto",
            mb: { xs: 5, md: 8 },
          }}
        />

        <Typography sx={headingSx}>Our story</Typography>
        <Typography sx={bodySx}>
          Maple Key Music Academy was founded in Toronto in 2024 by Matt Morgan
          and Bill Kervin, two Humber College music graduates. After years of
          teaching at other music schools, they set out to build one that puts
          its teachers first, and helps make Toronto a city where musicians can
          make a living doing what they love.
        </Typography>
        <Typography sx={{ ...bodySx, mb: { xs: 5, md: 8 } }}>
          The idea is simple: when teachers are treated well, good teachers
          stay. That means students learn from the same teacher year after year,
          and from working professionals who are still out playing music, so
          every lesson comes from real experience on stage and in the studio.
        </Typography>

        <Typography sx={headingSx}>How we teach</Typography>
        <Grid container spacing={3} sx={{ mb: { xs: 5, md: 8 } }}>
          {approach.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  bgcolor: "#FFFBEF",
                  borderRadius: 2,
                  p: 3,
                  height: "100%",
                }}
              >
                <Typography
                  sx={{ color: "#AC3F30", fontWeight: 700, mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ color: "#26394F", lineHeight: 1.7 }}>
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography sx={headingSx}>Our founders</Typography>
        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
          {founders.map((f) => (
            <Grid key={f.name} size={{ xs: 12, sm: 6 }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                {f.image && (
                  <Box
                    component="img"
                    src={f.image}
                    alt={f.name}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                )}
                <Box>
                  <Typography
                    sx={{ color: "#26394F", fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    {f.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#26394F",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      mb: 1,
                    }}
                  >
                    Co-founder
                  </Typography>
                  <Typography sx={{ color: "#26394F", lineHeight: 1.7 }}>
                    {f.text}
                  </Typography>
                  {f.link && (
                    <Box
                      component={Link}
                      to={f.link}
                      sx={{
                        display: "inline-block",
                        mt: 1,
                        color: "#AC3F30",
                        fontWeight: 700,
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Read {f.name.split(" ")[0]}'s full bio
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center" }}>
          <Button
            component={Link}
            to="/register"
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
            Book a free trial lesson
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
