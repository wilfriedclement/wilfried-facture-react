import React from 'react';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, name, value, handleChange, error }) => {
  return (
    <FormControl isInvalid={!!error} mb={4}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormInput;
