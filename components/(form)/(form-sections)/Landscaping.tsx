"use client";
import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import { RadioGroup, Radio } from "@heroui/radio";
import { Switch } from "@heroui/switch";
import React, { forwardRef, useId } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Select, SelectSection, SelectItem } from "@heroui/select";

export const Landscaping = () => {
  return (
    <SubjectContainer title="Landscaping">
      <div className="grid grid-cols-1 grid-rows-2 col-span-2 gap-4">
        <Switch
          name="landscapingWatering"
          className="inline-flex flex-row-reverse gap-2"
          defaultChecked={false}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <span className={className}>T</span>
            ) : (
              <span className={className}>L</span>
            )
          }
        >
          <p>Watering</p>
        </Switch>
        <Switch
          name="landscapingMaintenance"
          className="inline-flex flex-row-reverse gap-2"
          defaultChecked={false}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <span className={className}>T</span>
            ) : (
              <span className={className}>L</span>
            )
          }
        >
          <p>Maintenance</p>
        </Switch>
      </div>
    </SubjectContainer>
  );
};