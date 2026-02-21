import { Box, Container, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";

const programs = [
  {
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop",
    title: "Piano",
    description: "From classical to contemporary, discover the beauty of piano with our certified instructors.",
  },
  {
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop",
    title: "Guitar",
    description: "Acoustic or electric, learn to strum your way to musical freedom with personalized instruction.",
  },
  {
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
    title: "Voice",
    description: "Develop your unique voice with techniques that build confidence and vocal strength.",
  },
  {
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=300&h=300&fit=crop",
    title: "Drums",
    description: "Master rhythm and coordination with dynamic drum lessons for all skill levels.",
  },
];

const Programs = () => {
  return (
    <Box component="section" id="programs" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFBEF" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" sx={{ fontFamily: '"Calder", Georgia, serif', fontStyle: "italic", color: "#26394F", mb: 1 }}>
            Our Programs
          </Typography>
          <Box sx={{ width: 96, height: 2, bgcolor: "#AC3F30", mx: "auto" }} />
        </Box>

        <Grid container spacing={3}>
          {programs.map((program, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: 3,
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: 8 },
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={program.image}
                  alt={program.title}
                  sx={{ aspectRatio: "1/1", objectFit: "cover", transition: "transform 0.3s", "&:hover": { transform: "scale(1.05)" } }}
                />
                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#26394F", mb: 1 }}>
                    {program.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(38,57,79,0.7)", lineHeight: 1.7 }}>
                    {program.description}
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

export default Programs;
