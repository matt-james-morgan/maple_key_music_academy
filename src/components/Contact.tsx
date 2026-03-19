import emailjs from "@emailjs/browser";
import { type FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { INSTRUMENT_SUGGESTIONS } from "../data/instrumentOptions";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#FFFBEF",
    borderRadius: 1,
    "& fieldset": { borderColor: "#26394F" },
    "&:hover fieldset": { borderColor: "#26394F" },
    "&.Mui-focused fieldset": { borderColor: "#26394F" },
  },
  "& .MuiInputBase-input": {
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    color: "#26394F",
    py: 1.5,
  },
  "& .MuiInputBase-input::placeholder": {
    color: "rgba(38,57,79,0.5)",
    opacity: 1,
  },
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const refId = searchParams.get("refId");
  const [toast, setToast] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({ open: false, severity: "success", message: "" });

  useEffect(() => {
    if (refId) {
      const onReady = () => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      };

      if (document.readyState === "complete") {
        onReady();
      } else {
        window.addEventListener("load", onReady);
        return () => window.removeEventListener("load", onReady);
      }
    }
  }, [refId]);

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
          setToast({
            open: true,
            severity: "success",
            message: "Message sent successfully!",
          });
        },
        (error) => {
          console.error("Email error:", error.text);
          setToast({
            open: true,
            severity: "error",
            message: "Something went wrong. Please try again.",
          });
        },
      );
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "#96B3AD" }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ color: "#26394F", mb: 4 }}>
          Register
        </Typography>

        <Grid container spacing={{ xs: 2, lg: 8 }} alignItems="flex-start">
          {/* Left — Registration Form */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              component="form"
              onSubmit={sendEmail}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="firstName"
                    placeholder="First Name"
                    required
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    name="lastName"
                    placeholder="Last Name"
                    required
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                name="email"
                type="email"
                placeholder="Email Address"
                required
                sx={inputSx}
              />
              <TextField
                fullWidth
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Phone Number"
                required
                sx={inputSx}
              />
              <Autocomplete
                freeSolo
                options={[...INSTRUMENT_SUGGESTIONS]}
                sx={inputSx}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="instrument"
                    placeholder="Instrument (or type your own)"
                    required
                    sx={inputSx}
                  />
                )}
              />
              <TextField
                fullWidth
                name="message"
                multiline
                rows={5}
                placeholder="Insert your message!"
                sx={inputSx}
              />

              <Autocomplete
                freeSolo
                disabled={!!refId}
                value={refId ? `Referred by ${refId}` : undefined}
                options={[
                  "Facebook",
                  "Instagram",
                  "YouTube",
                  "Google Search",
                  "Word of Mouth",
                  "Flyer / Poster",
                ]}
                sx={{
                  "&.Mui-disabled .MuiOutlinedInput-root": {
                    bgcolor: "#FFFBEF",
                  },
                  "&.Mui-disabled .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#26394F",
                    color: "#26394F",
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="referral"
                    placeholder="How Did You Hear About Us?"
                    sx={inputSx}
                  />
                )}
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
          </Grid>

          {/* Right — Contact Info Card */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card
              sx={{
                bgcolor: "#AC3F30",
                borderRadius: 2,
                boxShadow: 6,
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                <Typography variant="h4" sx={{ color: "#FFFBEF", mb: 4 }}>
                  Contact Us Directly:
                </Typography>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                >
                  {[
                    { icon: <PhoneIcon />, text: "(705) 978-2131" },
                    {
                      icon: <EmailIcon />,
                      text: "maplekeymusic.academy@gmail.com",
                      href: "mailto:maplekeymusic.academy@gmail.com",
                    },
                    { icon: <LocationOnIcon />, text: "Toronto, ON" },
                  ].map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        minWidth: 0,
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#26394F",
                          borderRadius: "50%",
                          p: 1.25,
                          display: "flex",
                          flexShrink: 0,
                          color: "#FFFBEF",
                        }}
                      >
                        {item.icon}
                      </Box>
                      {item.href ? (
                        <Typography
                          component="a"
                          href={item.href}
                          sx={{
                            color: "#FFFBEF",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            fontSize: { xs: "0.7rem", md: "0.875rem" },
                            fontWeight: 500,
                            textDecoration: "none",
                            minWidth: 0,
                            overflowWrap: "break-word",
                            wordBreak: "break-word",
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {item.text}
                        </Typography>
                      ) : (
                        <Typography
                          sx={{
                            color: "#FFFBEF",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontSize: { xs: "0.75rem", md: "0.875rem" },
                            fontWeight: 500,
                          }}
                        >
                          {item.text}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 5 }}>
                  <Typography
                    sx={{
                      color: "#FFFBEF",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    Follow Us
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton
                      href="#"
                      aria-label="Facebook"
                      sx={{
                        color: "#FFFBEF",
                        "&:hover": { color: "rgba(255,251,239,0.7)" },
                      }}
                    >
                      <FacebookIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                    <IconButton
                      href="#"
                      aria-label="Instagram"
                      sx={{
                        color: "#FFFBEF",
                        "&:hover": { color: "rgba(255,251,239,0.7)" },
                      }}
                    >
                      <InstagramIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                    <IconButton
                      href="#"
                      aria-label="YouTube"
                      sx={{
                        color: "#FFFBEF",
                        "&:hover": { color: "rgba(255,251,239,0.7)" },
                      }}
                    >
                      <YouTubeIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast((prev) => ({ ...prev, open: false }))}
          severity={toast.severity}
          variant="filled"
          sx={{ width: "100%", fontSize: "0.9rem" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
