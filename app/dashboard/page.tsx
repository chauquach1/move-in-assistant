import {Input} from '@heroui/input';
import {Button, ButtonGroup} from "@heroui/button";
import {LeaseSummaryForm} from "../../components/LeaseSummaryForm";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start font-sans ">
      <main className=" h-full w-full flex-col items-center justify-between p-4 bg-gray-500 sm:items-start">
        <LeaseSummaryForm/>
      </main>
    </div>
  );
}
