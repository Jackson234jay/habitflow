import { useState } from "react";
import { supabase } from "../utils/supabase";
import { Eye, EyeOff, Mail, User, Lock, ArrowRight } from "lucide-react";
import ExtAuth from "./ExtAuth";
import { useNavigate } from "react-router";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSignup = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    setLoading(false);

    if (error) return alert(error.message);

    alert("Check your email for a confirmation link (if enabled).");
    navigate("/check-email");
  };
  return (
    <>
      <form onSubmit={handleSignup} className="space-y-4 w-full">
        <div>
          <label
            htmlFor="fullName"
            className="label font-medium font-sans text-neutral-content text-sm"
          >
            Full Name
          </label>
          <div className="input font-sans font-normal bg-base-300 border border-transparent focus-within:ring-primary-content focus-within:ring-2  focus-within:ring-offset-0 focus-within:outline-none">
            <User className="text-neutral-content" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full "
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="label font-sans font-medium text-sm text-neutral-content"
          >
            Email
          </label>
          <div className="input font-sans font-normal bg-base-300 border border-transparent focus-within:ring-primary-content focus-within:ring-2  focus-within:ring-offset-0 focus-within:outline-none">
            <Mail className="text-neutral-content" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <label
            htmlFor="confirmpassword"
            className="label font-sans font-medium text-sm text-neutral-content"
          >
            Confirm Password
          </label>
          <div className="input font-sans font-normal bg-base-300 border border-transparent focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-primary-content">
            <Lock className="text-neutral-content" />
            <input
              required
              id="confirmpassword"
              name="confirmpassword"
              className="placeholder:text-xl"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="........"
              type={showConfirmPassword ? "text" : "password"}
            />
            <label className="swap">
              <input
                type="checkbox"
                checked={showConfirmPassword}
                onChange={() => setShowConfirmPassword((s) => !s)}
                className="hidden"
                aria-label={
                  showConfirmPassword
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              />
              <Eye className="swap-off  text-neutral-content" />
              <EyeOff className="swap-on text-neutral-content" />
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="btn bg-primary-content outline-none border-transparent w-full text-white my-4"
          >
            Create Account <ArrowRight />
          </button>
        </div>
      </form>
      <ExtAuth />
    </>
  );
};

export default Signup;
