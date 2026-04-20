import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import ExtAuth from "./ExtAuth";
import { supabase } from "../utils/supabase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [message]);
  const navigate = useNavigate();
  const handleSignIn = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      setMessage({ text: error.message, type: "error" });
      return;
    }

    navigate("/dashboard");
  };
  return (
    <>
      <form onSubmit={handleSignIn} className="space-y-4 w-full">
        {message && (
          <div
            className={`alert ${
              message.type === "error" ? "alert-error" : "alert-success"
            }`}
          >
            <span>{message.text}</span>
          </div>
        )}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="flex justify-end">
          <a href="/" className="text-primary-content">
            Forgot password?
          </a>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="btn bg-primary-content outline-none border-transparent w-full text-white my-4"
          >
            Sign In <ArrowRight />
          </button>
        </div>
      </form>
      <ExtAuth />
    </>
  );
};

export default Login;
