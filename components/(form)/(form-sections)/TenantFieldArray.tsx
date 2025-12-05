import { FieldArray, type FieldArrayProps } from "@/components/(containers)/FieldArray";

interface TenantFieldArrayProps
  extends Omit<FieldArrayProps, "name" | "label" | "placeholder"> {
  name?: string;
  label?: string;
  placeholder?: string;
}

export function TenantFieldArray({
  name = "tenantsArray",
  label = "Tenant(s)",
  placeholder = "Full name",
  ...rest
}: TenantFieldArrayProps) {
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
      