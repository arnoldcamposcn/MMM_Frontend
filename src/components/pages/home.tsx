import { useTranslation } from 'react-i18next';
import Container from "../layouts/Container";
import Header from "../organisms/Header";
import { HeroSection } from "../organisms/hero";
import { BrandsGrid } from "../organisms/BrandsGrid";
import objectImg from "@/assets/cover/object.png";
import { ServicesSection } from '../organisms/ServicesSection';
import { Button } from "../atoms/Button";
import nosotrosImg from "@/assets/all/nosotros2.jpg";
import revistaImg from "@/assets/all/revistamm.png";
import { TeamCard } from "../molecules/TeamCard";
import { ContactSection } from "../organisms/ContactSection";
import ChooseUsSection from '../organisms/ChooseUsSection';
import { useChooseUsData } from '../../data/chooseUs.data';
import TestimonialsSection from '../organisms/TestimonialsSection';
import { PortfolioSection } from "../organisms/PortfolioSection";
import { useTeamMembers } from "../../data/team.data";
import { useNavigate } from 'react-router-dom';
import { WorkflowSection } from "../organisms/WorkflowSection";


export const HomePage = () => {
  const { t } = useTranslation();
  const chooseUsData = useChooseUsData();
  const navigate = useNavigate();
  return (
    <div className="">
      <Header />


      <section className="bg-gradient min-h-screen flex flex-col pt-24">
        <main className="flex-grow flex items-center">
          <Container className="w-full">
            <HeroSection />
            <img src={objectImg} alt="object" className="w-auto h-auto absolute bottom-0 right-0 img-fade-left" />
          </Container>
        </main>


        <div className="pt-10 md:pb-0">
          <BrandsGrid />
        </div>
      </section>



      <div className="bg-gradient-inverted">
        <section className="flex flex-col items-center justify-center py-20 md:py-32 lg:py-40">
          <Container>
            <ServicesSection />
          </Container>
        </section>



        <section className="flex flex-col items-center justify-center">
          <Container>
            <div className="px-0 md:px-12 lg:px-12">
              <PortfolioSection showTitle={true} />
            </div>
          </Container>
        </section>




        <div>
          <section className="flex flex-col items-center justify-center py-20 md:py-40">
            <Container className="w-full">
              <div className="flex flex-col items-center justify-center gap-6 md:gap-14 px-0 md:px-10 lg:px-12">
                <h1 className="text-2xl md:text-[28px] font-bold text-white text-center">{t("home.about.title")}</h1>

                <div className="grid grid-cols-1 md:flex-col lg:grid-cols-2 items-center justify-center gap-6 md:gap-16">


                  <div className="flex flex-col gap-4 order-2 md:order-1">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <span className="text-[15px] font-bold text-gradient inline-flex items-center gap-2">
                          <span className="w-8 h-0.5 bg-gradient-to-r from-[#53C1A9] to-[#4AB39A] capitalize"></span>
                          {t("home.about.badge")}
                        </span>
                        <h2 className="text-2xl md:text-[28px] font-bold text-white uppercase leading-tight">
                          {t("home.about.subtitle")} <br />
                          {/* <span className="text-gradient">el ecosistema minero</span> */}
                        </h2>
                      </div>

                      <p className="text-white text-[15px] leading-relaxed pr-0 md:pr-8">
                        {t("home.about.description")}
                      </p>
                      <div className="flex mt-0 md:mt-0">
                        <Button variant="gradient" className="uppercase group" onClick={() => navigate("/nosotros")}>
                          <span>{t("home.about.button")}</span>
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Imagen con círculo difuminado en el centro */}
                  <div className="relative order-1 md:order-2">
                    {/* Círculo difuminado grande que sobresale del borde */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-r from-[#53C1A9]/30 via-[#4AB39A]/40 to-[#53C1A9]/30 rounded-full blur-3xl opacity-70"></div>

                    {/* Segundo círculo para mayor profundidad */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[#53C1A9]/50 rounded-full blur-2xl opacity-80"></div>

                    {/* Imagen principal */}
                    <div className="relative overflow-hidden rounded-sm">
                      <img
                        src={nosotrosImg}
                        alt="Sobre nosotros - Meta Mining Media"
                        className="w-full h-auto relative z-10 rounded-sm"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </Container>
          </section>
        </div>



        {/* Revista meta mining  */}
        <section className="flex flex-col items-center justify-center relative overflow-hidden">
          <Container className="w-full ">

            <div className="flex flex-col items-center justify-center gap-10 px-0 md:px-12 relative">

              {/* Objetos decorativos de fondo */}

              <div className="grid grid-cols-1 md:flex-col  lg:grid-cols-[1.2fr_1fr] items-center justify-center gap-6 md:gap-16 relative z-10">
                {/* Imagen con objetos decorativos */}
                <div className="relative">
                  {/* Círculo decorativo detrás */}
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#53C1A9]/10 to-[#4AB39A]/10 rounded-full blur-xl"></div>

                  {/* Líneas decorativas */}
                  <div className="absolute top-1/4 -left-16 w-32 h-1 bg-gradient-to-r from-transparent via-[#53C1A9] to-transparent"></div>
                  <div className="absolute bottom-1/3 -right-16 w-40 h-1 bg-gradient-to-r from-transparent via-[#4AB39A] to-transparent"></div>

                  {/* Imagen principal más grande */}
                  <div className="relative transform hover:scale-105 transition-transform duration-500">
                    <img
                      src={revistaImg}
                      alt="Revista Meta Mining Media"
                      className="w-full h-auto relative z-10 drop-shadow-2xl"
                    />
                    {/* Sombra y brillo */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#53C1A9]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>

                  {/* Elemento decorativo inferior */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-transparent via-[#53C1A9]/20 to-transparent blur-lg"></div>
                </div>

                {/* Contenido de texto enriquecido */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3">
                    <span className="text-[15px] font-bold tracking-widest text-gradient inline-flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-gradient-to-r from-[#53C1A9] to-[#4AB39A]"></span>
                      {t("home.magazine.badge")}
                    </span>
                    <h2 className="text-2xl md:text-[28px] font-bold text-white uppercase leading-tight">
                      {t("home.magazine.title")}
                    </h2>
                  </div>


                  <p className="text-white text-[15px] leading-relaxed">
                    {t("home.magazine.description")}
                  </p>
                  <div className="flex">
                    <Button variant="gradient" className="uppercase group"
                      onClick={() => window.open("https://revista.metaminingmedia.com", "_blank")}>
                      <span>{t("home.magazine.button")}</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>


      <div className="bg-about">
        <section className="flex flex-col items-center justify-center py-20 md:py-40">
          <Container>
            <div className="flex flex-col items-center justify-center gap-6 md:gap-12 lg:gap-14 md:px-10 lg:px-12 px-8 ">
              <div className="grid grid-cols-1 md:flex-col lg:grid-cols-[1.5fr_1fr] items-center justify-center gap-6 md:gap-6 lg:gap-14">
                <div>
                  <h1 className="text-2xl md:text-[28px] font-bold text-white text-center md:text-left">{t("home.team.title")}</h1>
                </div>
                <div className="pr-0">
                  <p className="text-white pl-0 md:pl-0 lg:pl-20 text-center md:text-left text-[15px]">{t("home.team.description")}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6">
                {useTeamMembers().map((item, index) => (
                  <TeamCard key={index} member={item.member} image={item.image} />
                ))}
              </div>
            </div>
          </Container>
        </section>


        <div className="">
          <TestimonialsSection />
        </div>


        <section className="flex flex-col items-center justify-center py-20 md:py-40">
          <Container>
            <div className="flex flex-col gap-6 md:gap-12 px-0 md:px-12">
              <h1 className="text-white text-center text-2xl md:text-[28px] font-bold uppercase">{t("home.chooseUs.title")}</h1>
              <ChooseUsSection
                data={chooseUsData}
              />
            </div>
          </Container>
        </section>


        <section className="flex flex-col items-center justify-center">
          <Container>
            <WorkflowSection />
          </Container>
        </section>


        <section className="flex flex-col items-center justify-center pt-20 md:pt-40 pb-20">
          <Container>
            <div className="flex flex-col gap-6 md:gap-12 px-0 md:px-12">
              <h1 className="text-white text-center text-2xl md:text-[28px] font-bold uppercase">{t("home.contact.title")}</h1>
              <ContactSection />
            </div>
          </Container>
        </section>
      </div>

    </div>
  );
};
