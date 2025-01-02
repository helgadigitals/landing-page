import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './../assets/react.svg';
import { routes } from './../lib/routes.tsx';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 bg-primary shadow-md z-50">
        <div className="main-header flex justify-between items-center p-4">
          <div className="logo">
            <Link to="/">
              <img src={logo} className="w-8 h-8" alt="Logo" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                ></path>
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
              onClick={closeMenu}
            ></div>
          )}

          <nav
            className={`fixed top-0 left-0 h-full text-white flex flex-col items-center justify-center transform ${isMenuOpen ? 'translate-x-0 bg-primary text-secondary w-full' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:flex-row md:transform-none md:transition-none z-50`}
          >
            {isMenuOpen && (
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-secondary focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            )}
            <ul className="flex flex-col md:flex-row items-center space-x-4">
              {routes.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white hover:underline"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
