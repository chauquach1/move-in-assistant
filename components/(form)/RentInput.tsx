import { Input, InputProps } from "@heroui/input";
import { FC, useMemo } from "react";

interface RentInputProps extends Omit<InputProps, "label" | "name"> {
  subject: string;
}

export const RentInput: FC<RentInputProps> = ({ subject, ...props }) => {
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
      variant={props.variant ?? "bordered"}
      radius={props.radius ?? "sm"}
      size={props.size ?? "sm"}
      isClearable={props.isClearable ?? true}
      className={props.className ?? "max-w-xs"}
      placeholder="0.00"
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">$</span>
        </div>
      }
      type="number"
    />
  );
};
