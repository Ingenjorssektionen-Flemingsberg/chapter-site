import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import jml from "../../assets/organ-och-namnder/jml.webp";
import RoleItem from "../../components/roles/RoleItem";

export default function JML() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={jml}
      heroTitle="JML-nämnden"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        JML-Nämnden
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" mb={3}>
        Ansvarig
      </Typography>
      <RoleItem find="JML-ansvarig" showContact={true} />
    </InfoPageLayout>
  );
}
