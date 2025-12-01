'use client'
import { useState } from "react";
import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import {RadioGroup, Radio} from "@heroui/radio";

export const Landscaping = () => {
    const [tenants, setTenants] = useState<string[]>([""]);
    const [guarantors, setGuarantors] = useState<string[]>([""]);

  return (
    <SubjectContainer title="Landscaping">
      <RadioGroup label="Watering" defaultValue="Landlord">
      <Radio value="Landlord">Landlord</Radio>
      <Radio value="Tenant">Tenant</Radio>
    </RadioGroup>
    </SubjectContainer>
  );
}