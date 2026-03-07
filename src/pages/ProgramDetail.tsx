import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Link,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import programs from "../data/programs";
import teachers from "../data/teachers";

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#96B3AD",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 12,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: "#26394F", mb: 2 }}>
            Program Not Found
          </Typography>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              color: "#26394F",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "0.875rem",
            }}
          >
            Back to Home
          </Link>
        </Box>
      </Box>
    );
  }

  const relatedTeachers = teachers.filter((t) =>
    t.specialty.toLowerCase().includes(program.title.toLowerCase()),
  );

  return (
    <Box sx={{ bgcolor: "#96B3AD" }}>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, lg: 8 }} alignItems="center">
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={program.image}
                  alt={program.title}
                  sx={{
                    width: { xs: 180, md: 240 },
                    height: { xs: 180, md: 240 },
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 7 }}>
              <Typography
                variant="h3"
                sx={{ color: "#26394F", mb: 3 }}
              >
                {program.title} Lessons
              </Typography>

              <Typography
                sx={{
                  color: "#26394F",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                {program.description}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}>
                {program.highlights.map((item) => (
                  <Box key={item} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleOutlineIcon sx={{ color: "#AC3F30", fontSize: 22 }} />
                    <Typography
                      sx={{
                        color: "#26394F",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                component="a"
                href="/#contact"
                sx={{
                  bgcolor: "#AC3F30",
                  color: "#FFFBEF",
                  px: 4,
                  py: 1.5,
                  borderRadius: 1,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.875rem",
                  "&:hover": { bgcolor: "#8e3427" },
                }}
              >
                Register for {program.title}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Related Teachers */}
      {relatedTeachers.length > 0 && (
        <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              sx={{
                color: "#26394F",
                mb: 4,
                textAlign: "center",
              }}
            >
              Meet Your {program.title} Instructors
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {relatedTeachers.map((teacher) => (
                <Grid key={teacher.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    component={RouterLink}
                    to={`/teacher-bio/${teacher.slug}`}
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      bgcolor: "#FFFBEF",
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: 3,
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={teacher.image}
                      alt={teacher.name}
                      sx={{
                        width: "100%",
                        aspectRatio: "1/1",
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ p: 2.5 }}>
                      <Typography
                        sx={{
                          color: "#26394F",
                          fontWeight: 700,
                          fontSize: "1rem",
                          mb: 0.5,
                        }}
                      >
                        {teacher.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#AC3F30",
                          fontSize: "0.8rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {teacher.specialty}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default ProgramDetail;
