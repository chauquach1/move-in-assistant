'use client'
import { useState } from "react";
import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import { TextInput } from "../(inputs)/TextInput";
import { DatePicker } from "@heroui/date-picker";
import { TenantFieldArray } from "./TenantFieldArray";
import { GuarantorFieldArray } from "./GuarantorFieldArray";

export const LeaseTermDetails = () => {
    const [tenants, setTenants] = useState<string[]>([""]);
    const [guarantors, setGuarantors] = useState<string[]>([""]);

  return (
    <SubjectContainer title="Lease Term Details">
      <TextInput subject="Unit Code" />
      <TextInput subject="Property Code" />
      <DatePicker label="Lease Start Date" />
      <DatePicker label="Lease End Date" />
      <TenantFieldArray values={tenants} onChange={setTenants} />
      <GuarantorFieldArray values={guarantors} onChange={setGuarantors} />
    </SubjectContainer>
  );
}