import { useTranslation } from 'react-i18next';
import { ContactForm } from './ContactForm';
import SocialLinks, { type SocialLink } from '../molecules/SocialLinks';

export const ContactSection = () => {
  const { t } = useTranslation();
  
  const socialLinks: SocialLink[] = [
    { platform: 'facebook', href: '#' },
    { platform: 'linkedin', href: '#' },
    { platform: 'instagram', href: '#' },
    { platform: 'twitter', href: '#' }
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 md:gap-6 lg:gap-12 px-0 md:px-16 bg-transparent md:bg-grayCustom rounded-3xl py-0 md:py-14 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6 md:gap-14 text-white w-full">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-8">
          <h1 className="text-xl lg:text-2xl text-center md:text-left font-bold uppercase">{t("contact.section.title")}</h1>
          <p className="text-paragraph text-center md:text-left">{t("contact.section.description")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-6 md:gap-8 text-white">
            <div className="flex flex-col justify-center items-center md:items-start">
              <h2 className="text-xl md:text-xl font-bold uppercase pb-3 text-center md:text-left">{t("contact.section.contactInfo.contactUs")}</h2>
              <span className="text-[15px]">{t("contact.section.contactInfo.phone")}</span>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <h2 className="text-xl md:text-xl font-bold uppercase pb-3 text-center md:text-left">{t("contact.section.contactInfo.location")}</h2>
              <span className="text-[15px]">{t("contact.section.contactInfo.address")}</span>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <h2 className="text-xl md:text-xl font-bold uppercase pb-3 text-center md:text-left">{t("contact.section.contactInfo.email")}</h2>
              <span className="text-[15px]">{t("contact.section.contactInfo.emailAddress")}</span>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <h2 className="text-xl md:text-xl font-bold uppercase pb-3 text-center md:text-left">{t("contact.section.contactInfo.followUs")}</h2>
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start w-full">
          <ContactForm />
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250212.2229587515!2d-77.1517026432168!3d-12.02660340897368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
          className="w-full h-[450px] rounded-2xl border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Lima, Perú"
        ></iframe>
      </div>
    </div>
  );
};
