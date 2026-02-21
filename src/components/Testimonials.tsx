import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const testimonials = [
  {
    quote: "In the garden of life, some things are just very sweet. This is one of them.",
    name: "Bill Kervin",
    role: "Guitar Student",
  },
  {
    quote: "Your expectations will fly sky high. I felt like I was soaring.",
    name: "Deborah Hyde",
    role: "Vocal Student",
  },
  {
    quote: "Using this felt like it transformed me completely.",
    name: "Virginia Woof",
    role: "Squeak Student",
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

        <Grid container spacing={3}>
          {testimonials.map((t, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  bgcolor: "#FFFBEF",
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  aspectRatio: "1/1",
                  border: 2,
                  borderColor: i % 2 === 0 ? "#AC3F30" : "#26394F",
                  boxShadow: 1,
                }}
              >
                <CardContent sx={{ p: 0, "&:last-child": { pb: 0 }, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
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
                          fontFamily: '"Calder", Georgia, serif',
                          fontStyle: "italic",
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
    <path d="M32 2C32 2 28 12 24 16C20 20 10 20 10 20C10 20 14 26 16 30C18 34 14 40 14 40C14 40 22 38 26 40C30 42 32 50 32 50C32 50 34 42 38 40C42 38 50 40 50 40C50 40 46 34 48 30C50 26 54 20 54 20C54 20 44 20 40 16C36 12 32 2 32 2Z" />
    <path d="M32 50L30 62H34L32 50Z" />
  </svg>
);
