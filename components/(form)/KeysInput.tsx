import { Input, InputProps } from "@heroui/input";
import { FC, useMemo } from "react";

interface KeysInputProps extends Omit<InputProps, "label" | "name"> {
  subject: string;
}

export const KeysInput: FC<KeysInputProps> = ({ subject, ...props }) => {
  // Compute a human-friendly label from the subject
  const label = useMemo(() => {
    return subject
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, [subject]);

  // Render HeroUI Input with smart defaults and a normalized name
  return (
    <Input
      {...props}
      name={subject.toLowerCase().replace(/\s+/g, "_")}
      label={label}
      variant="bordered"
      radius="sm"
      size="sm"
      isClearable={props.isClearable ?? true}
      className="max-w-xs"
      type="number"
    />
  );
};
