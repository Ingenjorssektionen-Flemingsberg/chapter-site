import { Divider, Typography } from "@mui/material";
import fisq from "../../assets/organ-och-namnder/fisq.webp";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import GroupRoles from "../../components/roles/GroupRoles";

export default function QM() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={fisq}
      heroTitle="fisq"
      heroHeight={{ xs: "40vh", md: "60vh" }}
      heroPosition={{ xs: "center 10%", md: "center 60%" }}
    >
      <Typography variant="h4" mb={3}>
        FISQ
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" mb={3}>
        Ansvarig
      </Typography>
      <GroupRoles
        find="Qlubbmästeriet"
        showGroupName={false}
        showContact={true}
      />
    </InfoPageLayout>
  );
}
