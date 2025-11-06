"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// =================================================================
// HOME LAYOUT COMPONENT (Aapka original layout code)
// =================================================================

// --- Utility Icons (Inlined SVGs) ---
const IconBars = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconTimes = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const IconUser = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconShoppingCart = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const IconBell = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

// --- NEW ICONS (Aapke request ke mutabiq) ---
const IconChevronLeft = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const IconChevronRight = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const IconLaptop = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l-1.5 4H5.5L4 16"></path>
  </svg>
);

const IconSmartphone = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const IconShirt = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.38 3.46 16 2a4 4 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.22l1.58 7.9A2 2 0 0 0 5.8 15h12.4a2 2 0 0 0 1.94-1.42l1.58-7.9a2 2 0 0 0-1.34-2.22z"></path>
    <line x1="12" y1="2" x2="12" y2="7"></line>
    <line x1="12" y1="15" x2="12" y2="22"></line>
    <line x1="7" y1="12" x2="3.5" y2="10.5"></line>
    <line x1="17" y1="12" x2="20.5" y2="10.5"></line>
  </svg>
);

const IconHome = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IconSparkles = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 3a6 6 0 0 0-6 6c0 4.5 6 11 6 11s6-6.5 6-11a6 6 0 0 0-6-6z" />
    <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);

const IconPuzzle = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.43 12.03c.83.2 1.5.8 1.57 1.6v.1a2 2 0 0 1-2 2h-2.1a1 1 0 0 0-1 1v2.1a2 2 0 0 1-2 2H12a2 2 0 0 1-1.6-.6l-.7-1a1 1 0 0 0-1.4 0l-.7 1a2 2 0 0 1-1.6.6H4a2 2 0 0 1-2-2v-2.1a1 1 0 0 0-1-1H.9a2 2 0 0 1-1.6-1.6l-.1-.2a2 2 0 0 1 .6-1.9l1-1.2c.4-.5.4-1.2 0-1.7l-1-1.2a2 2 0 0 1-.6-1.9l.1-.2A2 2 0 0 1 .9 4.1h2.1a1 1 0 0 0 1-1V.9a2 2 0 0 1 2-2h4.1c.9.2 1.6.8 1.9 1.6l.7 1a1 1 0 0 0 1.4 0l.7-1c.3-.8 1-1.4 1.9-1.6h4.1a2 2 0 0 1 2 2v2.1a1 1 0 0 0 1 1h2.1a2 2 0 0 1 1.6 1.6l.1.2a2 2 0 0 1-.6 1.9l-1 1.2c-.4.5-.4 1.2 0 1.7l1 1.2a2 2 0 0 1 .6 1.9z" />
  </svg>
);

const IconApple = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z"></path>
    <path d="M10 2c1 .5 2 2 2 5"></path>
  </svg>
);

const IconDumbbell = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M14.4 14.4l-4.8 4.8M9.6 14.4l4.8 4.8M14.4 9.6l-4.8-4.8M9.6 9.6l4.8-4.8M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM19 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
  </svg>
);

const IconStar = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
// --- END NEW ICONS ---

function HomeLayout({ children }) {
  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Desktop sidebar state (default open)
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  // Sidebar categories
  const categories = [
    "Mobiles",
    "Laptops",
    "Fashion",
    "Home & Living",
    "Beauty",
    "Toys",
    "Groceries",
    "Sports",
  ];

  return (
    // Added overflow-x-hidden to prevent layout jumps during animation
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* Menu Button (Mobile) */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:scale-105 transition md:hidden"
              aria-label="Open menu"
            >
              <IconBars size={18} />
            </button>

            {/* Menu Button (Desktop) - Toggles desktop sidebar */}
            <button
              onClick={() => setDesktopSidebarOpen(!desktopSidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-700 transition hidden md:flex"
              aria-label="Toggle desktop menu"
            >
              <IconBars size={18} />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer select-none">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow">
                AF
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-extrabold text-gray-800">
                  AF Universal
                </div>
                <div className="text-xs text-gray-500 -mt-0.5">
                  Premium marketplace
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 mx-6">
            <div className="w-full bg-gray-100 border border-gray-200 rounded-full flex items-center px-3 py-1.5 shadow-sm">
              <input
                placeholder="Search products, brands and more..."
                className="bg-transparent outline-none w-full text-sm"
              />
              <button className="ml-3 px-3 py-1 rounded-full bg-purple-600 text-white text-sm font-semibold hover:brightness-95">
                Search
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <IconBell className="text-gray-600" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100 relative">
              <IconShoppingCart className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>
            <button className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100">
              <IconUser className="text-gray-600" />{" "}
              <span className="text-sm">Login</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= SIDEBAR (DESKTOP) ================= */}
      <AnimatePresence>
        {desktopSidebarOpen && (
          <motion.aside
            className="hidden md:flex flex-col w-72 h-screen fixed left-0 top-0 pt-20 pb-6 px-5 bg-gradient-to-b from-indigo-800 via-purple-900 to-indigo-950 text-white shadow-2xl overflow-y-auto z-40"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-2xl font-extrabold text-yellow-300">
                  AF Universal
                </div>
                <div className="text-sm text-white/80 mt-1">
                  VIP deals • fast shipping • trusted sellers
                </div>
              </div>
              <button
                onClick={() => setDesktopSidebarOpen(false)}
                className="p-2 rounded hover:bg-white/10"
                aria-label="Close desktop menu"
              >
                <IconTimes size={18} />
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-3 mb-5 border border-white/20">
              <div className="font-semibold text-yellow-300">⭐ VIP Zone</div>
              <div className="text-xs text-white/80 mt-2">
                Exclusive deals, early access & priority support.
              </div>
              <button className="mt-3 w-full bg-yellow-400 text-black rounded-md py-2 font-semibold hover:bg-yellow-300 transition">
                Join VIP
              </button>
            </div>

            <div>
              <div className="font-medium text-yellow-100 mb-3">Categories</div>
              <div className="space-y-2">
                {categories.map((c) => (
                  <a
                    key={c}
                    href="#"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition text-white/95"
                  >
                    <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-xs font-bold">
                      {c[0]}
                    </div>
                    <div className="font-medium">{c}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <ul className="text-sm space-y-2 text-white/90">
                <li>
                  <a href="#" className="hover:underline">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Coupons
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ================= MOBILE SIDEBAR (DRAWER) ================= */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            {/* Drawer Panel */}
            <motion.aside
              className="fixed z-50 left-0 top-0 bottom-0 w-72 bg-gradient-to-b from-indigo-800 via-purple-900 to-indigo-950 text-white p-5 md:hidden shadow-2xl flex flex-col"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              {/* Header inside Drawer */}
              <div className="flex items-center justify-between mb-5">
                <div className="text-lg font-bold text-yellow-300">
                  AF Universal
                </div>
                <button
                  className="p-2 rounded hover:bg-white/10"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                >
                  <IconTimes size={18} />
                </button>
              </div>

              {/* VIP Zone */}
              <div className="bg-white/10 rounded-xl p-3 mb-4 border border-white/20">
                <div className="text-yellow-300 font-semibold">⭐ VIP Zone</div>
                <div className="text-xs text-white/80 mt-2">
                  Exclusive deals & early access
                </div>
                <button className="mt-3 w-full bg-yellow-400 text-black rounded-md py-2 font-semibold hover:bg-yellow-300 transition">
                  Join VIP
                </button>
              </div>

              {/* Category Links */}
              <div className="space-y-2 overflow-y-auto">
                {categories.map((c) => (
                  <a
                    key={c}
                    href="#"
                    className="flex items-center gap-3 p-2 rounded hover:bg-white/10 transition"
                  >
                    <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-xs font-bold">
                      {c[0]}
                    </div>
                    <div className="font-medium">{c}</div>
                  </a>
                ))}
              </div>

              {/* Added links to mobile sidebar */}
              <div className="mt-auto pt-6 border-t border-white/10">
                <ul className="text-sm space-y-2 text-white/90">
                  <li>
                    <a href="#" className="hover:underline">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Coupons
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ================= MAIN CONTENT ================= */}
      <div
        className={`pt-20 transition-all duration-300 ease-in-out ${
          desktopSidebarOpen ? "md:pl-72" : "md:pl-0"
        }`}
      >
        {children}
      </div>

      {/* ================= FOOTER ================= */}
      <footer
        className={`mt-12 bg-gray-900 text-gray-200 transition-all duration-300 ease-in-out ${
          desktopSidebarOpen ? "md:pl-72" : "md:pl-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl font-bold text-white">AF Universal</div>
            <p className="mt-2 text-sm text-gray-300">
              Premium shopping — trusted sellers, fast shipping, easy returns.
            </p>
          </div>

          <div>
            <div className="font-semibold text-white mb-2">Customer Care</div>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Track Order</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-2">Categories</div>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>Mobiles</li>
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white mb-2">Follow Us</div>
            <div className="flex items-center gap-3">
              <IconHeart className="text-pink-500" />
              <IconUser />
            </div>
            <div className="text-xs text-gray-400 mt-4">
              © {new Date().getFullYear()} AF Universal
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// =================================================================
// HOME PAGE COMPONENT (Saari changes yahan hain)
// =================================================================

/* Helper: simple countdown hook */
function useCountdown(endAtISO) {
  const end = new Date(endAtISO).getTime();
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, end - Date.now()));
  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(Math.max(0, end - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [end]);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  return { days, hours, minutes, seconds, expired: timeLeft <= 0 };
}

/* Local IconHeart component */
const IconHeart = ({ size = 20, className = "text-pink-500" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

// --- NEW Reusable Product Card Component ---
const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <img
        src={product.img}
        className="w-full h-44 object-cover"
        alt={product.title}
      />
      <div className="p-4">
        {/* NEW: Category aur Rating */}
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-purple-600 font-semibold uppercase">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <IconStar className="text-yellow-500" />
            <span className="text-sm font-medium text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>

        <div className="font-medium text-gray-800 truncate">{product.title}</div>
        <div className="mt-2 flex items-center gap-3">
          <div className="text-lg font-bold text-purple-700">
            ${product.price}
          </div>
          <div className="text-sm line-through text-gray-400">
            ${product.off}
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="flex-1 btn-primary">Add to Cart</button>
          <button
            className="p-2 rounded-md border hover:bg-gray-100 transition"
            aria-label="Add to Wishlist"
          >
            <IconHeart size={20} className="text-pink-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- NEW Reusable Product Grid Section Component ---
const ProductGridSection = ({ title, products }) => (
  <section className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <a className="text-purple-600 font-medium" href="#">
        View all
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </section>
);

export default function HomePage() {
  // sample hero images
  const hero = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600&q=80",
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % hero.length), 4500);
    return () => clearInterval(t);
  }, [hero.length]);

  // Deal-of-day expires in 6 hours
  const dealEnd = new Date(Date.now() + 1000 * 60 * 60 * 6).toISOString();
  const countdown = useCountdown(dealEnd);

  // --- NEW: Data for Deal of the Day Slider ---
  const dealProducts = [
    {
      id: 1,
      title: "Smartwatch X Pro",
      price: 799,
      off: 999,
      img: "https://images.unsplash.com/photo-1546868871-70d10af8f1e4?w=600&q=80",
    },
    {
      id: 2,
      title: "Wireless Earbuds",
      price: 129,
      off: 199,
      img: "https://images.unsplash.com/photo-1587202336682-b13c357e62c1?w=600&q=80",
    },
    {
      id: 3,
      title: "Gaming Mouse",
      price: 49,
      off: 89,
      img: "https://images.unsplash.com/photo-1615468761783-c052a66c4c23?w=600&q=80",
    },
  ];

  const [dealIndex, setDealIndex] = useState(0);

  // Auto-rotate deal slider
  useEffect(() => {
    const timer = setInterval(() => {
      setDealIndex((prevIndex) => (prevIndex + 1) % dealProducts.length);
    }, 4000); // Change product every 4 seconds
    return () => clearInterval(timer);
  }, [dealProducts.length]);

  const nextDeal = () => {
    setDealIndex((prevIndex) => (prevIndex + 1) % dealProducts.length);
  };
  const prevDeal = () => {
    setDealIndex(
      (prevIndex) => (prevIndex - 1 + dealProducts.length) % dealProducts.length
    );
  };
  const currentDeal = dealProducts[dealIndex];

  // --- NEW: Data for Category Circles (with Icons) ---
  const categoryCircles = [
    { name: "Mobiles", Icon: IconSmartphone },
    { name: "Laptops", Icon: IconLaptop },
    { name: "Fashion", Icon: IconShirt },
    { name: "Home", Icon: IconHome },
    { name: "Beauty", Icon: IconSparkles },
    { name: "Toys", Icon: IconPuzzle },
    { name: "Groceries", Icon: IconApple },
    { name: "Sports", Icon: IconDumbbell },
  ];

  // --- NEW: Professional Product Data ---
  const featured = [
    {
      id: 1,
      title: "Smartphone X Pro",
      price: 999,
      off: 1299,
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      category: "Electronics",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Classic Leather Jacket",
      price: 189,
      off: 249,
      img: "https://images.unsplash.com/photo-1551028719-00167b16e256?w=800",
      category: "Men's Fashion",
      rating: 4.7,
    },
    {
      id: 3,
      title: "Floral Summer Dress",
      price: 75,
      off: 110,
      img: "https://images.unsplash.com/photo-1572804013427-4d7ca726b216?w=800",
      category: "Women's Fashion",
      rating: 4.5,
    },
    {
      id: 4,
      title: "Smart Watch Series 7",
      price: 149,
      off: 199,
      img: "https://images.unsplash.com/photo-1603398938378-e54eab4466d0?w=800",
      category: "Electronics",
      rating: 4.6,
    },
  ];

  const mensFashion = [
    {
      id: 5,
      title: "Casual Denim Shirt",
      price: 49,
      off: 79,
      img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3557?w=800",
      category: "Men's Fashion",
      rating: 4.4,
    },
    {
      id: 6,
      title: "Men's Running Shoes",
      price: 89,
      off: 120,
      img: "https://images.unsplash.com/photo-1543508053-cf041cc17482?w=800",
      category: "Men's Shoes",
      rating: 4.7,
    },
    {
      id: 7,
      title: "Slim Fit Chinos",
      price: 55,
      off: 80,
      img: "https://images.unsplash.com/photo-1604176398628-08709c09c207?w=800",
      category: "Men's Fashion",
      rating: 4.3,
    },
    {
      id: 8,
      title: "Leather Belt",
      price: 29,
      off: 45,
      img: "https://images.unsplash.com/photo-1620905979927-b6a8310f8a84?w=800",
      category: "Accessories",
      rating: 4.8,
    },
  ];

  const womensFashion = [
    {
      id: 9,
      title: "Elegant Handbag",
      price: 135,
      off: 199,
      img: "https://images.unsplash.com/photo-1548036042-2d24b61b9b5f?w=800",
      category: "Women's Fashion",
      rating: 4.6,
    },
    {
      id: 10,
      title: "High-Heeled Sandals",
      price: 95,
      off: 140,
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800",
      category: "Women's Shoes",
      rating: 4.5,
    },
  ];

  const electronics = [
    {
      id: 11,
      title: "4K Gaming Monitor",
      price: 499,
      off: 699,
      img: "https://images.unsplash.com/photo-1616588589617-e998e1eef036?w=800",
      category: "Electronics",
      rating: 4.9,
    },
    {
      id: 12,
      title: "Pro Gaming Laptop",
      price: 1499,
      off: 1899,
      img: "https://images.unsplash.com/photo-1612831666743-2a8f1a1b6b2b?w=800",
      category: "Laptops",
      rating: 4.8,
    },
  ];

  return (
    <HomeLayout>
      {/* ===== Top scrolling deals ticker ===== */}
      <div className="mt-2">
        <div className="overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2">
          <motion.div
            className="whitespace-nowrap text-sm font-semibold"
            animate={{ x: ["100%", "-120%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            🎉 Mega Sale Live • Up to 70% OFF on selected items • Free shipping
            for VIP members • Flash deals every 2 hours!
          </motion.div>
        </div>
      </div>

      {/* ===== Hero Carousel ===== */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          {hero.map((img, idx) => (
            <motion.img
              key={img}
              src={img}
              alt={`hero-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === heroIndex ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-64 md:h-96 object-cover"
            />
          ))}

          <div className="absolute left-6 top-8 text-white max-w-md">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Big Deals. Premium Brands.
            </h2>
            <p className="mt-3 text-sm md:text-base max-w-sm">
              Curated selection, flash discounts & fastest delivery.
            </p>
            <div className="mt-4 flex gap-3">
              <a className="btn-primary" href="#">
                Shop Now
              </a>
              <a className="btn-outline" href="#">
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Categories (distinct blocks) ===== */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* --- MODIFIED: Category circles with Icons --- */}
        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categoryCircles.map((category) => (
            <motion.div
              whileHover={{ scale: 1.04 }}
              key={category.name}
              className="bg-white rounded-xl p-4 shadow-md flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-3 flex items-center justify-center">
                {/* YAHAN ICON AAYEGA */}
                <category.Icon size={32} className="text-purple-600" />
              </div>
              <div className="font-semibold text-gray-700">
                {category.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MODIFIED: Deal of the day card (ab slider hai) --- */}
        <aside className="hidden lg:block">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl p-4 shadow-lg h-full flex flex-col relative">
            <div className="text-sm font-semibold">🔥 Deal of the Day</div>

            {/* Slider Content */}
            <div className="flex-1 flex flex-col justify-center mt-3 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={dealIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full"
                >
                  <img
                    src={currentDeal.img}
                    className="h-36 w-full object-cover rounded-lg mb-3"
                    alt={currentDeal.title}
                  />
                  <div className="text-lg font-bold truncate">
                    {currentDeal.title}
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="text-2xl font-bold">
                      ${currentDeal.price}
                    </div>
                    <div className="text-sm line-through opacity-80">
                      ${currentDeal.off}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Navigation */}
            <button
              onClick={prevDeal}
              className="absolute left-2 top-1/2 mt-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition"
              aria-label="Previous Deal"
            >
              <IconChevronLeft size={20} />
            </button>
            <button
              onClick={nextDeal}
              className="absolute right-2 top-1/2 mt-4 p-1 rounded-full bg-white/20 hover:bg-white/30 transition"
              aria-label="Next Deal"
            >
              <IconChevronRight size={20} />
            </button>

            {/* Countdown Timer */}
            <div className="mt-auto">
              <div className="mt-3 bg-white/10 rounded-md p-2 text-center">
                {!countdown.expired ? (
                  <div className="text-xs">
                    Ends in {String(countdown.hours).padStart(2, "0")}:
                    {String(countdown.minutes).padStart(2, "0")}:
                    {String(countdown.seconds).padStart(2, "0")}
                  </div>
                ) : (
                  <div className="text-xs">Offer ended</div>
                )}
              </div>
              <a
                className="mt-4 inline-block btn-primary w-full text-center"
                href="#"
              >
                Buy Now
              </a>
            </div>
          </div>
        </aside>
      </section>

      {/* --- MODIFIED: Product Grids --- */}
      {/* Ab yeh ProductGridSection component istemal kar rahe hain */}
      <ProductGridSection title="Featured for you" products={featured} />
      <ProductGridSection title="Men's Fashion" products={mensFashion} />
      <ProductGridSection title="Women's Fashion" products={womensFashion} />
      <ProductGridSection title="Top Electronics" products={electronics} />

      {/* small spacer */}
      <div className="h-12" />
    </HomeLayout>
  );
}