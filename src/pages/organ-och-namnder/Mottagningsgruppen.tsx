import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import mogen from "../../assets/organ-och-namnder/mogen.webp";
import GroupRoles from "../../components/roles/GroupRoles";

export default function Mottagningsgruppen() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={mogen}
      heroTitle="mottagningsgruppen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center 80%", md: "center 80%" }}
    >
      <Typography variant="h4" mb={3}>
        Mottagningsgruppen
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Mottagningsgruppen"
        showGroupName={false}
        showContact={true}
      />
    </InfoPageLayout>
  );
}
