import React from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  updateText: (arg1: string) => void;
}

const IndexTextField: React.FunctionComponent<Props> = ({ updateText }) => {
  return (
    <TextField
      variant="outlined"
      multiline
      minRows="5"
      fullWidth={true}
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
        updateText(e.target.value);
      }}
    ></TextField>
  );
};

export default IndexTextField;
