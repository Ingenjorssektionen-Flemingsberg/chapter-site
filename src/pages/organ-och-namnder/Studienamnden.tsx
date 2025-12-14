import { Divider, Typography } from "@mui/material";
import InfoPageLayout from "../../components/layout/InfoPageLayout";
import studienamnden from "../../assets/organ-och-namnder/studienamnden.webp";
import RoleItem from "../../components/roles/RoleItem";

export default function Studienamnden() {
  return (
    <InfoPageLayout
      navLabel="Organ och Nämnder"
      heroImage={studienamnden}
      heroTitle="studienämnden"
      heroHeight={{ xs: "40vh", md: "60vh" }}
    >
      <Typography variant="h4" mb={3}>
        Studienämnden
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h4" mb={3}>
        Ansvarig
      </Typography>
      <RoleItem find="Studienämndens Ordförande" showContact={true} />
    </InfoPageLayout>
  );
}
