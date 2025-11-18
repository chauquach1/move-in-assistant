import { Form } from "@heroui/form";
import { LeaseTermDetails } from "./(form)/(form-sections)/LeaseTermDetails";

export const LeaseSummaryForm = ({...props }) => {
  return (
    <Form id="lease-summary-form" {...props}>
      <h1 className="text-2xl font-bold mb-4">Lease Summary Form</h1>
      <div className="flex flex-col min-w-full min-h-full gap-2">
        <LeaseTermDetails />
      </div>
    </Form>
  );
};
