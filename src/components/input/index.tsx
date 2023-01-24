import React, { InputHTMLAttributes } from 'react';

import { Container } from '@/styles/components/input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  as?: any;
  rows?: number | string;
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container {...rest} />
  );
};

export default Input;
