import React, { useState } from "react";

// Placeholder images - replace with actual images when available
const hero = "https://smartixtech.com/cdn/shop/files/VFitActiveWatch23.3_1800x.jpg?v=1752927446";
const watchClose = "https://www.boat-lifestyle.com/cdn/shop/products/Untitled-5.png?v=1658294451";
const watchHealth = "https://img.drz.lazcdn.com/g/kf/S12582292e1bf45fe94750c9e79b91a8cE.jpg_2200x2200q80.jpg_.webp";
const ctaWatch = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEN3WSd6vPIlB2LDJjipMmKwNv4QXw1OMGEg&s";

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black text-white w-full overflow-x-hidden">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <svg width="16" height="16" fill="none" stroke="#fff">
                <circle cx="8" cy="8" r="7" />
              </svg>
            </div>
            <h1 className="font-semibold text-lg">Storm Watch</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-400 text-sm">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#brand" className="hover:text-white transition-colors">Brand Experience</a>
            <a href="#manual" className="hover:text-white transition-colors">Users Manual</a>
            <a href="#guarantee" className="hover:text-white transition-colors">Guarantee</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Preorder Button (Desktop) */}
          <button className="hidden md:block bg-lime-400 text-black px-6 py-2 rounded font-semibold hover:bg-lime-300 transition-colors">
            Pre-order – $1800
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 py-4 flex flex-col gap-3 text-gray-300 border-t border-gray-800 bg-black">
            <a href="#home" className="py-2 hover:text-white transition-colors" onClick={() => setOpen(false)}>Home</a>
            <a href="#brand" className="py-2 hover:text-white transition-colors" onClick={() => setOpen(false)}>Brand Experience</a>
            <a href="#manual" className="py-2 hover:text-white transition-colors" onClick={() => setOpen(false)}>Users Manual</a>
            <a href="#guarantee" className="py-2 hover:text-white transition-colors" onClick={() => setOpen(false)}>Guarantee</a>
            <a href="#contact" className="py-2 hover:text-white transition-colors" onClick={() => setOpen(false)}>Contact</a>

            <button className="w-full bg-lime-400 text-black py-3 rounded font-semibold mt-2 hover:bg-lime-300 transition-colors">
              Pre-order – $1800
            </button>
          </div>
        )}
      </header>

      <main className="max-w-[1400px] mx-auto px-6">

        {/* ---------------- HERO ---------------- */}
        <section id="home" className="mt-10 text-center">
          <p className="text-lime-400 font-medium">Smart Watch</p>
          <h2 className="text-5xl md:text-7xl font-bold mt-1">STORM PRO</h2>

          <div className="mt-10 bg-gradient-to-b from-gray-900 to-black rounded-xl p-10">
            <img
              src={hero}
              alt="storm watches"
              className="w-full max-h-[400px] mx-auto object-contain drop-shadow-2xl"
            />
          </div>
        </section>

        {/* ---------------- BATTERY SECTION ---------------- */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src={watchClose}
            alt="watch close"
            className="w-64 h-auto mx-auto drop-shadow-2xl"
          />

          <div>
            <h3 className="text-3xl md:text-4xl font-bold">Battery life for days.</h3>
            <p className="text-gray-400 mt-4 max-w-lg">
              When you're on day two of a backpacking trip or deep into a long ride, the
              last thing you want is a dead battery. Storm Pro keeps going as long as you do.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-gray-900/40 border border-gray-800">
                <p className="text-sm text-gray-400">Up to</p>
                <p className="text-2xl font-semibold text-lime-400">36 hours</p>
                <p className="text-sm text-gray-400">normal use</p>
              </div>

              <div className="p-4 rounded-lg bg-gray-900/40 border border-gray-800">
                <p className="text-sm text-gray-400">Up to</p>
                <p className="text-2xl font-semibold text-lime-400">60 hours</p>
                <p className="text-sm text-gray-400">low power mode</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- HEALTH FEATURES ---------------- */}
        <section className="mt-24 text-center">
          <h3 className="text-3xl font-bold">
            Powerful <span className="text-lime-400">health</span> features
          </h3>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

            {/* left features */}
            <div className="space-y-6 text-left">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="7" stroke="white"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Heart Health Notifications</h4>
                  <p className="text-gray-400 text-sm">
                    Alerts for high/low heart rate and irregular rhythm.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" fill="none"><rect width="16" height="16" x="1" y="1" rx="3" stroke="white"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">ECG</h4>
                  <p className="text-gray-400 text-sm">
                    Record your heartbeat and check irregularities.
                  </p>
                </div>
              </div>
            </div>

            {/* watch image */}
            <img
              src={watchHealth}
              alt="health watch"
              className="w-64 h-auto mx-auto drop-shadow-2xl"
            />

            {/* right features */}
            <div className="space-y-6 text-left">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" fill="none"><circle cx="9" cy="9" r="7" stroke="white"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Blood Oxygen</h4>
                  <p className="text-gray-400 text-sm">
                    Track your oxygen saturation levels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" fill="none"><path d="M1 9h16" stroke="white"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Sleep Tracking</h4>
                  <p className="text-gray-400 text-sm">
                    Know how long you were in each sleep stage.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ---------------- VERSATILITY ---------------- */}
        <section id="brand" className="mt-24">
          <h3 className="text-3xl font-bold">
            Designed for Versatility, Performance and Style
          </h3>
          <p className="text-gray-400 mt-2 max-w-xl">
            Making progress as an athlete requires accurate data and insights.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div className="bg-gray-900/40 p-6 rounded-lg text-center border border-gray-800 hover:border-lime-400/30 transition-colors">
              
              <h4 className="font-semibold">Alpine Loop</h4>
              <p className="text-lime-400 font-bold mt-1">$1,800</p>
              <p className="text-gray-400 text-sm mt-2">
                Customized for all-terrain performance.
              </p>
            </div>

            <div className="bg-gray-900/40 p-6 rounded-lg text-center border border-gray-800 hover:border-lime-400/30 transition-colors">
              
              <h4 className="font-semibold">Ocean Band</h4>
              <p className="text-lime-400 font-bold mt-1">$1,999</p>
              <p className="text-gray-400 text-sm mt-2">
                Built for extreme water sports.
              </p>
            </div>

            <div className="bg-gray-900/40 p-6 rounded-lg text-center border border-gray-800 hover:border-lime-400/30 transition-colors">
               
              <h4 className="font-semibold">Trail Loop</h4>
              <p className="text-lime-400 font-bold mt-1">$2,075</p>
              <p className="text-gray-400 text-sm mt-2">
                Perfect for long runs and endurance.
              </p>
            </div>

          </div>
        </section>

        {/* ---------------- CTA SECTION ---------------- */}
        <section className="mt-24 bg-gray-900/30 p-10 rounded-xl border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-10">

            <div className="flex-1">
              <h3 className="text-3xl font-bold">
                The last delivery you need to stay home for.
              </h3>

              <p className="text-gray-400 mt-4 max-w-lg">
                Storm Watch — The first smart watch with worry-free pre-orders.
              </p>

              <ul className="mt-4 text-gray-400 space-y-2 text-sm">
                <li>• Starts shipping October 2022</li>
                <li>• Safe and fast delivery</li>
                <li>• 3% Daily Cash back</li>
              </ul>

              <button className="mt-6 bg-lime-400 text-black px-6 py-3 rounded font-semibold hover:bg-lime-300 transition-colors">
                Pre-order Storm Watch – $1800
              </button>
            </div>

            <img
              src={ctaWatch}
              alt="cta watch"
              className="w-56 h-auto drop-shadow-2xl"
            />

          </div>

          <div className="mt-10 text-center bg-gray-900/20 p-8 rounded border border-gray-700">
            <h4 className="text-xl font-semibold">Get your smart watch now</h4>
            <p className="text-gray-400 mt-1">Get 3% cashback for pre-orders</p>
            <button className="mt-4 bg-lime-400 text-black px-6 py-2 rounded font-semibold hover:bg-lime-300 transition-colors">
              Pre-Order Now
            </button>
          </div>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer id="contact" className="mt-24 py-12 border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <h3 className="font-bold text-xl">Storm Watch</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Accurate data. Powerful insights. Athlete-driven performance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Storm</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Our Company</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Site Map</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Customer Care</li>
              <li className="hover:text-white cursor-pointer transition-colors">Warranty</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shipping</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Social Media</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-white cursor-pointer transition-colors">Facebook</li>
              <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
            </ul>
          </div>

        </div>

        <p className="text-center text-gray-600 mt-10 text-sm">
          © {new Date().getFullYear()} Storm Watch. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;