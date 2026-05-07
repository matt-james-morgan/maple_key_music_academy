import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const testimonials = [
  {
    quote: "In just one year, our daughter went from a complete beginner to confidently playing both acoustic and electric guitar. The teaching style builds confidence and keeps lessons fun — she genuinely looks forward to every session. Highly, highly recommend.",
    name: "Lauren",
    role: "Parent of Guitar Student",
  },
  {
    quote: "My daughter went from nervous to confident. The teachers here really know how to bring out the best in kids.",
    name: "Jennifer",
    role: "Parent",
  },
  {
    quote: "I've taken voice lessons elsewhere and this is the first place that made me feel like I could actually sing. Grateful to have found them.",
    name: "David",
    role: "Vocal Student",
  },
];

const Testimonials = () => {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#96B3AD" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" sx={{ color: "#26394F", mb: 1 }}>
            Testimonials
          </Typography>
          <Typography
            sx={{
              color: "#26394F",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            Here's what our students are saying
          </Typography>
        </Box>

        <Grid container spacing={3} alignItems="flex-start">
          {testimonials.map((t, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  bgcolor: "#FFFBEF",
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  border: 2,
                  borderColor: i % 2 === 0 ? "#AC3F30" : "#26394F",
                }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                  <Typography
                    sx={{
                      color: "#26394F",
                      fontSize: "0.875rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      lineHeight: 1.8,
                      fontWeight: 500,
                      mb: 4,
                    }}
                  >
                    {t.quote}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <MapleLeafIcon
                      size={32}
                      color={i === 1 ? "#AC3F30" : "#96B3AD"}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "chippewa-falls, sans-serif",
                          color: "#AC3F30",
                          fontSize: "0.875rem",
                        }}
                      >
                        {t.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#26394F",
                          fontSize: "10px",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;

const MapleLeafIcon = ({ size = 32, color = "#96B3AD" }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path d="M32 2L28 15L19 10L23 21L9 19L15 29L4 34L17 36L13 47L26 43L30 57L32 59L34 57L38 43L51 47L47 36L60 34L49 29L55 19L41 21L45 10L36 15Z" />
    <rect x="30" y="57" width="4" height="7" rx="1" />
  </svg>
);
