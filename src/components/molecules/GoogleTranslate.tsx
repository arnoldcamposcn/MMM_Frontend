import React, { useEffect } from "react";

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "en,es",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      const savedLang = localStorage.getItem("selectedLang");
      if (savedLang && savedLang !== "es") {
        const selectEl = document.querySelector(
          ".goog-te-combo"
        ) as HTMLSelectElement;
        if (selectEl) {
          selectEl.value = savedLang;
          selectEl.dispatchEvent(new Event("change"));
        }
      }
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
