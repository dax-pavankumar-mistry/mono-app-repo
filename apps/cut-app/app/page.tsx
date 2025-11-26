"use client";

import { Button } from "@daxwell/ui";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Cut App</h1>
      <Button variant="secondary" onClick={() => alert("Cut app button!")}>
        View Orders
      </Button>
    </main>
  );
}
