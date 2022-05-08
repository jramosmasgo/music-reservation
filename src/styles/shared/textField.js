import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const TextFieldPrimary = styled(TextField)(({ theme }) => ({
  marginBottom: 30,

  "& .MuiOutlinedInput-root": {
    fieldset: {
      borderColor: "#004346",
    },
  },
}));
