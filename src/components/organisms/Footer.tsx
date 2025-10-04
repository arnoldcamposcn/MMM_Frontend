import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../atoms/Logo';
import { type SocialLink } from '../molecules/SocialLinks';
import FooterNavigationColumn, { type NavigationLink } from '../molecules/FooterNavigationColumn';
import FooterLegalSection, { type LegalLink } from '../molecules/FooterLegalSection';
import FooterNewsletterSection from '../molecules/FooterNewsletterSection';
import SocialLinks from '../molecules/SocialLinks';


interface FooterProps {
  socialLinks?: SocialLink[];
  
  // Columna "Compañia"
  companyTitle?: string;
  companyLinks?: NavigationLink[];

  // Columna "Recursos"
  resourcesTitle?: string;
  resourcesLinks?: NavigationLink[];
  
  // Columna "Legal"
  legalTitle?: string;
  legalLinks?: LegalLink[];

  // Columna "Subscribe"
  subscribeTitle?: string;
  subscribeDescription?: string;
  subscribeDisclaimer?: string;
  onNewsletterSubscribe?: (email: string) => void;
  
  // Footer bottom
  copyrightText?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  // Valores por defecto
  socialLinks = [
    { platform: 'facebook', href: 'https://facebook.com' },
    { platform: 'instagram', href: 'https://instagram.com' },
    { platform: 'twitter', href: 'https://twitter.com' },
    { platform: 'linkedin', href: 'https://linkedin.com' }
  ],
  
  companyTitle,
  companyLinks,
  
  resourcesTitle,
  resourcesLinks,

  legalTitle,
  legalLinks,
  
  subscribeTitle,
  subscribeDescription,
  subscribeDisclaimer,
  onNewsletterSubscribe,
  
  copyrightText,
  className = ''
}) => {
  const { t } = useTranslation();
  
  // Usar traducciones si no se proporcionan props
  const finalCompanyTitle = companyTitle || t("footer.company.title");
  const finalCompanyLinks = companyLinks || t("footer.company.links", { returnObjects: true }) as NavigationLink[];
  
  const finalResourcesTitle = resourcesTitle || t("footer.resources.title");
  const finalResourcesLinks = resourcesLinks || t("footer.resources.links", { returnObjects: true }) as NavigationLink[];

  const finalLegalTitle = legalTitle || t("footer.legal.title");
  const finalLegalLinks = legalLinks || t("footer.legal.links", { returnObjects: true }) as LegalLink[];
  
  const finalSubscribeTitle = subscribeTitle || t("footer.newsletter.title");
  const finalSubscribeDescription = subscribeDescription || t("footer.newsletter.description");
  const finalSubscribeDisclaimer = subscribeDisclaimer || t("footer.newsletter.disclaimer");
  
  const finalCopyrightText = copyrightText || t("footer.copyright", { year: new Date().getFullYear() });
  const handleNewsletterSubscribe = (email: string) => {
    if (onNewsletterSubscribe) {
      onNewsletterSubscribe(email);
    } else {
      console.log('Suscripción al newsletter:', email);
    }
  };

  return (
    <footer className={`bg-grayCustom text-white ${className}`}>
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-14">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8">
          
          {/* Columna 1: Logo */}
          <div className="md:col-span-6 lg:col-span-3">
          <div className="flex flex-col gap-6">
          <Logo className="text-white" />
          <p className="paragraph-magazine text-gray-300 text-sm leading-relaxed">{t("footer.description")}</p>
          </div>
           
          </div>
          
          {/* Columna 2: Compañia */}
          <div className="md:col-span-3 lg:col-span-2">
            <FooterNavigationColumn
              title={finalCompanyTitle}
              links={finalCompanyLinks}
            />
          </div>
          
          {/* Columna 3: Recursos */}
          <div className="md:col-span-3 lg:col-span-2">
            <FooterNavigationColumn
              title={finalResourcesTitle}
              links={finalResourcesLinks}
            />
          </div>

          {/* Columna 4: Legal */}
          <div className="md:col-span-3 lg:col-span-2">
            <FooterLegalSection
              title={finalLegalTitle}
              legalLinks={finalLegalLinks}
            />
          </div>
          
          {/* Columna 5: Newsletter */}
          <div className="md:col-span-3 lg:col-span-3">
            <FooterNewsletterSection
              title={finalSubscribeTitle}
              description={finalSubscribeDescription}
              onSubscribe={handleNewsletterSubscribe}
              placeholder={t("footer.newsletter.placeholder")}
              buttonText={t("footer.newsletter.button")}
              disclaimerText={finalSubscribeDisclaimer}
            />
          </div>
          
        </div>
      </div>
      
      {/* Línea divisoria */}
      <div className="border-t border-white/60 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="paragraph-magazine text-gray-300 text-sm">
                {finalCopyrightText}
              </p>
            </div>
            
            {/* Social Links */}
            <div>
                <SocialLinks links={socialLinks}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
