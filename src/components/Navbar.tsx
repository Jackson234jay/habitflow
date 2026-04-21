import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <div
        className={`
          fixed md:static top-0 left-0 h-screen w-64 bg-base-100 shadow-sm z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-4 flex items-center gap-3 font-bold bg-base-200">
          <span className="w-8 h-8 rounded-xl text-sm shadow-lg shadow-primary flex bg-primary-content text-white items-center justify-center">
            H
          </span>
          HabitFlow
        </div>

        <nav className="p-4 space-y-3">
          <a className="block p-2 hover:bg-base-200 rounded">Home</a>
          <a className="block p-2 hover:bg-base-200 rounded">Dashboard</a>
          <a className="block p-2 hover:bg-base-200 rounded">Settings</a>
        </nav>
      </div>

      {/* RIGHT SIDE (TOPBAR + CONTENT) */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <div className="flex items-center justify-between p-4 bg-base-200">
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu />
          </button>
          <div>Profile</div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">Your content here</div>
      </div>

      {/* OVERLAY (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
