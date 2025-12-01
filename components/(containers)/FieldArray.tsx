import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useId } from "react";
import type { ReactNode, ChangeEvent } from "react";

export interface FieldArrayProps {
  /** Unique base name for inputs: e.g., "tenants" → tenants[0], tenants[1], ... */
  name: string;
  /** Section label shown above the list */
  label?: string;
  /** Current values */
  values: string[];
  /** Called whenever the list changes */
  onChange: (next: string[]) => void;
  /** Placeholder for each input */
  placeholder?: string;
  /** Minimum/maximum items (UI enforced) */
  minItems?: number;
  maxItems?: number;
  /** Disable whole block */
  disabled?: boolean;
  /** Optional custom row renderer (fallback is a HeroUI <Input/>) */
  renderItem?: (args: {
    value: string;
    index: number;
    name: string;
    onItemChange: (next: string) => void;
  }) => ReactNode;
  /** Extra classes */
  className?: string;
}

export function FieldArray({
  name,
  label,
  values,
  onChange,
  placeholder,
  minItems = 0,
  maxItems,
  disabled,
  renderItem,
  className,
}: FieldArrayProps) {
  const baseId = useId();

  const addItem = () => {
    if (maxItems && values.length >= maxItems) return;
    onChange([...values, ""]);
  };

  const removeItem = (idx: number) => {
    if (values.length <= (minItems ?? 0)) return;
    const next = values.slice();
    next.splice(idx, 1);
    onChange(next);
  };

  const changeItem = (idx: number, nextVal: string) => {
    const next = values.slice();
    next[idx] = nextVal;
    onChange(next);
  };

  return (
    <div className={`flex flex-col w-full gap-3 ${className ?? ""}`}>
      {label && <h3 className="text-lg font-semibold">{label}</h3>}

      <div className="flex flex-col gap-2">
        {values.map((value, i) => {
          const itemName = `${name}[${i}]`;
          const onItemChange = (v: string) => changeItem(i, v);

          return (
            <div key={`${baseId}-${i}`} className="flex items-start gap-2">
              {renderItem ? (
                renderItem({ value, index: i, name: itemName, onItemChange })
              ) : (
                <Input
                  name={itemName}
                  // label={`#${i + 1}`}
                  value={value}
                  size="sm"
                  radius="sm"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onItemChange(e.target.value)
                  }
                  placeholder={placeholder}
                  isDisabled={disabled}
                  className="flex-1"
                />
              )}

              <Button
                type="button"
                variant="flat"
                size="sm"
                radius="sm"
                isDisabled={disabled || values.length <= minItems}
                onPress={() => removeItem(i)}
              >
                X
              </Button>
            </div>
          );
        })}
      </div>

      <div>
        <Button
          type="button"
          variant="bordered"
          size="sm"
          radius="sm"
          isDisabled={disabled || (maxItems ? values.length >= maxItems : false)}
          onPress={addItem}
          startContent="x"
        >
          Add
        </Button>
      </div>
    </div>
  );
}
