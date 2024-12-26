'use client';

import { useRouter } from 'next/navigation'; // Correct import for App Router
import { RegisterForm } from '@/components/context/RegisterForm'; // Form component import

export default function RegisterPage() {
  const router = useRouter(); // Router instance for navigation

  const handleSuccess = () => {
    console.log('User registered successfully');
    router.push('/dashboard'); // Redirect user to the dashboard after successful registration
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <RegisterForm onSuccess={handleSuccess} /> {/* Pass success handler */}
    </div>
  );
}
