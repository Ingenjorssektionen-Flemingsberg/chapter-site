import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import lokal from "../../assets/banner.webp";
import GroupRoles from "../../components/roles/GroupRoles";

export default function Lokalnamnden() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={lokal}
      heroTitle="lokalnämnden"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Lokalnämnden
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Lokalnämnden"
        showGroupName={false}
        showContact={true}
      />
    </InfoPageLayout>
  );
}
