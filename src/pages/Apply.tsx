import emailjs from "@emailjs/browser";
import { type FormEvent, useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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

const labelSx = {
  color: "#26394F",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  fontSize: "0.75rem",
  fontWeight: 700,
  mb: 0.5,
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Apply = () => {
  const [availableDays, setAvailableDays] = useState<string[]>([]);
  const [toast, setToast] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({ open: false, severity: "success", message: "" });

  const toggleDay = (day: string) =>
    setAvailableDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const inject = (name: string, value: string) => {
      let el = form.querySelector(`input[name="${name}"]`) as HTMLInputElement | null;
      if (!el) {
        el = document.createElement("input");
        el.type = "hidden";
        el.name = name;
        form.appendChild(el);
      }
      el.value = value;
    };

    inject("available_days", availableDays.length ? availableDays.join(", ") : "Not specified");
    inject("time", new Date().toLocaleString());

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_APPLY_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          form.reset();
          setAvailableDays([]);
          setToast({ open: true, severity: "success", message: "Application submitted! We'll be in touch soon." });
        },
        () => {
          setToast({ open: true, severity: "error", message: "Something went wrong. Please try again." });
        },
      );
  };

  return (
    <Box sx={{ bgcolor: "#96B3AD", minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ color: "#26394F", mb: 1 }}>
          Apply to Teach
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            fontSize: "0.875rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            mb: 6,
            opacity: 0.8,
          }}
        >
          Interested in joining the Maple Key team? Fill out the form below and we'll be in touch.
        </Typography>

        <Box
          component="form"
          onSubmit={sendEmail}
          sx={{
            bgcolor: "#FFFBEF",
            borderRadius: 2,
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Name */}
          <Box>
            <Typography sx={{ ...labelSx, mb: 1.5 }}>Your Name</Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth name="first_name" placeholder="First Name" required sx={inputSx} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth name="last_name" placeholder="Last Name" required sx={inputSx} />
              </Grid>
            </Grid>
          </Box>

          {/* Contact */}
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

          {/* Instruments */}
          <TextField
            fullWidth
            name="instruments"
            placeholder="Instruments you teach (e.g. Piano, Guitar, Voice)"
            required
            sx={inputSx}
          />

          {/* Experience */}
          <TextField
            fullWidth
            name="experience"
            multiline
            rows={4}
            placeholder="Tell us about your musical background and teaching experience"
            required
            sx={inputSx}
          />

          {/* Availability */}
          <FormControl component="fieldset">
            <FormLabel sx={{ ...labelSx, mb: 1.5, "&.Mui-focused": { color: "#26394F" } }}>
              Days Available to Teach
            </FormLabel>
            <FormGroup row sx={{ gap: 0 }}>
              {DAYS.map((day) => (
                <FormControlLabel
                  key={day}
                  control={
                    <Checkbox
                      checked={availableDays.includes(day)}
                      onChange={() => toggleDay(day)}
                      sx={{ color: "#26394F", "&.Mui-checked": { color: "#AC3F30" }, py: 0.75 }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#26394F" }}>
                      {day}
                    </Typography>
                  }
                  sx={{ mr: 2 }}
                />
              ))}
            </FormGroup>
          </FormControl>

          {/* Why Maple Key */}
          <TextField
            fullWidth
            name="message"
            multiline
            rows={4}
            placeholder="Why do you want to teach at Maple Key? Anything else you'd like us to know?"
            sx={inputSx}
          />

          <Box>
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
              Submit Application
            </Button>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
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

export default Apply;
