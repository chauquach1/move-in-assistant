import { Form } from "@heroui/form";
import { LeaseTermDetails } from "./(form)/(form-sections)/LeaseTermDetails";
import { RentAmounts } from "./(form)/(form-sections)/RentAmounts";
import { Landscaping } from "./(form)/(form-sections)/Landscaping";

export const LeaseSummaryForm = ({...props }) => {
  return (
    <Form id="lease-summary-form" {...props}>
      <h1 className="text-2xl font-bold mb-4">Lease Summary Form</h1>
      <div className="container flex flex-row justify-center min-w-full min-h-full gap-2">
        <LeaseTermDetails />
        <RentAmounts />
        <Landscaping />
      </div>
    </Form>
  );
};
