import { Box, Container, Divider, Typography } from "@mui/material";
import HeroBanner from "../../components/HeroBanner";
import NavSidebar from "../../components/layout/NavSidebar";
import { navItems } from "../../config/navConfig";
import fisq from "../../assets/organ-och-namnder/fisq.webp";

export default function QM() {
  const item = navItems.find((x) => x.label === "Organ och Nämnder");

  return (
    <Container
      disableGutters
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        top: 0,
      }}
    >
      <HeroBanner
        image={fisq}
        title="fisq"
        height={{ xs: "40vh", md: "60vh" }}
        position={{ xs: "center 10%", md: "center 60%" }}
      />

      <Box
        sx={{
          maxWidth: { xs: "90vw", md: "60vw" },
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          my: 8,
          alignItems: "flex-start",
          justifyContent: "left",
        }}
      >
        {item && <NavSidebar item={item} />}

        <Divider orientation="vertical" flexItem />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" mb={3}>
            FISQ
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
