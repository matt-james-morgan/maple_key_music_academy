import { Link } from "react-router-dom";
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import teachers from "../data/teachers";

const Instructors = () => {
  return (
    <Box component="section" id="instructors" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#96B3AD" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#26394F",
              mb: 3,
              fontVariant: "small-caps",
              fontStyle: "normal",
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

        <Grid container spacing={{ xs: 5, sm: 3 }}>
          {teachers.map((instructor) => (
            <Grid key={instructor.slug} size={{ xs: 12, sm: 6, lg: 4 }}>
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
                <CardContent sx={{ bgcolor: "#FFFBEF", px: 2.5, pt: 2, pb: 2.5 }}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Instructors;
