import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import ExtAuth from "./ExtAuth";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <form className="space-y-4 w-full">
        <div>
          <label
            htmlFor="email"
            className="label font-sans font-medium text-sm text-neutral-content"
          >
            Email
          </label>
          <div className="input font-sans font-normal bg-base-300 border border-transparent focus-within:ring-primary-content focus-within:ring-2  focus-within:ring-offset-0  focus-within:outline-none">
            <Mail className="text-neutral-content" />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full"
              placeholder="mail@site.com"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="label font-sans font-medium text-sm text-neutral-content"
          >
            Password
          </label>
          <div className="input font-sans font-normal bg-base-300 border border-transparent focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-primary-content">
            <Lock className="text-neutral-content" />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              className="placeholder:text-xl w-full"
              placeholder="........"
            />
            <label className="swap">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword((s) => !s)}
                // className="hidden"
                aria-label={showPassword ? "Hide password" : "Show password"}
              />
              <Eye className="swap-off  text-neutral-content" />
              <EyeOff className="swap-on text-neutral-content" />
            </label>
          </div>
        </div>
      </form>
      <ExtAuth />
    </>
  );
};

export default Login;
