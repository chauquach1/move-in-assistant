import { FieldArray, type FieldArrayProps } from "@/components/(containers)/FieldArray";

interface GuarantorFieldArrayProps
  extends Omit<FieldArrayProps, "name" | "label" | "placeholder"> {
  name?: string;
  label?: string;
  placeholder?: string;
}

export function GuarantorFieldArray({
  name = "guarantorsArray",
  label = "Guarantor(s)",
  placeholder = "Full name",
  ...rest
}: GuarantorFieldArrayProps) {
  return (
    <FieldArray
      name={name}
      label={label}
      placeholder={placeholder}
      minItems={rest.minItems ?? 1}
      {...rest}
    />
  );
}
