import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import resources, { categories } from "../data/resources";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const linked = resources.filter((r) => r.amazonUrl !== "REPLACE_WITH_AFFILIATE_LINK");
  const filtered = activeCategory
    ? linked.filter((r) => r.category === activeCategory)
    : linked;

  return (
    <Box sx={{ bgcolor: "#96B3AD", minHeight: "100vh", pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Typography variant="h2" sx={{ color: "#26394F", mb: 1, fontStyle: "italic" }}>
          Recommended Resources
        </Typography>
        <Typography
          sx={{
            color: "#26394F",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            mb: 6,
            maxWidth: 640,
            lineHeight: 1.8,
          }}
        >
          Hand-picked books and accessories recommended by our teachers. Links below are Amazon affiliate links — purchases support Maple Key Music Academy at no extra cost to you.
        </Typography>

        {/* Category Filter */}
        <Stack direction="row" flexWrap="wrap" gap={1.5} mb={5}>
          <Chip
            label="All"
            onClick={() => setActiveCategory(null)}
            sx={{
              bgcolor: activeCategory === null ? "#AC3F30" : "#FFFBEF",
              color: activeCategory === null ? "#FFFBEF" : "#26394F",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "0.7rem",
              borderRadius: 1,
              "&:hover": { bgcolor: activeCategory === null ? "#8e3427" : "#f5f0e0" },
            }}
          />
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              sx={{
                bgcolor: activeCategory === cat ? "#AC3F30" : "#FFFBEF",
                color: activeCategory === cat ? "#FFFBEF" : "#26394F",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.7rem",
                borderRadius: 1,
                "&:hover": { bgcolor: activeCategory === cat ? "#8e3427" : "#f5f0e0" },
              }}
            />
          ))}
        </Stack>

        {/* Resource Cards */}
        <Grid container spacing={3}>
          {filtered.map((resource, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  bgcolor: "#FFFBEF",
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 2,
                  border: "1px solid rgba(38,57,79,0.08)",
                }}
              >
                {resource.image && (
                  <Box
                    component="img"
                    src={resource.image}
                    alt={resource.title}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "contain",
                      bgcolor: "#f5f0e0",
                      p: 2,
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                )}
              <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      color: "#AC3F30",
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {resource.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#26394F",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      mb: 1.5,
                      lineHeight: 1.4,
                    }}
                  >
                    {resource.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#26394F",
                      fontSize: "0.78rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      lineHeight: 1.8,
                      flexGrow: 1,
                      mb: 3,
                      opacity: 0.8,
                    }}
                  >
                    {resource.description}
                  </Typography>
                  <Button
                    href={resource.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    endIcon={<OpenInNewIcon sx={{ fontSize: "0.85rem !important" }} />}
                    sx={{
                      bgcolor: "#26394F",
                      color: "#FFFBEF",
                      px: 2.5,
                      py: 1,
                      borderRadius: 1,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontSize: "0.7rem",
                      alignSelf: "flex-start",
                      "&:hover": { bgcolor: "#1d2d3d" },
                    }}
                  >
                    View on Amazon
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Disclaimer */}
        <Typography
          sx={{
            mt: 8,
            color: "#26394F",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            opacity: 0.6,
            textAlign: "center",
            lineHeight: 1.8,
          }}
        >
          Maple Key Music Academy is a participant in the Amazon Associates Program. We earn a small commission on qualifying purchases at no additional cost to you.
        </Typography>
      </Container>
    </Box>
  );
};

export default Resources;
