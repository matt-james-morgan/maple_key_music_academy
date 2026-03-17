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
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
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
const TIME_SLOTS = ["Morning (9am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–8pm)"];

const PreRegister = () => {
  const [schedulePreference, setSchedulePreference] = useState<"same" | "new">("same");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [toast, setToast] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({ open: false, severity: "success", message: "" });

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const toggleTime = (slot: string) => {
    setSelectedTimes((prev) =>
      prev.includes(slot) ? prev.filter((t) => t !== slot) : [...prev, slot]
    );
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Inject hidden fields for days/times/preference
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

    inject("schedule_preference", schedulePreference === "same" ? "Keep same time" : "Request new time");
    inject("preferred_days", selectedDays.length ? selectedDays.join(", ") : "N/A");
    inject("preferred_times", selectedTimes.length ? selectedTimes.join(", ") : "N/A");
    inject("time", new Date().toLocaleString());

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_PREREG_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          form.reset();
          setSchedulePreference("same");
          setSelectedDays([]);
          setSelectedTimes([]);
          setToast({ open: true, severity: "success", message: "Pre-registration submitted! We'll be in touch soon." });
        },
        () => {
          setToast({ open: true, severity: "error", message: "Something went wrong. Please try again." });
        },
      );
  };

  return (
    <Box sx={{ bgcolor: "#96B3AD", minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{ color: "#26394F", mb: 1 }}
        >
          Pre-Registration
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
          Returning students — secure your spot for the upcoming session.
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
          {/* Parent / Guardian */}
          <Box>
            <Typography sx={{ ...labelSx, mb: 1.5 }}>Parent / Guardian Name</Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth name="parent_first_name" placeholder="First Name" required sx={inputSx} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth name="parent_last_name" placeholder="Last Name" required sx={inputSx} />
              </Grid>
            </Grid>
          </Box>

          {/* Student Name */}
          <Box>
            <Typography sx={{ ...labelSx, mb: 1.5 }}>Student Name</Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth name="student_first_name" placeholder="First Name" required sx={inputSx} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth name="student_last_name" placeholder="Last Name" required sx={inputSx} />
              </Grid>
            </Grid>
          </Box>

          {/* Email */}
          <TextField
            fullWidth
            name="email"
            type="email"
            placeholder="Email Address"
            required
            sx={inputSx}
          />

          {/* Schedule Preference */}
          <FormControl>
            <FormLabel
              sx={{
                ...labelSx,
                mb: 1.5,
                "&.Mui-focused": { color: "#26394F" },
              }}
            >
              Schedule Preference
            </FormLabel>
            <RadioGroup
              name="schedule_preference_radio"
              value={schedulePreference}
              onChange={(e) => setSchedulePreference(e.target.value as "same" | "new")}
              sx={{ gap: 0.5 }}
            >
              <FormControlLabel
                value="same"
                control={
                  <Radio
                    sx={{
                      color: "#26394F",
                      "&.Mui-checked": { color: "#AC3F30" },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#26394F" }}>
                    Keep the same time slot
                  </Typography>
                }
              />
              <FormControlLabel
                value="new"
                control={
                  <Radio
                    sx={{
                      color: "#26394F",
                      "&.Mui-checked": { color: "#AC3F30" },
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#26394F" }}>
                    Request a new time
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>

          {/* Day / Time selection — only shown when requesting new time */}
          {schedulePreference === "new" && (
            <Box
              sx={{
                borderLeft: "3px solid #AC3F30",
                pl: 3,
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <FormControl component="fieldset">
                <FormLabel sx={{ ...labelSx, mb: 1, "&.Mui-focused": { color: "#26394F" } }}>
                  Preferred Days
                </FormLabel>
                <FormGroup row sx={{ gap: 0 }}>
                  {DAYS.map((day) => (
                    <FormControlLabel
                      key={day}
                      control={
                        <Checkbox
                          checked={selectedDays.includes(day)}
                          onChange={() => toggleDay(day)}
                          sx={{
                            color: "#26394F",
                            "&.Mui-checked": { color: "#AC3F30" },
                            py: 0.75,
                          }}
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

              <FormControl component="fieldset">
                <FormLabel sx={{ ...labelSx, mb: 1, "&.Mui-focused": { color: "#26394F" } }}>
                  Preferred Time of Day
                </FormLabel>
                <FormGroup row sx={{ gap: 0 }}>
                  {TIME_SLOTS.map((slot) => (
                    <FormControlLabel
                      key={slot}
                      control={
                        <Checkbox
                          checked={selectedTimes.includes(slot)}
                          onChange={() => toggleTime(slot)}
                          sx={{
                            color: "#26394F",
                            "&.Mui-checked": { color: "#AC3F30" },
                            py: 0.75,
                          }}
                        />
                      }
                      label={
                        <Typography sx={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#26394F" }}>
                          {slot}
                        </Typography>
                      }
                      sx={{ mr: 2 }}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Box>
          )}

          {/* Notes */}
          <TextField
            fullWidth
            name="notes"
            multiline
            rows={4}
            placeholder="Any additional notes (e.g. teacher preference, instrument changes, etc.)"
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
              Submit Pre-Registration
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

export default PreRegister;
