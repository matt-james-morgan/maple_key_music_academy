import emailjs from "@emailjs/browser";
import { type FormEvent, useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import teachers from "../data/teachers";

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

const Testimonials = () => {
  const [teacher, setTeacher] = useState("");
  const [toast, setToast] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({ open: false, severity: "success", message: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TESTIMONIAL_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Testimonial sent:", result.text);
          form.reset();
          setTeacher("");
          setToast({
            open: true,
            severity: "success",
            message: "Thank you! Your testimonial has been submitted.",
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
    <Box sx={{ bgcolor: "#96B3AD", minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          sx={{ color: "#26394F", mb: 2, fontWeight: 700 }}
        >
          Share Your Experience
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            mb: 6,
            fontSize: "1rem",
            letterSpacing: "0.04em",
          }}
        >
          We'd love to hear about your time with one of our teachers. Your
          feedback helps our community grow.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          {/* Hidden field so EmailJS receives the teacher value */}
          <input type="hidden" name="teacher" value={teacher} />

          <FormControl fullWidth required>
            <InputLabel
              sx={{
                color: "rgba(38,57,79,0.5)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                "&.Mui-focused": { color: "#26394F" },
              }}
            >
              Select a Teacher
            </InputLabel>
            <Select
              value={teacher}
              label="Select a Teacher"
              onChange={(e) => setTeacher(e.target.value)}
              sx={{
                bgcolor: "#FFFBEF",
                borderRadius: 1,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                color: "#26394F",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "#26394F" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#26394F" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#26394F" },
              }}
            >
              {teachers.map((t) => (
                <MenuItem
                  key={t.slug}
                  value={t.name}
                  sx={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    color: "#26394F",
                  }}
                >
                  {t.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            name="testimonial"
            multiline
            rows={6}
            placeholder="Share your experience..."
            required
            sx={inputSx}
          />

          <TextField
            fullWidth
            name="author_name"
            placeholder="Your name (optional)"
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
              Submit Testimonial
            </Button>
          </Box>
        </Box>
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

export default Testimonials;
