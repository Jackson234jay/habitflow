import { useState } from "react";
import { Bell, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* TOP BAR */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>

        <div className="flex items-center gap-2">
          <button className="btn btn-ghost">Button</button>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Bell />
            </div>

            <ul className="menu dropdown-content bg-base-200 rounded-box z-10 mt-4 w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-100 shadow-lg z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Links */}
        <nav className="p-4 space-y-3">
          <a className="block p-2 rounded hover:bg-base-200">Home</a>
          <a className="block p-2 rounded hover:bg-base-200">Dashboard</a>
          <a className="block p-2 rounded hover:bg-base-200">Settings</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
