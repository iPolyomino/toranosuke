import React from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  updateText: Function;
}

const IndexTextField: React.FunctionComponent<Props> = ({ updateText }) => {
  return (
    <TextField
      variant="outlined"
      multiline
      rows="4"
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
        updateText(e.target.value);
      }}
    ></TextField>
  );
};

export default IndexTextField;
