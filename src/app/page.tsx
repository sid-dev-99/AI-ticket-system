'use client';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/chatbot");
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center  bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">Welcome to our Museum</h1>
        <p className="mt-4 text-muted-foreground">Hey I am kira, Let me get you started with booking your tickets.</p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button
            type = "submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Book Tickets
          </Button>
        </form>
      </div>
    </div>
  );
}
