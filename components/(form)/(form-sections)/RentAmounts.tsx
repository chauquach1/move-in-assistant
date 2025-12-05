'use client'
import { useState } from "react";
import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import { MoneyInput } from "../(inputs)/MoneyInput";
import { TextInput } from "../(inputs)/TextInput";
import { DateInput } from "@heroui/react";

export const RentAmounts = () => {

  return (
    <SubjectContainer title="Rent Amounts">
      <div className="flex flex-col col-span-2 gap-3">
        <MoneyInput subject="Base Rent" />
        <MoneyInput subject="Parking Rent" />
        <TextInput
          subject="Parking Spot #"
          actualName="parkingLocation"
          placeholder="N/A"
          labelPlacement="outside-top"
          defaultValue="N/A"
        />
        <MoneyInput subject="Storage Rent" />
        <TextInput
          subject="Storage #"
          actualName="storageLocation"
          placeholder="N/A"
          labelPlacement="outside-top"
          defaultValue="N/A"
        />
        <MoneyInput subject="RUBS" />
        <MoneyInput subject="Pet Rent" />
        <MoneyInput subject="Monthly Total" />
        <MoneyInput subject="Prorated" />
        <DateInput name="proratedRentDueDate" label="Due Date" />
      </div>
    </SubjectContainer>
  );
}