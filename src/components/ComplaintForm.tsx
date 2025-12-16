import { Box, Stack, TextField, Typography } from "@mui/material";
import SquareButton from "./buttons/SquareButton";

type ComplaintFormProps = {
  title: string;
  email: string;
};

export default function ComplaintForm({
  title,
  email,
}: Readonly<ComplaintFormProps>) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      complaint: formData.get("complaint"),
    };

    // TODO: Intentionally left unused, to be sent via backend mail service ?
    void payload;
    void email;
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>

        <TextField
          name="name"
          label="Namn"
          fullWidth
          helperText="Koppla ett namn med ärendet, om du vill. Frivilligt."
        />

        <Box display="flex" flexDirection="row" gap={2}>
          <TextField
            name="email"
            label="Epostadress"
            type="email"
            fullWidth
            helperText="E-postadress för återkoppling. Frivilligt."
          />

          <TextField
            name="phone"
            label="Telefonnummer"
            fullWidth
            helperText="Telefonnummer för återkoppling. Frivilligt."
          />
        </Box>

        <TextField
          name="complaint"
          label="Klagomål"
          multiline
          minRows={4}
          fullWidth
          required
          helperText="(krävs)"
        />

        <SquareButton fullWidth type="submit">
          Skicka
        </SquareButton>
      </Stack>
    </Box>
  );
}
