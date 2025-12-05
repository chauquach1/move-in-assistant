import { Input, InputProps } from "@heroui/input";
import { FC, useMemo } from "react";

interface TextInputProps extends Omit<InputProps, "label" | "name"> {
  subject: string;
  actualName?: string;
}

export const TextInput: FC<TextInputProps> = ({ subject, actualName, ...props }) => {
  // Compute a human-friendly label from the subject
  const label = useMemo(() => {
    if (subject.indexOf(" ") === -1) {
      return subject.charAt(0).toUpperCase() + subject.slice(1);
    } else {
      return subject
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
  }, [subject]);

  // Render HeroUI Input with smart defaults and a normalized name
  return (
    <Input
      {...props}
      name={actualName ?? subject.toLowerCase().replace(/\s+/g, "_")}
      label={label}
      variant={props.variant ?? "bordered"}
      radius={props.radius ?? "sm"}
      size={props.size ?? "sm"}
      isClearable={props.isClearable ?? true}
      type={props.type ?? "text"}
      // className={props.className ?? "max-w-md"}
    />
  );
};
