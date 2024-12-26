"use client";

import { LoginForm } from "@/components/context/LoginForm";

export default function LoginPage() {
  const handleSuccess = () => {
    console.log("Login successful!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <LoginForm onSuccess={handleSuccess} />
    </div>
  );
}
