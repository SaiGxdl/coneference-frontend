// src/components/Header.jsx
import React from "react";
import { FiSun, FiMoon, FiSearch, FiGithub } from "react-icons/fi";
import { RiDashboardFill } from "react-icons/ri";

export default function Header() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = stored ? stored === "dark" : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      if (prefersDark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch (e) {
      // ignore if localStorage not available
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  return (
    <header className="header" role="banner" aria-label="Top navigation">
      <div className="brand" role="heading" aria-level="1">
        <div className="logo" aria-hidden="true"><RiDashboardFill size={22} /></div>
        <div>
          <h1>Employee & Task Dashboard</h1>
          <div className="small">React + Vite — Mock data</div>
        </div>
      </div>

      <div className="header-right">
        <div className="controls" role="toolbar" aria-label="Header controls">
          <button className="icon-btn" title="Search (dev)" aria-label="search">
            <FiSearch size={18}/>
          </button>

          <button
            className="icon-btn"
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <a className="icon-btn" href="https://github.com" target="_blank" rel="noreferrer" title="Repo" aria-label="GitHub repo">
            <FiGithub size={18}/>
          </a>
        </div>
      </div>
    </header>
  );
}
