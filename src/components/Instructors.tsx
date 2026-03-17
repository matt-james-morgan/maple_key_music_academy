import { Link } from "react-router-dom";
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import teachers from "../data/teachers";
import type { Teacher } from "../data/teachers";

export const TeacherCard = ({ instructor }: { instructor: Teacher }) => (
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
        sx={{ color: "#26394F", fontVariant: "small-caps", fontStyle: "normal", mb: 0.5 }}
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
          mb: 2,
          flexGrow: 1,
        }}
      >
        {instructor.specialty}
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

const Instructors = () => {
  const featured = teachers.slice(0, 3);

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

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {featured.map((instructor) => (
            <Grid key={instructor.slug} size={{ xs: 12, sm: 6, lg: 4 }}>
              <TeacherCard instructor={instructor} />
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
