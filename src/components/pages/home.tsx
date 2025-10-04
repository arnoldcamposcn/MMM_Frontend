import { useTranslation } from 'react-i18next';
import Container from "../layouts/Container";
import Header from "../organisms/Header";
import { HeroSection } from "../organisms/hero";
import { BrandsGrid } from "../organisms/BrandsGrid";
import objectImg from "@/assets/cover/object.png";
import { ServicesSection } from '../organisms/ServicesSection';
// import serviceAudiovisual from "@/assets/services/audiovisual.png";
import { Button } from "../atoms/Button";
// import iconService from "@/assets/icons/icon-service.png";
import nosotrosImg from "@/assets/all/nosotros.png";
import revistaImg from "@/assets/all/revistamm.png";



import { TeamCard } from "../molecules/TeamCard";
// import { teamMembers } from "../../data/team.data";
import { ContactSection } from "../organisms/ContactSection";
import ChooseUsSection from '../organisms/ChooseUsSection';
import { useChooseUsData } from '../../data/chooseUs.data';
import TestimonialsSection from '../organisms/TestimonialsSection';
import flujoImg from "@/assets/all/fluijo.png";
import { PortfolioSection } from "../organisms/PortfolioSection";
import { useTeamMembers } from "../../data/team.data";


export const HomePage = () => {
  const { t } = useTranslation();
  const chooseUsData = useChooseUsData();

  return (
    <div className="">
      <section className="">
      {/* <Header className="relative z-10" /> */}
        <div className="bg-gradient min-h-screen flex flex-col">
        <Header className="relative z-10" />
        
        <main className="flex-grow flex items-center">
          <Container className="w-full">
            <HeroSection />
            <img src={objectImg} alt="object" className="w-auto h-auto absolute bottom-0 right-0 img-fade-left" />
          </Container>
        </main>
        <BrandsGrid />
        </div>



      <div className="bg-gradient-inverted">
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Container className="w-full">
          <ServicesSection />
        </Container>
      </section>




      {/* Revista meta mining  */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <Container className="w-full">
          
          <div className="flex flex-col items-center justify-center gap-10 px-0 md:px-8 relative">
            
            {/* Objetos decorativos de fondo */}

            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center justify-center gap-16 relative z-10">
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
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-bold uppercase tracking-widest text-gradient inline-flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-[#53C1A9] to-[#4AB39A]"></span>
                     {t("home.magazine.badge")}
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-bold text-white uppercase leading-tight">
                    {t("home.magazine.title")}
                  </h2>
                </div>

                <div className="h-1 w-20 bg-gradient-to-r from-[#53C1A9] to-[#4AB39A] rounded-full"></div>

                <p className="text-white/90 text-base leading-relaxed">
                {t("home.magazine.description")}
                </p>
                <div className="flex mt-4">
                  <Button variant="gradient" className="uppercase group">
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


      

      <section className="min-h-screen flex flex-col items-center justify-center">
        <Container>
        <PortfolioSection showTitle={true} />
        </Container>

       
      </section>

     

      

      <section className="min-h-screen flex flex-col items-center justify-center">
        <Container className="w-full">
          <div className="flex flex-col items-center justify-center gap-10 px-0 md:px-8">
            <h1 className="text-3xl font-bold text-white text-center">{t("home.about.title")}</h1>

            <div className="grid grid-cols-1 md:grid-cols-[6fr_5fr] items-center justify-center gap-14">
              <div><img src={nosotrosImg} alt="img1" /></div>


              <div className="flex flex-col gap-4">
               <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-bold uppercase tracking-widest text-gradient inline-flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-[#53C1A9] to-[#4AB39A]"></span>
                     {t("home.about.badge")}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase leading-tight">
                 {t("home.about.subtitle")} <br/>
                    {/* <span className="text-gradient">el ecosistema minero</span> */}
                  </h2>
                </div>

                <div className="h-1 w-20 bg-gradient-to-r from-[#53C1A9] to-[#4AB39A] rounded-full"></div>

                <p className="text-white/90 text-base leading-relaxed">
                {t("home.about.description")}
                </p>
                <div className="flex mt-4">
                  <Button variant="gradient" className="uppercase group">
                    <span>{t("home.about.button")}</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      </div>




<div className="bg-gradient-reverse2">
<section className=" min-h-screen flex flex-col items-center justify-center">
        <Container className="max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-16 px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center justify-center gap-14">
              <div>
                <h1 className="text-3xl font-bold text-white text-center md:text-left">{t("home.team.title")}</h1>
              </div>
              <div className="pr-0">
                <p className="text-white pl-0 md:pl-20 text-center md:text-left">{t("home.team.description")}</p>
        </div>
      </div>

            <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-6">
              {useTeamMembers().map((item, index) => (
                <TeamCard key={index} member={item.member} image={item.image} />
              ))} 
            </div>
          </div>
        </Container>
      </section>

      <section className=" min-h-screen flex flex-col items-center justify-center">
        
        <Container>
          <div className="flex flex-col items-center justify-center gap-16 px-16"></div>
      <TestimonialsSection />
     
     
      <div className="flex flex-col gap-4 items-center justify-center pt-16">
          <h1 className="text-3xl font-bold text-white text-center">{t("home.clients.title")}</h1>
          <BrandsGrid />
      </div>
    </Container>
      </section>


      <section className=" min-h-screen flex flex-col items-center justify-center">


      <Container>
          <div className="flex flex-col gap-16 px-0 md:px-8">
          <h1 className="text-white text-center text-3xl font-bold uppercase">{t("home.chooseUs.title")}</h1>
          <ChooseUsSection 
            data={chooseUsData}
             />
          </div>
        </Container>     
      </section>






      <section className="min-h-screen flex flex-col items-center justify-center">
        <Container className="w-full">
          <div className="flex flex-col items-center justify-center gap-10 px-0 md:px-8">
            <h1 className="text-3xl font-bold text-white text-center uppercase">{t("home.workflow.title")}</h1>
 
             <div className="mt-12 flex justify-center">
               <div className="max-w-3xl">
                 <img 
                   src={flujoImg} 
                   alt="Flujo de trabajo de Meta Mining Media" 
                   className="w-full h-auto object-contain"
                 />
               </div>
             </div>
           </div>
          </Container>
        </section>




<section className="  min-h-screen flex flex-col items-center justify-center py-24">
        <Container>
          <div className="flex flex-col gap-16 px-0 md:px-8">
          <h1 className="text-white text-center text-3xl font-bold uppercase">{t("home.contact.title")}</h1>
          <ContactSection />
          </div>
        </Container>
    </section>

</div>
      
</section>

    </div>
  );
};
