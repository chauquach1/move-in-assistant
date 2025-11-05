import { Form } from "@heroui/form";
import { TextInput } from "./(form)/TextInput";
import { RentInput } from "./(form)/RentInput";
import { KeysInput } from "./(form)/KeysInput";
import { DateInput } from "@heroui/date-input";


export const LeaseSummaryForm = ({...props }) => {
  return (
    <Form>
      <h1 className="text-2xl font-bold mb-4">Lease Summary</h1>
      <div className="flex flex-col min-w-full min-h-full gap-2 border-1 p-4 rounded-lg ">
        <DateInput 
          name="leasePreparedDate" 
          label="Lease Prepared" 
          variant="bordered" 
          radius="sm" 
          size="sm" 
          className="max-w-xs"
        />
        <DateInput 
          name="leaseStartDate" 
          label="Commencement" 
          variant="bordered" 
          radius="sm" 
          size="sm" 
          className="max-w-xs"
        />
        <DateInput 
          name="leaseTerminationDate" 
          label="Termination" 
          variant="bordered" 
          radius="sm" 
          size="sm" 
          className="max-w-xs"
        />
        <RentInput subject="Security Deposit" />
      </div>
    </Form>
  );
};
