"use client";

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function DemoClientComponent() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.log("no-user");
        redirect("/");
      } else {
        setUser(data.user);
      }
    }
    getUser();
  }, []);
  return <div>DemoClientComponent</div>;
}
