// import {Input} from '@heroui/input';

// export function TextInput(subject: string) {

//   let labelNew: String;

//   if (subject.includes(' ')) {
//     const words = subject.split(' ');
//     labelNew = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   } else {
//     labelNew = subject.charAt(0).toUpperCase() + subject.slice(1);
//   }

//   return (
//     <Input
//       name={subject}
//       label={labelNew}
//     />
//   );
// }

import { Input, InputProps } from "@heroui/input";
import { FC, useMemo } from "react";

interface TextInputProps extends Omit<InputProps, "label" | "name"> {
  subject: string;
}

export const TextInput: FC<TextInputProps> = ({ subject, ...props }) => {
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
      name={subject.toLowerCase().replace(/\s+/g, "_")}
      label={label}
      variant={props.variant ?? "bordered"}
      radius={props.radius ?? "md"}
      size={props.size ?? "md"}
      isClearable={props.isClearable ?? true}
      className={props.className ?? "max-w-md"}
    />
  );
};
