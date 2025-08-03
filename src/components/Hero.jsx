"use client"
import { useEffect, useRef, useState } from "react"
import NSCCEvectorImg from "../assets/NSCC EVECTOR.png"
import nscchero from "../assets/hero.png"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const heroRef = useRef(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    // Close mobile menu if open
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-x-hidden">
      {/* Grid Lines - 4x3 grid matching screenshot */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {/* Vertical Lines - 4 columns (3 dividing lines) */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        {/* Horizontal Lines - 3 rows (2 dividing lines) */}
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-transparent text-white p-4 flex items-center justify-between max-w-full">
        <div className="text-2xl font-bold px-2 md:px-6 flex-shrink-0">
          <img src={NSCCEvectorImg} alt="NSCC Evector" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex w-full justify-between px-4 xl:px-20 max-w-4xl">
          {[
            { name: "Domains", id: "domains" },
            { name: "Live Events", id: "events" },
            { name: "Our Team", id: "team" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <li key={item.name} className={`px-2 xl:px-4 py-4 ${item.name === "Contact" ? "bg-blue-800 rounded" : ""}`}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full font-helvetica-neue text-sm xl:text-base cursor-pointer"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-container lg:hidden">
          <button
            className="relative w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-0.5" : "mb-1"}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : ""}`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-0.5" : "mt-1"}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div
        className={`mobile-menu-container lg:hidden fixed inset-0 z-50 transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#0a192f]/95 transition-opacity duration-500 ${isMenuOpen ? "opacity-80" : "opacity-0"}`}
        ></div>

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col transition-all duration-500 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header with Close Button */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="text-xl font-bold text-white">Menu</div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-300"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items - Moved to Top */}
          <div className="flex flex-col items-center px-6 pt-12">
            <ul className="space-y-6 w-full max-w-xs">
              {[
                { name: "Domains", id: "domains" },
                { name: "Live Events", id: "events" },
                { name: "Our Team", id: "team" },
                { name: "Contact", id: "contact" },
              ].map((item, index) => (
                <li
                  key={item.name}
                  className={`transform transition-all duration-500 delay-${index * 100} ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"} text-center`}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block text-2xl font-medium transition-all duration-300 hover:scale-105 w-full text-center ${
                      item.name === "Contact"
                        ? "text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg"
                        : "text-white/90 hover:text-white border-b border-transparent hover:border-white/30 pb-2"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer to push footer to bottom */}
          <div className="flex-1"></div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10">
            <p className="text-white/60 text-sm text-center">© 2024 NSCC. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-white min-h-[80vh] md:h-[90vh] flex flex-col items-center justify-center text-center px-4 md:p-6 overflow-hidden">
        {/* Main Heading */}
        <div className="w-full max-w-6xl mx-auto relative">
          <img
            src={nscchero}
            alt="NSCC Logo"
            className="w-full h-auto max-w-full object-contain opacity-100 -mt-8 md:-mt-16 md:relative md:-top-16 md:left-10"
          />
        </div>

        {/* Positioned Lorem Ipsum Section - Desktop */}
        <div className="absolute left-[25.6%] w-[24%] top-[75%] text-left hidden xl:block">
          <p className="text-base text-gray-300 leading-relaxed font-helvetica-neue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        {/* Mobile/Tablet version of Lorem Ipsum */}
        <div className="xl:hidden w-full max-w-md mx-auto mt-4 px-4">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-helvetica-neue text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </div>
  )
}