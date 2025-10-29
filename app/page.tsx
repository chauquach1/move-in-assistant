// import { Input } from "@heroui/input";
// import { Calendar } from "@heroui/calendar";

export default function Home() {
  const colors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <div className="w-full flex flex-row flex-wrap gap-4">
          {colors.map((color) => (
            <Input
              key={color}
              className="max-w-[220px]"
              color={color}
              defaultValue="junior@heroui.com"
              label="Email"
              placeholder="Enter your email"
              type="email"
            />
          ))}
        </div>  
        <Calendar className="mt-16" /> */}
      </main>
    </div>
  );
}
