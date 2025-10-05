// import { Button } from '../atoms/Button'
import { useTranslation } from 'react-i18next';
import Container from '../layouts/Container'
import { TeamCard } from '../molecules/TeamCard';
import { Breadcrumb } from '../organisms/Breadcrumb'
import ValuesSection from '../organisms/ValuesSection';
import { useTeamMembers } from '../../data/team.data';
import Header from '../organisms/Header';

import nosotrosImg from "@/assets/all/nosotros.png";


export const AboutPage = () => {
    const { t } = useTranslation();
    const teamMembers = useTeamMembers();
    
    return (
        <section className="bg-gradient min-h-screen flex flex-col">
            <Header />
            <main>
                <Container>
                    <div className=" pt-24 md:pt-24 pb-8 md:pb-12">
                        <Breadcrumb
                            title={<>{t("about.title").toUpperCase()}</>}
                            path={t("about.breadcrumb")}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 px-0 md:px-0 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-[6fr_5fr] items-center justify-center gap-14">
                            <div><img src={nosotrosImg} alt="img1" /></div>
                            <div className="flex flex-col gap-6 md:gap-6">
                                <h1 className="title-text">{t("about.title")}</h1>
                                <p className="text-paragraph">{t("about.description")}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-white text-justify">{t("about.extendedDescription")}</p>
                        </div>
                    </div>
                </Container>


                {/* nuestro proposito  */}
                <Container>
                    <div className="flex flex-col items-center justify-center gap-12 md:gap-14 px-8 pt-20">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white uppercase">{t("about.purpose.title")}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-6 max-w-3xl mx-auto">
                            {/* Misión Card */}
                            <div className="flex flex-col gap-4 justify-center text-center rounded-2xl px-8 py-16 gradient-card">
                                <h1 className="text-2xl font-semibold text-white uppercase">{t("about.purpose.mission.title")}</h1>
                                <p className="text-white">{t("about.purpose.mission.description")}</p>
                            </div>

                            {/* Visión Card */}
                            <div className="flex flex-col gap-4 justify-center text-center rounded-2xl px-8 py-16 gradient-card">
                                <h1 className="text-2xl font-semibold text-white uppercase">{t("about.purpose.vision.title")}</h1>
                                <p className="text-white">{t("about.purpose.vision.description")}</p>
                            </div>
                        </div>
                    </div>
                </Container>



                <div className="pt-24 pb-24 md:pb-46 lg:pb-36">
                    <ValuesSection />
                </div>


                <Container className="pb-24">
                    <div className="flex flex-col items-stretch md:items-stretch lg:items-center justify-center gap-12 md:gap-16 side-spaces">
                        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center justify-center gap-4 md:gap-14">
                            <div>
                                <h1 className="title-text text-center md:text-left">{t("about.team.title")}</h1>
                            </div>
                            <div className="pr-0">
                                <p className="text-paragraph pl-0 md:pl-2 lg:pl-8 text-center md:text-left">{t("about.team.description")}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6">
                            {teamMembers.map((item, index) => (
                                <TeamCard key={index} member={item.member} image={item.image} />
                            ))}
                        </div>
                    </div>
                </Container>
            </main>


        </section>
    )
}



