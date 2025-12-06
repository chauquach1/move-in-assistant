"use client";
import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import { cn } from "@heroui/react";
import {Switch} from "@heroui/switch";
import { TextInput } from "../(inputs)/TextInput";

export const HOA = () => {

  return (
    <SubjectContainer title="HOA">
      <div className="flex flex-col gap-2">
        <div className="inline-flex gap-2">
          <Switch
            name="hoaExists"
            classNames={{
              base: cn("inline-flex flex-row-reverse gap-2"),
            }}
            defaultChecked={false}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <span className={className}>Y</span>
              ) : (
                <span className={className}>N</span>
              )
            }
          >
            <p>HOA?</p>
          </Switch>
          <TextInput
            subject="HOA Name"
            labelPlacement="inside"
            variant="flat"
            className="border-none"
          />
        </div>
        <Switch
          name="hoaParkingPass"
          classNames={{
            base: cn("inline-flex flex-row-reverse gap-2"),
          }}
          defaultChecked={false}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <span className={className}>Y</span>
            ) : (
              <span className={className}>N</span>
            )
          }
        >
          <p>Parking Pass?</p>
        </Switch>
        <Switch
          name="hoaRulesProvided"
          classNames={{
            base: cn("inline-flex flex-row-reverse gap-2"),
          }}
          defaultChecked={false}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <span className={className}>Y</span>
            ) : (
              <span className={className}>N</span>
            )
          }
        >
          <p>Rules/Regulations Provided?</p>
        </Switch>
      </div>
    </SubjectContainer>
  );
}