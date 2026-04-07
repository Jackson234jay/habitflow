import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

const AuthPage = () => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center px-4">
      <div className="w-full max-w-md my-4 space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl text-[24px] shadow-lg shadow-primary flex bg-primary-content items-center mx-auto mb-4 justify-center">
            <h1 className=" text-white font-bold">H</h1>
          </div>
          <h1 className="text-2xl font-bold">HabitFlow</h1>
          <p className="text-sm text-neutral-content">
            Build better habits, one day at a time
          </p>
        </div>
        <div className="card bg-white w-full mx-auto max-w-md  shadow-lg">
          <div className="card-body p-6 space-y-4">
            <div className="tabs flex justify-center tabs-border w-full transition-all duration-300 [--tabs-border-primary]">
              <button
                className={`tab ${mode === "signin" ? "tab-active" : ""}`}
                onClick={() => setMode("signin")}
              >
                Sign In
              </button>
              <button
                className={`tab ${mode === "signup" ? "tab-active" : ""}`}
                onClick={() => setMode("signup")}
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4">
              {mode === "signin" ? <Login /> : <Signup />}
            </div>
          </div>
        </div>
        <p className="text-xs text-center text-neutral-content">
          By continuing, you agree to HabitFlow's Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
