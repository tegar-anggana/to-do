"use client";
import { useState } from "react";
import { signup } from "./actions";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError(""); // Clear any previous errors

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const result = await signup(formData);

    if (result) {
      setError(result.error); // Set error message
    } else {
      setError("");
    }
  };

  return (
    <form action={handleSignup}>
      <div className="flex flex-col p-5 w-full items-center gap-4">
        <h1 className="text-3xl">Register</h1>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Display error message */}
        <div>
          <div>
            <label htmlFor="email">Email:</label>
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-slate-600 p-2 rounded-lg"
          />
        </div>
        <div>
          <div>
            <label htmlFor="password">Password:</label>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-slate-600 p-2 rounded-lg"
          />
        </div>
        <div className="mx-auto">
          <button
            // onClick={handleSignup}
            className="border-2 border-slate-600 px-2 py-1 rounded-lg text-lg mt-3"
          >
            Register
          </button>
        </div>
        <div>
          <p>
            Already have an account?{" "}
            <Link href={"/login"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}
