import { Divider, Stack, Typography } from "@mui/material";
import SquareButton from "../../components/buttons/SquareButton";
import InfoPageLayout from "../../components/layout/InfoPageLayout";

export default function Styrdokument() {
  return (
    <InfoPageLayout navLabel="Sektionen">
      <Typography variant="h4" mb={3}>
        Styrdokument
      </Typography>
      <Typography variant="body1" mb={3}>
        Styrande dokument är riktlinjer som hjälper organisationer att nå mål
        och skapa enhetlig styrning. De omfattar policies, riktlinjer,
        strategier och procedurer som styr beslutsfattande. Nedan finner ni
        styrdokument för Ingenjörssektionen Flemingsberg.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          gap: 2,
        }}
      >
        <SquareButton
          to="https://drive.google.com/file/d/1dCNJUAjUpPN6JdgPEi1cr0jzOldno6Yv/view?usp=drive_link"
          fontSize="0.9em"
        >
          stadgar
        </SquareButton>
        <SquareButton
          to="https://drive.google.com/file/d/1-FPaCAIfSOJH2OBfAiyh4ZLt6o20Dy8V/view?usp=sharing"
          fontSize="0.9em"
        >
          varumärken och logotyper
        </SquareButton>
        <SquareButton
          to="https://drive.google.com/open?id=1tQb1PrAbHCoUohqXTYzpSwjNS0pfX-DW&usp=drive_copy"
          fontSize="0.9em"
        >
          reglemente
        </SquareButton>
      </Stack>

      <Divider
        sx={{
          my: 7,
        }}
      />

      <Typography variant="h4" mb={3}>
        Sektionsmöten
      </Typography>
      <Typography variant="body1" mb={3}>
        Protokoll och möteshandlingar från Sektionsmöten (SM) finns här. Vi
        uppmanar alla att läsa dokumenten för att vara informerade om sektionens
        diskussioner och beslut.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          gap: 2,
        }}
      >
        {/* TODO: Inte statiskt sätta SM 2025 på denna knapp */}
        <SquareButton
          to="https://drive.google.com/drive/folders/1wH3vGqSDEsM4Yn9tagDljv5k_4G1fsaB?usp=sharing"
          fontSize="0.9em"
        >
          sm 2025
        </SquareButton>
        <SquareButton
          to="https://drive.google.com/drive/folders/1l8p312qmFeGSdyALApIMq8zu9lzA-5ij?usp=sharing"
          fontSize="0.9em"
        >
          sm arkiv
        </SquareButton>
        <SquareButton
          to="https://drive.google.com/file/d/1TKy9drsz5bDNmcQ6FFEeMReiOyF9bJEr/view?usp=sharing"
          fontSize="0.9em"
        >
          sm guide
        </SquareButton>
      </Stack>

      <Divider
        sx={{
          my: 7,
        }}
      />

      <Typography variant="h4" mb={3}>
        Styrelsemöten
      </Typography>
      <Typography variant="body1" mb={3}>
        Protokoll och möteshandlingar från Styrelsens möten kan du hitta här.
        Dessa dokument ger en översikt över de beslut och diskussioner som har
        ägt rum under dessa möten.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          gap: 2,
        }}
      >
        <SquareButton
          to="https://drive.google.com/drive/folders/17Nk7sRkxYubnYrozTd-H54FuAnCVWYhm?usp=drive_link"
          fontSize="0.9em"
        >
          styrelsemöten 2025
        </SquareButton>

        <SquareButton
          to="https://drive.google.com/drive/folders/1SpILAQLOzgPQUcjVNjmRCQK9MSLVnObL?usp=sharing"
          fontSize="0.9em"
        >
          styrelsemöten arkiv
        </SquareButton>
      </Stack>

      <Divider
        sx={{
          my: 7,
        }}
      />

      <Typography variant="h4" mb={3}>
        Mallar
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          gap: 2,
        }}
      >
        <SquareButton
          to="https://docs.google.com/document/d/1BwPKzr5vW68r-h-gB_r4SCVGKqhw5zQ3FCeaBBfdldo/edit?usp=drive_link"
          fontSize="0.9em"
        >
          motionsmall
        </SquareButton>
      </Stack>
    </InfoPageLayout>
  );
}
