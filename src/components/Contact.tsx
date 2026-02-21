import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
    textTransform: "uppercase",
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

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#96B3AD" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, lg: 8 }} alignItems="flex-start">
          {/* Left — Registration Form */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography variant="h3" sx={{ color: "#26394F", mb: 4 }}>
              Register
            </Typography>

            <Box component="form" onSubmit={sendEmail} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth name="firstName" placeholder="First Name" required sx={inputSx} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField fullWidth name="lastName" placeholder="Last Name" required sx={inputSx} />
                </Grid>
              </Grid>

              <TextField fullWidth name="email" type="email" placeholder="Email Address" required sx={inputSx} />
              <TextField fullWidth name="subject" placeholder="Subject Line" required sx={inputSx} />
              <TextField
                fullWidth
                name="message"
                multiline
                rows={5}
                placeholder="Insert your message. Please make sure to include the instrument or teacher you are interested in!"
                sx={inputSx}
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
                border: "4px solid #5FB8C8",
                boxShadow: 6,
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                <Typography variant="h4" sx={{ color: "#FFFBEF", mb: 4 }}>
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
                            letterSpacing: "0.1em",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            textDecoration: "none",
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
                            fontSize: "0.875rem",
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
                    <IconButton href="#" aria-label="Facebook" sx={{ color: "#FFFBEF", "&:hover": { color: "rgba(255,251,239,0.7)" } }}>
                      <FacebookIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                    <IconButton href="#" aria-label="Instagram" sx={{ color: "#FFFBEF", "&:hover": { color: "rgba(255,251,239,0.7)" } }}>
                      <InstagramIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                    <IconButton href="#" aria-label="YouTube" sx={{ color: "#FFFBEF", "&:hover": { color: "rgba(255,251,239,0.7)" } }}>
                      <YouTubeIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
