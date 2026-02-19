import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TreePine } from "lucide-react";

const navLinks = [
  { to: "/", label: "หน้าแรก" },
  { to: "/activities", label: "กิจกรรม" },
  { to: "/camp-info", label: "แนะนำค่าย" },
  { to: "/about", label: "เกี่ยวกับเรา" },
  { to: "/contact", label: "ติดต่อเรา" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo area */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <TreePine className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-foreground">
              {/* ชื่อกลุ่ม - เติมทีหลัง */}
              [ชื่อกลุ่ม]
            </span>
            <span className="text-xs text-muted-foreground">ค่ายอนุรักษ์สิ่งแวดล้อม</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-foreground hover:bg-secondary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
