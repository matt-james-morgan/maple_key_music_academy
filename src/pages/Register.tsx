import emailjs from "@emailjs/browser";
import { type FormEvent, useState } from "react";
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

const Register = () => {
  const [searchParams] = useSearchParams();
  const refId = searchParams.get("refId");
  const [toast, setToast] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({ open: false, severity: "success", message: "" });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    let timeInput = form.querySelector('input[name="time"]') as HTMLInputElement | null;
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
        () => {
          form.reset();
          setToast({ open: true, severity: "success", message: "Message sent successfully!" });
        },
        () => {
          setToast({ open: true, severity: "error", message: "Something went wrong. Please try again." });
        },
      );
  };

  return (
    <Box sx={{ bgcolor: "#96B3AD", minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ color: "#26394F", mb: 1, fontStyle: "italic" }}>
          Register
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            mb: 1,
            lineHeight: 1.8,
          }}
        >
          Fill out the form below and we'll be in touch to get you started.
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            fontSize: "0.7rem",
            letterSpacing: "0.06em",
            opacity: 0.85,
            mb: 4,
            lineHeight: 1.6,
            textTransform: "none",
          }}
        >
          <Box component="span" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Required:
          </Box>{" "}
          name and email.{" "}
          <Box component="span" sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Optional:
          </Box>{" "}
          phone and instrument — adding them helps us respond faster.
        </Typography>

        <Grid container spacing={{ xs: 2, lg: 8 }} alignItems="flex-start">

          {/* Left — Form */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              component="form"
              onSubmit={sendEmail}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth name="firstName" placeholder="First Name" required sx={inputSx} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth name="lastName" placeholder="Last Name" required sx={inputSx} />
                </Grid>
              </Grid>

              <TextField fullWidth name="email" type="email" placeholder="Email Address" required sx={inputSx} />
              <TextField
                fullWidth
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Phone Number (optional)"
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
                    placeholder="Instrument (optional)"
                    sx={inputSx}
                  />
                )}
              />
              <TextField
                fullWidth
                name="message"
                multiline
                rows={5}
                placeholder="Tell us about yourself! Please include the instrument or teacher you're interested in."
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
                  "&.Mui-disabled .MuiOutlinedInput-root": { bgcolor: "#FFFBEF" },
                  "&.Mui-disabled .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#26394F",
                    color: "#26394F",
                  },
                }}
                renderInput={(params) => (
                  <TextField {...params} name="referral" placeholder="How Did You Hear About Us?" sx={inputSx} />
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

          {/* Right — Contact Info */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card sx={{ bgcolor: "#AC3F30", borderRadius: 2, boxShadow: 6 }}>
              <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                <Typography variant="h4" sx={{ color: "#FFFBEF", mb: 4, fontStyle: "italic" }}>
                  Contact Us Directly:
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                  {[
                    { icon: <PhoneIcon />, text: "(705) 978-2131" },
                    {
                      icon: <EmailIcon />,
                      text: "maplekeymusic.academy@gmail.com",
                      href: "mailto:maplekeymusic.academy@gmail.com",
                    },
                    { icon: <LocationOnIcon />, text: "Toronto, ON" },
                  ].map((item, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                            wordBreak: "break-all",
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
                    {[
                      { icon: <FacebookIcon sx={{ fontSize: 28 }} />, label: "Facebook" },
                      { icon: <InstagramIcon sx={{ fontSize: 28 }} />, label: "Instagram" },
                      { icon: <YouTubeIcon sx={{ fontSize: 28 }} />, label: "YouTube" },
                    ].map((s) => (
                      <IconButton
                        key={s.label}
                        href="#"
                        aria-label={s.label}
                        sx={{ color: "#FFFBEF", "&:hover": { color: "rgba(255,251,239,0.7)" } }}
                      >
                        {s.icon}
                      </IconButton>
                    ))}
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

export default Register;
