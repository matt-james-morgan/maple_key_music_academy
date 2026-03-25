import { useParams, Link as RouterLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { type FormEvent, useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  Link,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import teachers from "../data/teachers";
import { INSTRUMENT_SUGGESTIONS } from "../data/instrumentOptions";

const inputSx = (borderColor: string) => ({
  "& .MuiOutlinedInput-root": {
    bgcolor: "#FFFBEF",
    borderRadius: 1,
    "& fieldset": { borderColor },
    "&:hover fieldset": { borderColor },
    "&.Mui-focused fieldset": { borderColor },
  },
  "& .MuiInputBase-input": {
    fontSize: "0.75rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: "#26394F",
    py: 1.5,
  },
  "& .MuiInputBase-input::placeholder": {
    color: "rgba(38,57,79,0.5)",
    opacity: 1,
  },
});

const TeacherBio = () => {
  const { slug } = useParams<{ slug: string }>();
  const teacher = teachers.find((t) => t.slug === slug);

  const allImages = teacher
    ? [teacher.image, ...(teacher.extraImages ?? [])]
    : [];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (allImages.length <= 1) return;
    const interval = setInterval(() => {
      setImgIndex((i) => (i + 1) % allImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [allImages.length]);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    let timeInput = form.querySelector(
      'input[name="time"]',
    ) as HTMLInputElement | null;
    if (!timeInput) {
      timeInput = document.createElement("input");
      timeInput.type = "hidden";
      timeInput.name = "time";
      form.appendChild(timeInput);
    }
    timeInput.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          form.reset();
          alert("Message sent!");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  if (!teacher) {
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
            Teacher Not Found
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

  return (
    <>
      {/* Bio Section */}
      <Box
        component="section"
        sx={{
          bgcolor: "#96B3AD",
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 16 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ color: "#26394F", mb: 5 }}>
            {teacher.name}
          </Typography>

          <Grid container spacing={{ xs: 2, lg: 8 }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  maxWidth: { xs: "100%", lg: 400 },
                  mb: { xs: "100px", lg: 4 },
                }}
              >
                <Box sx={{ borderRadius: 2, overflow: "hidden", position: "relative", width: "100%", aspectRatio: "3/4" }}>
                  {allImages.map((src, i) => (
                    <Box
                      key={src}
                      component="img"
                      src={src}
                      alt={teacher.name}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        opacity: i === imgIndex ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                      }}
                    />
                  ))}
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translate(-50%, 42%)",
                    width: "calc(100% - 24px)",
                    maxWidth: { xs: 320, md: 360 },
                    bgcolor: "#FFFBEF",
                    borderRadius: 2,
                    border: "2px solid #AC3F30",
                    px: { xs: 2, md: 3 },
                    py: { xs: 2, md: 2.5 },
                    pl: { xs: 3, md: 4 },
                    pr: { xs: 3, md: 4 },
                    boxShadow: 3,
                    textAlign: "center",
                    overflow: "visible",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#AC3F30",
                      fontSize: { xs: "4.5rem", sm: "6rem", md: "10rem" },
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontWeight: 700,
                      lineHeight: 0,
                      position: "absolute",
                      left: { xs: "-2px", md: "-4px" },
                      top: { xs: "15%", md: "20%" },
                    }}
                  >
                    &ldquo;
                  </Typography>
                  <Typography
                    sx={{
                      color: "#26394F",
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      fontFamily: "chippewa-falls, sans-serif",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      px: { xs: "1.25rem", sm: "1.75rem", md: "2.25rem" },
                      pt: { xs: "1.5rem", md: "2rem" },
                      pb: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {teacher.quote}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: "#AC3F30",
                      fontSize: { xs: "4.5rem", sm: "6rem", md: "10rem" },
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontWeight: 700,
                      lineHeight: 0,
                      position: "absolute",
                      right: { xs: "-2px", md: "-4px" },
                      bottom: { xs: "-10%", md: "-18%" },
                    }}
                  >
                    &rdquo;
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right — Details + Bio */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#AC3F30",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  mb: 2,
                  fontStyle: "normal",
                }}
              >
                {teacher.specialty}
              </Typography>

              <Typography
                sx={{
                  color: "#26394F",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  mb: 0.5,
                }}
              >
                {teacher.education}
              </Typography>

              <Typography
                sx={{
                  color: "#26394F",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  mb: 4,
                }}
              >
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Teaching Days:
                </Box>{" "}
                {teacher.teachingDays}
              </Typography>

              <Typography
                sx={{
                  color: "#26394F",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  lineHeight: 1.8,
                }}
              >
                {teacher.bio}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Book a Trial Lesson Form */}
      <Box
        component="section"
        sx={{ bgcolor: "#96B3AD", pb: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="sm">
          <Card
            sx={{
              bgcolor: "#FFFBEF",
              borderRadius: 3,
              pt: 5,
              pb: 5,
              px: { xs: 3, md: 5 },
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#26394F", textAlign: "center", mb: 4 }}
            >
              Book a Trial Lesson with {teacher.firstName}:
            </Typography>

            <Box
              component="form"
              onSubmit={sendEmail}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <input type="hidden" name="teacher" value={teacher.name} />

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="firstName"
                    placeholder="First Name"
                    required
                    sx={inputSx("#AC3F30")}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="lastName"
                    placeholder="Last Name"
                    required
                    sx={inputSx("#AC3F30")}
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                name="email"
                type="email"
                placeholder="Email Address"
                required
                sx={inputSx("#AC3F30")}
              />
              <TextField
                fullWidth
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Phone Number"
                required
                sx={inputSx("#AC3F30")}
              />
              <Autocomplete
                freeSolo
                options={[...INSTRUMENT_SUGGESTIONS]}
                sx={inputSx("#AC3F30")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="instrument"
                    placeholder="Instrument (or type your own)"
                    required
                    sx={inputSx("#AC3F30")}
                  />
                )}
              />
              <TextField
                fullWidth
                name="subject"
                placeholder="Subject Line"
                required
                sx={inputSx("#AC3F30")}
              />
              <TextField
                fullWidth
                name="message"
                multiline
                rows={5}
                placeholder="Insert your message. Please make sure to include the instrument or teacher you are interested in!"
                sx={inputSx("#AC3F30")}
              />


              <Box sx={{ pt: 1 }}>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
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
                  Send Message
                </Button>
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default TeacherBio;
