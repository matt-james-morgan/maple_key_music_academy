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
            {/* Image */}
            <Grid size={{ xs: 5, sm: 4, lg: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  maxWidth: { xs: "100%", lg: 400 },
                  mb: { xs: 0, lg: "100px" },
                }}
              >
                <Box sx={{ borderRadius: 2, overflow: "hidden", position: "relative", width: "100%", aspectRatio: { xs: "4/5", lg: "3/4" } }}>
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
                        objectPosition: "center top",
                        display: "block",
                        opacity: i === imgIndex ? 1 : 0,
                        transition: "opacity 1s ease-in-out",
                      }}
                    />
                  ))}
                </Box>

                {/* Quote card — desktop only, overlapping image */}
                {teacher.quote && (
                <Box
                  sx={{
                    display: { xs: "none", lg: "block" },
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translate(-50%, 42%)",
                    width: "calc(100% - 24px)",
                    maxWidth: 360,
                    bgcolor: "#FFFBEF",
                    borderRadius: 2,
                    border: "2px solid #AC3F30",
                    px: 4,
                    py: 2.5,
                    textAlign: "center",
                    overflow: "visible",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#AC3F30",
                      fontSize: "10rem",
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontWeight: 700,
                      lineHeight: 0,
                      position: "absolute",
                      left: "-4px",
                      top: "20%",
                    }}
                  >
                    &ldquo;
                  </Typography>
                  <Typography
                    sx={{
                      color: "#26394F",
                      fontSize: "1rem",
                      fontFamily: "chippewa-falls, sans-serif",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      px: "2.25rem",
                      pt: "2rem",
                      pb: "1.5rem",
                    }}
                  >
                    {teacher.quote}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: "#AC3F30",
                      fontSize: "10rem",
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontWeight: 700,
                      lineHeight: 0,
                      position: "absolute",
                      right: "-4px",
                      bottom: "-18%",
                    }}
                  >
                    &rdquo;
                  </Typography>
                </Box>
                )}
              </Box>
            </Grid>

            {/* Details — beside image on mobile, right column on desktop */}
            <Grid size={{ xs: 7, sm: 8, lg: 6 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#AC3F30",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  mb: { xs: 1, lg: 2 },
                  fontStyle: "normal",
                  fontSize: { xs: "0.7rem", sm: "0.875rem", lg: "1.25rem" },
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
                  mb: 0.5,
                }}
              >
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Location:
                </Box>{" "}
                {teacher.location}
              </Typography>

              <Typography
                sx={{
                  color: "#26394F",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  mb: { xs: 0, lg: 4 },
                }}
              >
                <Box component="span" sx={{ fontWeight: 600 }}>
                  Teaching Days:
                </Box>{" "}
                {teacher.teachingDays}
              </Typography>

              {/* Bio + Projects — desktop only in this column */}
              <Box sx={{ display: { xs: "none", lg: "block" }, mt: 4 }}>
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

                {teacher.projects && teacher.projects.length > 0 && (
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      sx={{
                        color: "#26394F",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      Projects:
                    </Typography>
                    {teacher.projects.map((project) => (
                      <Typography
                        key={project.name}
                        sx={{
                          color: "#26394F",
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {project.url ? (
                          <Link
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: "#AC3F30" }}
                          >
                            {project.name}
                          </Link>
                        ) : (
                          project.name
                        )}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            </Grid>

            {/* Quote card — mobile only, full width below image+details */}
            {teacher.quote && (
            <Grid size={12} sx={{ display: { lg: "none" } }}>
              <Box
                sx={{
                  bgcolor: "#FFFBEF",
                  borderRadius: 2,
                  border: "2px solid #AC3F30",
                  px: { xs: 2, sm: 3 },
                  py: { xs: 2, sm: 2.5 },
                  textAlign: "center",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: "#AC3F30",
                    fontSize: { xs: "4.5rem", sm: "6rem" },
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontWeight: 700,
                    lineHeight: 0,
                    position: "absolute",
                    left: "-2px",
                    top: "15%",
                  }}
                >
                  &ldquo;
                </Typography>
                <Typography
                  sx={{
                    color: "#26394F",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    fontFamily: "chippewa-falls, sans-serif",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    px: { xs: "1.25rem", sm: "1.75rem" },
                    pt: { xs: "1.5rem", sm: "2rem" },
                    pb: { xs: "1.25rem", sm: "1.5rem" },
                  }}
                >
                  {teacher.quote}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: "#AC3F30",
                    fontSize: { xs: "4.5rem", sm: "6rem" },
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontWeight: 700,
                    lineHeight: 0,
                    position: "absolute",
                    right: "-2px",
                    bottom: "-10%",
                  }}
                >
                  &rdquo;
                </Typography>
              </Box>
            </Grid>
            )}

            {/* Bio + Projects — mobile only, full width */}
            <Grid size={12} sx={{ display: { lg: "none" }, mt: 1 }}>
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

              {teacher.projects && teacher.projects.length > 0 && (
                <Box sx={{ mt: 3 }}>
                  <Typography
                    sx={{
                      color: "#26394F",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Projects:
                  </Typography>
                  {teacher.projects.map((project) => (
                    <Typography
                      key={project.name}
                      sx={{
                        color: "#26394F",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {project.url ? (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: "#AC3F30" }}
                        >
                          {project.name}
                        </Link>
                      ) : (
                        project.name
                      )}
                    </Typography>
                  ))}
                </Box>
              )}
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
