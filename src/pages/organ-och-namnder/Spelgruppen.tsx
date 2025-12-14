import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import spruppen from "../../assets/organ-och-namnder/spruppen.webp";
import GroupRoles from "../../components/roles/GroupRoles";

export default function Spelgruppen() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={spruppen}
      heroTitle="spruppen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Spruppen
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles find="Spruppen" showGroupName={false} showContact={true} />
    </InfoPageLayout>
  );
}
