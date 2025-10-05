// src/components/organisms/Header.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../atoms/Logo";
import Container from "../layouts/Container";
import LanguageSelector, { type Language } from "../molecules/LanguageSelector";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const languages: Language[] = [
    { code: "ES", name: t("language.spanish") },
    { code: "US", name: t("language.english") },
  ];

  const [selectedLang, setSelectedLang] = useState<Language>(() => {
    const currentLang = i18n.language || "es";
    // Mapear códigos de idioma a códigos de país
    const langToCountry: Record<string, string> = {
      "es": "ES",
      "en": "US"
    };
    const countryCode = langToCountry[currentLang] || "ES";
    return languages.find(lang => lang.code === countryCode) || languages[0];
  });

  const handleLangChange = (lang: Language) => {
    setSelectedLang(lang);
    // Mapear códigos de país a códigos de idioma
    const countryToLang: Record<string, string> = {
      "ES": "es",
      "US": "en"
    };
    const languageCode = countryToLang[lang.code] || "es";
    i18n.changeLanguage(languageCode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: t("navigation.home"), href: "/", isActive: location.pathname === "/" },
    { label: t("navigation.about"), href: "/nosotros", isActive: location.pathname === "/nosotros" },
    { label: t("navigation.service"), href: "/servicios", isActive: location.pathname === "/servicio" },
    { label: t("navigation.portfolio"), href: "/portafolio", isActive: location.pathname === "/portafolio" },
    { label: t("navigation.contact"), href: "/contacto", isActive: location.pathname === "/contacto" },
    { label: t("navigation.magazine"), href: "/meta-mining-revista", isActive: location.pathname === "/meta-mining-revista" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${className} ${
        isScrolled ? "bg-grayCustom bg-opacity-90 backdrop-blur-lg shadow-custom" : "bg-transparent"
      }`}
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
