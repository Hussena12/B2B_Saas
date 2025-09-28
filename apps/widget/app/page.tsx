"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getmany);
  const addUsers = useMutation(api.users.add);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">apps/widget</h1>
        <Button onClick={() => addUsers()}>add</Button>
        <div className="max-w-sm w-full mx-auto">
          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </div>
  );
}
