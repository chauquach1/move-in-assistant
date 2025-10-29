import {Input} from '@heroui/input';
import {Button, ButtonGroup} from "@heroui/button";

export default function Dashboard() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex w-full gap-4">
          <div className="w-full border p-4 rounded-lg">
            <h1 className="underline mb-4">Unit/Property Details</h1>
            <Input 
              name="unitId"
              label="Unit Id"
              placeholder="Enter Unit Display ID"
              className="mb-4"
            />
            <Input name="unitShortname" label="City" placeholder="Enter city" className="mb-4" />
            <Input name="propertyAddress" label="Property Address" placeholder="Enter property address" className="mb-4" />

            <Button
              color='primary'
            >
              Button
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
