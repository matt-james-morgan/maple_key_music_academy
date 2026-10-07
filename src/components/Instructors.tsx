import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import teachers from "../data/teachers";
import type { Teacher } from "../data/teachers";

export const TeacherCard = ({
  instructor,
  specialtyLines,
}: {
  instructor: Teacher;
  /** Reserve this many lines for the specialty so swapped-in cards keep the same height */
  specialtyLines?: number;
}) => (
  <Card
    component={Link}
    to={`/teacher-bio/${instructor.slug}`}
    sx={{
      textDecoration: "none",
      borderRadius: 4,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      "&:hover .teacher-img": { transform: "scale(1.05)" },
      "&:hover .learn-more": { color: "#AC3F30" },
    }}
  >
    <Box sx={{ overflow: "hidden" }}>
      <CardMedia
        component="img"
        image={instructor.image}
        alt={instructor.name}
        className="teacher-img"
        sx={{ aspectRatio: "1/1", objectFit: "cover", transition: "transform 0.3s" }}
      />
    </Box>
    <CardContent sx={{ bgcolor: "#FFFBEF", px: 2.5, pt: 2, pb: 2.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        sx={{ color: "#26394F", fontStyle: "normal", mb: 0.5 }}
      >
        {instructor.name}
      </Typography>
      <Typography
        sx={{
          color: "#AC3F30",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontSize: "0.75rem",
          fontWeight: 600,
          lineHeight: 1.6,
          mb: 2,
          flexGrow: 1,
          ...(specialtyLines && { minHeight: `${specialtyLines * 1.6}em` }),
        }}
      >
        {instructor.specialty}
      </Typography>
      <Typography
        sx={{
          color: "#26394F",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          fontSize: "0.7rem",
          mb: 1.5,
          opacity: 0.7,
        }}
      >
        {instructor.location}
      </Typography>
      <Typography
        className="learn-more"
        sx={{
          color: "#26394F",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontSize: "0.75rem",
          fontWeight: 600,
          transition: "color 0.2s",
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        Learn more about {instructor.firstName} →
      </Typography>
    </CardContent>
  </Card>
);

const SLOTS = 3;
const ROTATE_MS = 4500;
const FADE_MS = 1000;

const randomInt = (n: number) => Math.floor(Math.random() * n);

const Instructors = () => {
  // Indices into `teachers` for each visible card
  const [shown, setShown] = useState(() => Array.from({ length: SLOTS }, (_, i) => i));
  const [fadingSlot, setFadingSlot] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  // Preload headshots so rotated-in cards don't pop in mid-fade
  useEffect(() => {
    teachers.forEach((t) => {
      new Image().src = t.image;
    });
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lastSlot = -1;
    let swap: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      // Random slot, never the same one twice in a row
      let slot = randomInt(SLOTS - 1);
      if (slot >= lastSlot && lastSlot !== -1) slot += 1;
      lastSlot = slot;
      setFadingSlot(slot);
      swap = setTimeout(() => {
        setShown((prev) => {
          const candidates = teachers.map((_, i) => i).filter((i) => !prev.includes(i));
          if (candidates.length === 0) return prev;
          const next = [...prev];
          next[slot] = candidates[randomInt(candidates.length)];
          return next;
        });
        setFadingSlot(null);
      }, FADE_MS);
    }, ROTATE_MS);
    return () => {
      clearInterval(interval);
      clearTimeout(swap);
      setFadingSlot(null);
    };
  }, [paused]);

  return (
    <Box component="section" id="instructors" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#96B3AD" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#26394F",
              mb: 3,
            }}
          >
            Meet Our Teachers
          </Typography>
          <Typography
            sx={{
              maxWidth: 720,
              mx: "auto",
              color: "#26394F",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              lineHeight: 1.8,
              fontWeight: 500,
            }}
          >
            Our dedicated team of professional musicians and certified
            instructors are passionate about sharing their love of music with
            students of all ages. Find your new mentor, cheerleader, and friend
            below!
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {shown.map((teacherIndex, slot) => (
            <Grid
              key={slot}
              size={{ xs: 12, sm: 6, lg: 4 }}
              sx={{
                opacity: fadingSlot === slot ? 0 : 1,
                transition: `opacity ${FADE_MS}ms ease-in-out`,
              }}
            >
              <TeacherCard instructor={teachers[teacherIndex]} specialtyLines={3} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            component={Link}
            to="/teachers"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: "#AC3F30",
              color: "#FFFBEF",
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "0.875rem",
              "&:hover": { bgcolor: "#8e3427" },
            }}
          >
            See All Teachers
          </Button>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            mt: 4,
            color: "#26394F",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontSize: { xs: "0.7rem", md: "0.8rem" },
            fontWeight: 500,
            lineHeight: 1.8,
          }}
        >
          Are you a trained musician interested in teaching with us?
          <br />
          We'd love to hear from you - get in touch!
        </Typography>
      </Container>
    </Box>
  );
};

export default Instructors;
