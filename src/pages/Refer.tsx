import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import logo from "../assets/full-logo-shorter.png";

const Refer = () => {
  const [name, setName] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!name.trim()) return;
    const baseUrl = window.location.origin;
    const link = `${baseUrl}?refId=${encodeURIComponent(name.trim())}`;
    setGeneratedLink(link);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#96B3AD",
        pt: { xs: 14, md: 16 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          sx={{
            bgcolor: "#FFFBEF",
            borderRadius: 2,
            p: { xs: 3, md: 5 },
            boxShadow: 6,
          }}
        >
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="Maple Key Music Academy"
              sx={{ width: { xs: 64, md: 80 } }}
            />
          </Box>
          <Typography
            variant="h3"
            sx={{ color: "#26394F", textAlign: "center", mb: 2 }}
          >
            Refer a Friend
          </Typography>
          <Typography
            sx={{
              color: "#26394F",
              textAlign: "center",
              mb: 4,
              fontSize: { xs: "0.78rem", md: "1rem" },
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              lineHeight: 1.8,
            }}
          >
            Enter your name below to generate a personal referral link. Share it
            with a friend so they can sign up for lessons!
          </Typography>

          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#26394F" },
                "&:hover fieldset": { borderColor: "#26394F" },
                "&.Mui-focused fieldset": { borderColor: "#26394F" },
              },
              "& .MuiInputLabel-root": { color: "#26394F" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#26394F" },
              "& .MuiInputBase-input": { color: "#26394F" },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleGenerate}
            disabled={!name.trim()}
            sx={{
              bgcolor: "#AC3F30",
              color: "#FFFBEF",
              py: 1.5,
              borderRadius: 1,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "0.875rem",
              "&:hover": { bgcolor: "#8e3427" },
              "&.Mui-disabled": { bgcolor: "#ccc" },
            }}
          >
            Generate Referral Link
          </Button>

          {generatedLink && (
            <Box sx={{ mt: 4 }}>
              <Typography
                sx={{
                  color: "#26394F",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.75rem",
                  mb: 1,
                }}
              >
                Your Referral Link
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  bgcolor: "#96B3AD",
                  borderRadius: 1,
                  p: 1.5,
                }}
              >
                <Typography
                  sx={{
                    flex: 1,
                    fontSize: "0.85rem",
                    color: "#26394F",
                    wordBreak: "break-all",
                    fontWeight: 500,
                  }}
                >
                  {generatedLink}
                </Typography>
                <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                  <IconButton onClick={handleCopy} sx={{ color: "#26394F" }}>
                    {copied ? <CheckIcon /> : <ContentCopyIcon />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Refer;
