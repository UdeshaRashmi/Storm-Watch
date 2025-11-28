 import React from "react";

// Images
const hero =
  "https://smartixtech.com/cdn/shop/files/VFitActiveWatch23.3_1800x.jpg?v=1752927446";
const watchClose =
  "https://www.boat-lifestyle.com/cdn/shop/products/Untitled-5.png?v=1658294451";
const watchHealth =
  "https://img.drz.lazcdn.com/g/kf/S12582292e1bf45fe94750c9e79b91a8cE.jpg_2200x2200q80.jpg_.webp";
const ctaWatch =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEN3WSd6vPIlB2LDJjipMmKwNv4QXw1OMGEg&s";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-gray-800 backdrop-blur-lg bg-black/80">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full">
              <svg width="16" height="16" fill="none" stroke="#fff">
                <circle cx="8" cy="8" r="7" />
              </svg>
            </div>
            <h1 className="text-xl font-semibold tracking-wide">Storm Watch</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#brand" className="hover:text-white">Brand Experience</a></li>
            <li><a href="#manual" className="hover:text-white">Users Manual</a></li>
            <li><a href="#guarantee" className="hover:text-white">Guarantee</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>

          {/* Preorder button */}
          <button className="hidden md:inline-flex bg-lime-400 text-black px-6 py-2 rounded font-semibold hover:bg-lime-300">
            Pre-order  $1800
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden">
            <svg width="28" height="28" stroke="white" fill="none">
              <path d="M4 7h20M4 14h20M4 21h20" />
            </svg>
          </button>
        </nav>


      </header>

      {/*  MAIN CONTENT */}
      <main className="container mx-auto px-6">

        {/* HERO */}
        <section id="home" className="mt-16 text-center">
          <p className="text-lime-400 font-medium">Smart Watch</p>
          <h2 className="text-5xl md:text-7xl font-bold mt-1">STORM PRO</h2>

          <div className="mt-10 bg-gradient-to-b from-gray-900 to-black rounded-xl p-10">
            <img
              src={hero}
              alt="storm pro"
              className="w-full max-h-[420px] mx-auto object-contain drop-shadow-2xl"
            />
          </div>
        </section>

        {/*BATTERY */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <img src={watchClose} alt="watch close up" className="w-64 mx-auto drop-shadow-2xl" />

          <div>
            <h3 className="text-4xl font-bold">Battery life for days.</h3>
            <p className="text-gray-400 mt-4 max-w-lg">
              Whether on day two of a camping trip or mid-ride, Storm Pro keeps going.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[
                { h: "36 hours", t: "normal use" },
                { h: "60 hours", t: "low power mode" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-gray-900/40 border border-gray-800"
                >
                  <p className="text-sm text-gray-400">Up to</p>
                  <p className="text-2xl text-lime-400 font-bold">{b.h}</p>
                  <p className="text-sm text-gray-400">{b.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*HEALTH FEATURES */}
        <section className="mt-28 text-center">
          <h3 className="text-4xl font-bold">
            Powerful <span className="text-lime-400">health</span> features
          </h3>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

            {/* Left Features */}
            <div className="space-y-8 text-left">
              {[
                {
                  title: "Heart Health Notifications",
                  desc: "Alerts for abnormal heart rates.",
                },
                {
                  title: "ECG",
                  desc: "Record your heartbeat instantly.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <svg width="18" height="18" stroke="white" fill="none">
                      <circle cx="9" cy="9" r="7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Watch */}
            <img src={watchHealth} alt="watch health features" className="w-64 mx-auto drop-shadow-2xl" />

            {/* Right Features */}
            <div className="space-y-8 text-left">
              {[
                {
                  title: "Blood Oxygen",
                  desc: "Track oxygen saturation levels.",
                },
                {
                  title: "Sleep Tracking",
                  desc: "Analyze daily sleep cycles.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <svg width="18" height="18" stroke="white" fill="none">
                      <circle cx="9" cy="9" r="7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  BRAND EXPERIENCE   */}
        <section id="brand" className="mt-28">
          <h3 className="text-4xl font-bold">
            Designed for Versatility, Performance and Style
          </h3>
          <p className="text-gray-400 mt-2 max-w-xl">
            Powerfully built for athletes, adventurers and everyone in between.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            {[
              { name: "Alpine Loop", price: "$1800", desc: "All-terrain performance." },
              { name: "Ocean Band", price: "$1999", desc: "Extreme water sports." },
              { name: "Trail Loop", price: "$2075", desc: "Endurance running." },
            ].map((b, i) => (
              <div
                key={i}
                className="p-6 bg-gray-900/40 border border-gray-800 rounded-lg hover:border-lime-400/40 transition"
              >
                <h4 className="font-semibold">{b.name}</h4>
                <p className="text-lime-400 font-bold mt-1">{b.price}</p>
                <p className="text-gray-400 text-sm mt-2">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/*  CTA   */}
        <section className="mt-28 bg-gray-900/40 rounded-xl p-10 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-10">

            <div className="flex-1">
              <h3 className="text-3xl font-bold">The last delivery you need.</h3>
              <p className="text-gray-400 mt-4 max-w-lg">
                Storm Watch — Experience smart performance with worry-free ordering.
              </p>

              <ul className="mt-4 text-sm text-gray-400 space-y-2">
                <li>• Starts shipping October 2022</li>
                <li>• Safe and fast delivery</li>
                <li>• Earn 3% Cashback</li>
              </ul>

              <button className="mt-6 bg-lime-400 text-black px-6 py-3 rounded font-semibold hover:bg-lime-300">
                Pre-order Storm Watch   $1800
              </button>
            </div>

            <img src={ctaWatch} alt="storm pro cta" className="w-64 mx-auto drop-shadow-2xl" />
          </div>

          <div className="mt-10 text-center bg-gray-900/30 p-8 rounded-lg border border-gray-700">
            <h4 className="text-xl font-semibold">Get your smart watch now</h4>
            <p className="text-gray-400 mt-1">Get 3% cashback on pre-orders</p>    
          </div>
        </section>
      </main>

      {/*  FOOTER   */}
      <footer id="contact" className="mt-28 py-16 border-t border-gray-800">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-6">

          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold">Storm Watch</h3>
            <p className="text-gray-400 text-sm mt-2">
              Accurate data. Powerful insights. Athlete-driven performance.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-3">Storm</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Our Company", "Our Story", "Careers", "Site Map"].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Contact Us", "FAQ", "Customer Care", "Warranty", "Shipping"].map(
                (item, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">{item}</li>
                )
              )}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-3">Social Media</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Instagram", "Facebook", "LinkedIn", "Twitter"].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mt-10">
          © {new Date().getFullYear()} Storm Watch. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
