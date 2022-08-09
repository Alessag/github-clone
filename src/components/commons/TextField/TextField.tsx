import React from "react";

import { TextFieldContainer } from "./styles";

interface TextFieldProps {
  placeholder: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  type,
  onChange,
}) => {
  return (
    <TextFieldContainer
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextField;
