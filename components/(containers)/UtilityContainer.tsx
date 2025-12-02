"use client";
import React, { forwardRef, useId } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Switch } from "@heroui/switch";
import {Select, SelectSection, SelectItem} from "@heroui/select";

type UtilityKey = "water" | "sewer" | "trash" | "electricity" | "gas";

interface UtilityContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  /** Required so names are consistent regardless of display title */
  utilityType: UtilityKey;
  children?: ReactNode;
}

const UTILITY_LABELS: Record<UtilityKey, string> = {
  water: "Water",
  sewer: "Sewer",
  trash: "Trash/Recycling",
  electricity: "Electricity",
  gas: "Gas",
};

const BILLING_METHODS = [
  { key: "direct", label: "Direct Billing" },
  { key: "submetering", label: "Submetering" },
  { key: "landlord", label: "Landlord Expense" },
  { key: "tenant", label: "Tenant Ledger" },
  { key: "formulaSqft", label: "Formula: Sq. Footage" },
  { key: "formulaOccupants", label: "Formula: Occupants" },
] as const;

const COMMON_AREA = [
  { key: "yes", label: "Yes" },
  { key: "no", label: "No" },
  { key: "n/a", label: "N/A" },
] as const;

export const UtilityContainer = forwardRef<HTMLDivElement, UtilityContainerProps>(
  ({ title, utilityType, children, className, id, ...props }, ref) => {
    const fallbackId = useId();
    const baseId = id ?? `utility-${utilityType}-${fallbackId}`;
    const label = UTILITY_LABELS[utilityType];
    const nameSuffix = utilityType; // stable suffix for form names

    return (
      <div
        ref={ref}
        id={baseId}
        aria-labelledby={`${baseId}-title`}
        className={`flex flex-col w-max min-w-min min-h-full gap-4 border p-3 rounded-md ${className ?? ""}`}
        {...props}
      >
        <h2 id={`${baseId}-title`} className="text-2xl font-semibold">
          {title || label}
        </h2>

        {/* Customer of Record */}
        <Switch
          name={`customerOfRecord_${nameSuffix}`}
          className="inline-flex flex-row-reverse gap-2"
        >
          <p>Customer of Record?</p>
        </Switch>

        {/* Charged to Resident */}
        <Switch
          name={`chargedToTenant_${nameSuffix}`}
          className="inline-flex flex-row-reverse gap-2"
        >
          <p>Charged to Resident?</p>
        </Switch>

        {/* Billing Method */}
        <Select
          name={`billingMethod_${nameSuffix}`}
          className="max-w-xs"
          label="Method of Billing"
          defaultSelectedKeys={new Set(["direct"])}
        >
          {BILLING_METHODS.map((m) => (
            <SelectItem key={m.key}>{m.label}</SelectItem>
          ))}
        </Select>

        {/* Common Area Included */}
        <Select
          name={`commonAreaIncluded_${nameSuffix}`}
          className="max-w-xs"
          label="Common area included"
          defaultSelectedKeys={new Set(["no"])}
        >
          {COMMON_AREA.map((o) => (
            <SelectItem key={o.key}>{o.label}</SelectItem>
          ))}
        </Select>

        {children}
      </div>
    );
  }
);

UtilityContainer.displayName = "UtilityContainer";
