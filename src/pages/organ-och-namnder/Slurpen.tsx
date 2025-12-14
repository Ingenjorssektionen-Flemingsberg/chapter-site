import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import slurpen from "../../assets/organ-och-namnder/slurpen.webp";
import GroupRoles from "../../components/roles/GroupRoles";

export default function Slurpen() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={slurpen}
      heroTitle="slurpen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 400%" }}
    >
      <Typography variant="h4" mb={3}>
        Slurpen
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Slurpenredaktionen"
        showGroupName={false}
        showContact={true}
      />
    </InfoPageLayout>
  );
}
