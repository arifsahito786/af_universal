"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- FIX: Replaced 'react-icons/fa' with inline SVG components ---
// This resolves the "Could not resolve" error by removing the external dependency.

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

const IconHeart = ({ size = 18, className = "" }) => (
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
// --- END FIX ---

export default function HomeLayout({ children }) {
  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Desktop sidebar state (default closed)
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(false);

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
      <header
        className={`fixed top-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300 ease-in-out ${
          desktopSidebarOpen ? "md:left-72 left-0" : "left-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* Menu Button (Mobile) - No Change */}
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

          {/* Search Bar - Dynamic Width */}
          <div className="hidden md:flex items-center flex-1 mx-6">
            <div
              className={`w-full bg-gray-100 border border-gray-200 rounded-full flex items-center px-3 py-1.5 shadow-sm transition-all duration-300 ease-in-out ${
                desktopSidebarOpen ? "max-w-xs" : "max-w-xl"
              }`}
            >
              <input
                placeholder="Search products, brands and more..."
                className="bg-transparent outline-none w-full text-sm pr-2"
              />
              <button className="ml-3 px-3 py-1 rounded-full bg-purple-600 text-white text-sm font-semibold hover:brightness-95 whitespace-nowrap">
                Search
              </button>
            </div>
          </div>

          {/* Icons (No Change) */}
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
            initial={{ x: "-100%" }} // Start off-screen
            animate={{ x: 0 }} // Animate to be on-screen
            exit={{ x: "-100%" }} // Animate off-screen
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            {/* Added Header with Close Button */}
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
                <li><a href="#" className="hover:underline">Orders</a></li>
                <li><a href="#" className="hover:underline">Wishlist</a></li>
                <li><a href="#" className="hover:underline">Coupons</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
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
                  <li><a href="#" className="hover:underline">Orders</a></li>
                  <li><a href="#" className="hover:underline">Wishlist</a></li>
                  <li><a href="#" className="hover:underline">Coupons</a></li>
                  <li><a href="#" className="hover:underline">Help Center</a></li>
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