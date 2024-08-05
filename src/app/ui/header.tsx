import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between py-4 px-10 items-center">
      <div className="text-2xl">
        <Link href={"/todo"}>ToDo App</Link>
      </div>
      <div className="text-lg">
        <Link href={"/todo/profile"}>My Profile</Link>
      </div>
    </div>
  );
}
