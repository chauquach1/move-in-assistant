'use client'
import { useState } from "react";
import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import { MoneyInput } from "../(inputs)/MoneyInput";
import { DatePicker } from "@heroui/date-picker";
import { TenantFieldArray } from "./TenantFieldArray";
import { GuarantorFieldArray } from "./GuarantorFieldArray";

export const RentAmounts = () => {
    const [tenants, setTenants] = useState<string[]>([""]);
    const [guarantors, setGuarantors] = useState<string[]>([""]);

  return (
    <SubjectContainer title="Rent Amounts">
      <MoneyInput subject="Base" />
      <MoneyInput subject="Parking" />
      <MoneyInput subject="Storage" />
      <MoneyInput subject="RUBS" />
      <MoneyInput subject="Pet Rent" />
      <MoneyInput subject="Monthly Total" />
      <MoneyInput subject="Prorated" />
    </SubjectContainer>
  );
}