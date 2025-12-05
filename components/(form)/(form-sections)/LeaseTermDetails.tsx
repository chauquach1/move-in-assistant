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
      <DatePicker name="leaseStartDate" label="Lease Start Date" />
      <DatePicker name="LeaseEndDate" label="Lease End Date" />
      <div className="flex flex-col col-span-2 gap-3 w-full">
        <TenantFieldArray values={tenants} onChange={setTenants} />
        <GuarantorFieldArray values={guarantors} onChange={setGuarantors} />
      </div>
    </SubjectContainer>
  );
}