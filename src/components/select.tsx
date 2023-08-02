/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ForwardedRef, forwardRef } from 'react';
import Select, { Props as SelectProps } from 'react-select';

export interface CustomSelectProps extends SelectProps<any> {
  // You can add any additional props specific to your component
}

export const BaseSelect: FC<CustomSelectProps> = forwardRef(
  (props: CustomSelectProps, ref: ForwardedRef<any>) => {
    return <Select ref={ref} {...props} />;
  }
);
