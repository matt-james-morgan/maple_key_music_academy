import { type FormEvent, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { joinMailingList } from "../lib/mailingList";

type Status = "idle" | "sending" | "sent" | "error";

/** Footer sign-up (dark background). Posts to /api/subscribe, which adds the address to Resend. */
const MailingListSignup = () => {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await joinMailingList(email, "footer", website);
      setStatus("sent");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const heading = (
    <Typography
      sx={{ color: "#FFFBEF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", mb: 1 }}
    >
      Join Our Mailing List
    </Typography>
  );

  if (status === "sent") {
    return (
      <Box sx={{ textAlign: "center" }}>
        {heading}
        <Typography role="status" sx={{ color: "rgba(255,251,239,0.8)" }}>
          Thanks! You're on the list.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      id="signup"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 480, mx: "auto", textAlign: "center" }}
    >
      {heading}
      <Typography sx={{ color: "rgba(255,251,239,0.7)", fontSize: "0.875rem", mb: 2 }}>
        News, events and program updates. Unsubscribe anytime.
      </Typography>
      {/* Hidden from people and screen readers; bots fill it in. */}
      <Box
        component="input"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWebsite(e.target.value)}
        sx={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />
      <Box sx={{ display: "flex", gap: 1, flexDirection: { xs: "column", sm: "row" } }}>
        <TextField
          type="email"
          required
          size="small"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          slotProps={{
            htmlInput: {
              "aria-label": "Email address",
              autoComplete: "email",
              enterKeyHint: "send",
              pattern: String.raw`[^\s@]+@[^\s@]+\.[^\s@]{2,}`,
              title: "Please enter a valid email address, like name@example.com",
            },
          }}
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": { bgcolor: "#FFFBEF", borderRadius: 1 },
            // 16px+ stops iOS zooming in when the field is tapped
            "& .MuiInputBase-input": { color: "#26394F", fontSize: "1rem" },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={status === "sending"}
          sx={{
            bgcolor: "#AC3F30",
            color: "#FFFBEF",
            px: 3,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            "&:hover": { bgcolor: "#8e3427" },
          }}
        >
          {status === "sending" ? "Joining…" : "Sign Up"}
        </Button>
      </Box>
      {status === "error" && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default MailingListSignup;
