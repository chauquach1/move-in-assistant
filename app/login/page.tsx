"use client";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      // Ensure server-side cookies are set for SSR by informing the server of the session
      await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "SIGNED_IN", session: data.session }),
      });

      router.push("/dashboard");
    }
  };
  return (
    <div className="h-full w-full flex items-center justify-center">
      <form className="flex flex-col gap-2 w-max" onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          labelPlacement={"inside"}
          className="min-w-sm"
          size={"lg"}
          isClearable={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          labelPlacement={"inside"}
          size={"lg"}
          className="min-w-sm"
          isClearable={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
