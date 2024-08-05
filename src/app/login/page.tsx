"use client";
import { useState } from "react";
import { login, signup } from "./actions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const result = await login(formData);

    if (result.error) {
      setError(result.error); // Set error message
    } else {
      setError("");
      setSuccess("Login successful!"); // Set success message
    }
  };

  const handleSignup = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setError(""); // Clear any previous errors
    setSuccess(""); // Clear any previous success messages

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const result = await signup(formData);

    if (result?.error) {
      setError(result?.error); // Set error message
    } else {
      setError("");
      setSuccess("Signup successful!"); // Set success message
    }
  };

  return (
    <form>
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Display error message */}
      {success && <p className="text-red-500">{success}</p>}{" "}
      {/* Display success message */}
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>
        Log in
      </button>
      <button type="submit" onClick={handleSignup}>
        Sign up
      </button>
    </form>
  );
}
