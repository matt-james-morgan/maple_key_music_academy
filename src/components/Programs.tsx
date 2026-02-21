import { Box, Typography } from "@mui/material";
import PianoIcon from "@mui/icons-material/Piano";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";

const programs = [
  {
    title: "Piano",
    icon: <PianoIcon sx={{ fontSize: 64 }} />,
    bg: "#FFFBEF",
    color: "#26394F",
    border: "3px solid #26394F",
  },
  {
    title: "Musical Theatre",
    icon: <TheaterComedyIcon sx={{ fontSize: 64 }} />,
    bg: "#26394F",
    color: "#FFFBEF",
    border: "3px solid #26394F",
  },
  {
    title: "Guitar",
    icon: <AudiotrackIcon sx={{ fontSize: 64 }} />,
    bg: "#FFFBEF",
    color: "#AC3F30",
    border: "3px solid #AC3F30",
  },
  {
    title: "Banjo",
    icon: <MusicNoteIcon sx={{ fontSize: 64 }} />,
    bg: "#AC3F30",
    color: "#FFFBEF",
    border: "3px solid #AC3F30",
  },
  {
    title: "Voice",
    icon: <MicExternalOnIcon sx={{ fontSize: 64 }} />,
    bg: "#26394F",
    color: "#FFFBEF",
    border: "3px solid #26394F",
  },
  {
    title: "Drums",
    icon: <QueueMusicIcon sx={{ fontSize: 64 }} />,
    bg: "#FFFBEF",
    color: "#26394F",
    border: "3px solid #AC3F30",
  },
];

const Programs = () => {
  const items = [...programs, ...programs];

  return (
    <Box
      component="section"
      id="programs"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "#96B3AD", overflow: "hidden" }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontStyle: "italic",
          color: "#26394F",
          textAlign: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        Our Programs
      </Typography>

      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          animation: "marquee 25s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: `translateX(-50%)` },
          },
        }}
      >
        {items.map((program, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mx: { xs: 3, md: 5 },
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: { xs: 120, md: 160 },
                height: { xs: 120, md: 160 },
                borderRadius: "50%",
                bgcolor: program.bg,
                border: program.border,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: program.color,
                mb: 1.5,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.08)" },
              }}
            >
              {program.icon}
            </Box>
            <Typography
              sx={{
                color: "#26394F",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: { xs: "0.7rem", md: "0.8rem" },
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {program.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Programs;
