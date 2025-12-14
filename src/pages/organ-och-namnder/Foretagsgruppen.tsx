import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import foretag from "../../assets/organ-och-namnder/foretag.webp";
import GroupRoles from "../../components/roles/GroupRoles";

export default function Foretagsgruppen() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={foretag}
      heroTitle="Företagsgruppen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Företagsgruppen
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Företagsgruppen"
        showGroupName={false}
        showContact={true}
      />
    </InfoPageLayout>
  );
}
