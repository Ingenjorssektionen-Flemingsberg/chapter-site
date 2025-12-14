import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import igor from "../../assets/organ-och-namnder/igor.webp";
import GroupRoles from "../../components/roles/GroupRoles";

export default function Idrottsgruppen() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={igor}
      heroTitle="Idrottsgruppen"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center", md: "center 100%" }}
    >
      <Typography variant="h4" mb={3}>
        Idrottsgruppen
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Idrottsgruppen"
        showGroupName={false}
        showContact={true}
      />
    </InfoPageLayout>
  );
}
