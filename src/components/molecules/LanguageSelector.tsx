// src/components/molecules/LanguageSelector.tsx
import React, { useState } from "react";
import { ReactCountryFlag } from "react-country-flag";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export interface Language {
  code: string;
  name: string;
}

interface LanguageSelectorProps {
  selectedLang: Language;
  languages: Language[];
  onLangChange: (lang: Language) => void;
  isMobile?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLang,
  languages,
  onLangChange,
  isMobile = false,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggle = () => setDropdownOpen(!dropdownOpen);

  const handleChange = (lang: Language) => {
    onLangChange(lang);
    setDropdownOpen(false);
  };

  if (isMobile) {
    return (
      <div className="flex flex-col w-full">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleToggle}
        >
          <ReactCountryFlag
            countryCode={selectedLang.code}
            svg
            style={{ width: "1.2em", height: "1.2em" }}
          />
          <span className="text-base uppercase text-white hover:text-[#53C1A9]">
            {selectedLang.name}
          </span>
          <ChevronDownIcon
            className={`w-4 h-4 text-white transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {dropdownOpen && (
          <div className="mt-2 space-y-2 pl-6">
            {languages
              .filter((lang) => lang.code !== selectedLang.code)
              .map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => handleChange(lang)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <ReactCountryFlag
                    countryCode={lang.code}
                    svg
                    style={{ width: "1.2em", height: "1.2em" }}
                  />
                  <span className="text-base uppercase text-white hover:text-[#53C1A9]">
                    {lang.name}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-2 relative pb-2 -mb-2 cursor-pointer"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <ReactCountryFlag
        countryCode={selectedLang.code}
        svg
        style={{ width: "1.5em", height: "1.5em" }}
      />
      <span className="magazine-link relative text-[15px] uppercase text-white font-medium transition-all duration-300 hover:text-[#53C1A9] py-2 px-0">
        {selectedLang.name}
      </span>
      <ChevronDownIcon className="w-4 h-4 text-white" strokeWidth={3} />

      {dropdownOpen && (
        <div className="absolute top-full pt-2 bg-white rounded-md shadow-lg py-1 w-full">
          {languages
            .filter((lang) => lang.code !== selectedLang.code)
            .map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleChange(lang)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                <ReactCountryFlag
                  countryCode={lang.code}
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                />
                <span>{lang.name}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
