import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import teachers from "../data/teachers";
import { TeacherCard } from "../components/Instructors";

const allPrograms = [
  "Acting",
  "Banjo",
  "Cello",
  "Drums",
  "Guitar",
  "Musical Theatre",
  "Piano",
  "Ukulele",
  "Voice",
];

const Teachers = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (program: string) => {
    setSelected((prev) =>
      prev.includes(program)
        ? prev.filter((p) => p !== program)
        : [...prev, program],
    );
  };

  const filtered = useMemo(() => {
    if (selected.length === 0) return teachers;
    return teachers.filter((t) =>
      selected.some((p) =>
        t.specialty.toLowerCase().includes(p.toLowerCase()),
      ),
    );
  }, [selected]);

  return (
    <Box sx={{ bgcolor: "#96B3AD", pt: { xs: 16, md: 20 }, pb: { xs: 8, md: 12 }, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            color: "#26394F",
            mb: 3,
            fontVariant: "small-caps",
            fontStyle: "normal",
          }}
        >
          Meet Our Teachers
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            lineHeight: 1.8,
            fontWeight: 500,
            mb: 6,
            maxWidth: 800,
          }}
        >
          Our dedicated team of professional musicians and certified instructors
          are passionate about sharing their love of music with students of all
          ages. Find your new mentor, cheerleader, and friend below!
        </Typography>

        <Grid container spacing={4}>
          {/* Filter Sidebar */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                bgcolor: "rgba(255,251,239,0.3)",
                borderRadius: 3,
                p: 3,
                position: { md: "sticky" },
                top: { md: 120 },
              }}
            >
              <Typography
                sx={{
                  color: "#AC3F30",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Filter by Program:
              </Typography>
              <FormGroup>
                {allPrograms.map((program) => (
                  <FormControlLabel
                    key={program}
                    control={
                      <Checkbox
                        checked={selected.includes(program)}
                        onChange={() => toggle(program)}
                        size="small"
                        sx={{
                          color: "#26394F",
                          "&.Mui-checked": { color: "#26394F" },
                          py: 0.3,
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          color: "#26394F",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                        }}
                      >
                        {program}
                      </Typography>
                    }
                  />
                ))}
              </FormGroup>
            </Box>
          </Grid>

          {/* Teacher Cards Grid */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Grid container spacing={3}>
              {filtered.map((instructor) => (
                <Grid key={instructor.slug} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <TeacherCard instructor={instructor} />
                </Grid>
              ))}
            </Grid>

            {filtered.length === 0 && (
              <Typography
                sx={{
                  textAlign: "center",
                  mt: 6,
                  color: "#26394F",
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                No teachers found for the selected programs.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Teachers;
