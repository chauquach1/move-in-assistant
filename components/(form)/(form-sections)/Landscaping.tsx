'use client'
import { useState } from "react";
import { SubjectContainer } from "@/components/(containers)/SubjectContainer";
import {RadioGroup, Radio} from "@heroui/radio";

export const Landscaping = () => {
    const [tenants, setTenants] = useState<string[]>([""]);
    const [guarantors, setGuarantors] = useState<string[]>([""]);

  return (
    <SubjectContainer title="Landscaping">
      <div className="grid grid-cols-1 grid-rows-2 col-span-2 gap-4">
        <RadioGroup label="Watering" defaultValue="Landlord">
          <Radio value="Landlord">Landlord</Radio>
          <Radio value="Tenant">Tenant</Radio>
        </RadioGroup>
        <RadioGroup label="Maintenance" defaultValue="Landlord">
          <Radio value="Landlord">Landlord</Radio>
          <Radio value="Tenant">Tenant</Radio>
        </RadioGroup>
      </div>
    </SubjectContainer>
  );
}