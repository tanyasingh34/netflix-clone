"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the login logic
    console.log("Login attempted with:", { email, password, rememberMe });
    // For demo purposes, just redirect to home
    router.push("/");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(https://ext.same-assets.com/3758018731/1869481092.jpeg)`
        }}
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 w-full max-w-sm md:max-w-md px-5">
        <Link href="/" className="block mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="112"
            height="30"
            viewBox="0 0 1024 276.742"
            className="text-primary w-28 mx-auto md:mx-0"
          >
            <path
              d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 74.59 30.27-74.59h47.295z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <div className="bg-black/75 p-8 rounded">
          <h1 className="text-white text-3xl font-semibold mb-6">Sign In</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                className="netflix-input w-full"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="password"
                className="netflix-input w-full"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="netflix-button w-full py-3">
              Sign In
            </button>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/help" className="text-gray-400 hover:underline">
                  Need help?
                </Link>
              </div>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-gray-500">
              New to Netflix?{" "}
              <Link href="/" className="text-white hover:underline">
                Sign up now
              </Link>
              .
            </p>

            <p className="text-gray-500 text-xs mt-4">
              This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
