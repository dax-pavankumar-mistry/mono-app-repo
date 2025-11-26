"use client";

import { Button } from "@myorg/ui";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Full App</h1>
      <Button onClick={() => alert("Full app button clicked!")}>
        Go to Dashboard
      </Button>
    </main>
  );
}
