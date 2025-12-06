"use client";

import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import { cn } from "@heroui/react";
import { Switch } from "@heroui/switch";
import { Select, SelectItem } from "@heroui/select";
import type { FC } from "react";

const YN_QUESTION_LABELS = {
  bbq: "BBQ's Allowed",
  ab1482: "AB 1482",
  sharedwh: "Shared W/H",
  floodZone: "Flood Zone",
  construction: "Construction",
  thirdPartyUtility: "3rd Party Utility",
} as const;

const LAUNDRY_OPTIONS = {
  shared: "Shared",
  hookups: "Hookups",
  washerOnly: "Washer Only",
  dryerOnly: "Dryer Only",
  stackable: "Stackable",
  inUnit: "In-Unit",
  common: "Common Area",
  notMaintained: "Not Maintained by Landlord",
  na: "N/A",
  misc: "See Misc Notes",
} as const;

const AC_TYPES = {
  central: "Central Air",
  mini: "Mini Split",
  window: "Window",
  wall: "Wall",
  none: "None",
} as const;

export const GeneralInformation: FC = () => {
  return (
    <SubjectContainer title="General Information" className="gap-6">
      {/* Yes/No switches */}
        {Object.entries(YN_QUESTION_LABELS).map(([key, label]) => (
          <Switch
            key={key}
            name={`geninfo_${key}`}
            classNames={{
              base: cn("inline-flex flex-row-reverse gap-2"),
            }}
            defaultChecked={false}
          >
            <p>{label}</p>
          </Switch>
        ))}

      {/* Select fields */}
        <Select
          name="gi_laundry"
          label="Laundry"
          className="max-w-xs"
          defaultSelectedKeys={new Set(["shared"])}
        >
          {Object.entries(LAUNDRY_OPTIONS).map(([key, label]) => (
            <SelectItem key={key}>{label}</SelectItem>
          ))}
        </Select>

        <Select
          name="gi_acType"
          label="A/C Type"
          className="max-w-xs"
          defaultSelectedKeys={new Set(["none"])}
        >
          {Object.entries(AC_TYPES).map(([key, label]) => (
            <SelectItem key={key}>{label}</SelectItem>
          ))}
        </Select>
    </SubjectContainer>
  );
};
