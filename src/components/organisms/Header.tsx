// src/components/organisms/Header.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../atoms/Logo";
import Container from "../layouts/Container";
import LanguageSelector, { type Language } from "../molecules/LanguageSelector";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const languages: Language[] = [
    { code: "ES", name: "Español" },
    { code: "US", name: "Inglés" },
  ];

  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);

  const handleLangChange = (lang: Language) => setSelectedLang(lang);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigationItems = [
    { label: "Inicio", href: "/", isActive: location.pathname === "/" },
    { label: "Nosotros", href: "/nosotros", isActive: location.pathname === "/nosotros" },
    { label: "Servicio", href: "/servicio", isActive: location.pathname === "/servicio" },
    { label: "Portafolio", href: "/portafolio", isActive: location.pathname === "/portafolio" },
    { label: "Contacto", href: "/contacto", isActive: location.pathname === "/contacto" },
    { label: "Meta Mining Revista", href: "/meta-mining-revista", isActive: location.pathname === "/meta-mining-revista" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 py-6 transition-all duration-300 ${className} ${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-grayCustom bg-opacity-80 backdrop-blur-lg shadow-custom" : ""}`}
    >
      <Container>
        <div className="flex items-center justify-between h-12">
          <Logo />

          {/* Menú desktop */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`magazine-link relative text-[15px] uppercase text-white font-medium transition-all duration-300 hover:text-[#53C1A9] py-2 px-0 ${
                  item.isActive ? "text-white font-bold" : "hover:scale-105"
                }`}
              >
                {item.label}
                {item.isActive && (
                  <>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#53C1A9] to-[#4AB39A] rounded-full"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#53C1A9] rounded-full"></div>
                  </>
                )}
              </a>
            ))}
          </div>

          {/* Selector de idioma desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSelector
              selectedLang={selectedLang}
              languages={languages}
              onLangChange={handleLangChange}
            />
          </div>

          {/* Botón menú móvil */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#53C1A9] focus:outline-none p-2 rounded-lg transition-all duration-200"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`lg:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-grayCustom bg-opacity-95 backdrop-blur-lg shadow-lg`}
        >
          <div className="flex flex-col items-center space-y-4 py-6">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-base uppercase ${
                  item.isActive ? "text-[#53C1A9]" : "text-white"
                } hover:text-[#53C1A9] transition-colors`}
              >
                {item.label}
              </a>
            ))}

            <div className="border-t border-white/20 w-1/2 my-4" />

            {/* Selector de idioma móvil */}
            <LanguageSelector
              selectedLang={selectedLang}
              languages={languages}
              onLangChange={handleLangChange}
              isMobile
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
