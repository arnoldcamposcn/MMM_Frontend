import React from 'react';
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
  
  companyTitle = "Compañia",
  companyLinks = [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Portafolio', href: '/portafolio' },
    { label: 'Meta mining Revista', href: '/revista' },
    { label: 'Contacto', href: '/contacto' }
  ],
  
  resourcesTitle = "Recursos",
  resourcesLinks = [
    { label: "Brochure", href: "/brochure" },
    { label: "FAQs", href: "/faqs" },
  ],

  legalTitle = "Legal",
  legalLinks = [
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Cookies", href: "/cookies" },
    { label: "Términos y condiciones", href: "/terminos" },
    { label: "Privacy", href: "/privacy" },
  ],
  
  subscribeTitle = "Subscribe",
  subscribeDescription = "Recibe en tu correo las últimas noticias, análisis y tendencias de la minería moderna. Sé parte de la comunidad que conecta innovación, ESG y tecnología en LATAM.",
  subscribeDisclaimer = "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.",
  onNewsletterSubscribe,
  
  copyrightText = `© ${new Date().getFullYear()} Codea Mining Media. Derechos reservados`,
  className = ''
}) => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-">
          
          {/* Columna 1: Logo */}
          <div className="md:col-span-6 lg:col-span-3">
          <div className="flex flex-col gap-4">
          <Logo className="text-white" />
          <p className="paragraph-magazine text-gray-300 text-sm leading-relaxed">Conectamos innovación, ESG y tecnología <br /> en la minería de LATAM.</p>
          </div>
           
          </div>
          
          {/* Columna 2: Compañia */}
          <div className="md:col-span-3 lg:col-span-2">
            <FooterNavigationColumn
              title={companyTitle}
              links={companyLinks}
            />
          </div>
          
          {/* Columna 3: Recursos */}
          <div className="md:col-span-3 lg:col-span-2">
            <FooterNavigationColumn
              title={resourcesTitle}
              links={resourcesLinks}
            />
          </div>

          {/* Columna 4: Legal */}
          <div className="md:col-span-3 lg:col-span-2">
            <FooterLegalSection
              title={legalTitle}
              legalLinks={legalLinks}
            />
          </div>
          
          {/* Columna 5: Newsletter */}
          <div className="md:col-span-3 lg:col-span-3">
            <FooterNewsletterSection
              title={subscribeTitle}
              description={subscribeDescription}
              onSubscribe={handleNewsletterSubscribe}
              placeholder="Introduce tu email"
              buttonText="Subscribirme"
              disclaimerText={subscribeDisclaimer}
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
                {copyrightText}
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
