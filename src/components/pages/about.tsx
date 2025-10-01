// import { Button } from '../atoms/Button'
import Container from '../layouts/Container'
import { TeamCard } from '../molecules/TeamCard';
import { Breadcrumb } from '../organisms/Breadcrumb'
import ValuesSection from '../organisms/ValuesSection';
import { valuesData } from '../../data/values.data';
import { teamMembers } from '../../data/team.data';
import Header from '../organisms/Header';

import nosotrosImg from "@/assets/all/nosotros.png";


export const AboutPage = () => {
    return (
        <section className="bg-gradient min-h-screen flex flex-col ">
            <Header className="relative z-10" />
            <main>
                <Container>
                    <div className="py-8 md:py-8 lg:py-12">
                        <Breadcrumb
                            title={<>NOSOTROS</>}
                            path="INICIO / NOSOTROS"
                        // description="Explora los proyectos que hemos realizado y descubre cómo transformamos ideas en resultados impactantes para la industria minera."
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-8 px-0 md:px-0 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-[6fr_5fr] items-center justify-center gap-14">
                            <div><img src={nosotrosImg} alt="img1" /></div>
                            <div className="flex flex-col gap-4">
                                <h1 className="title-text">Sobre Nosotros</h1>
                                <p className="text-paragraph">Meta Mining Media (MMM) es una productora y agencia digital especializada en el sector minero. Su propósito es conectar a compañías, proveedores y clústeres con sus principales audiencias a través de propuestas creativas y contenidos de alto impacto. Bajo MMM se desarrollan tres producciones insignia que reflejan el dinamismo y la evolución de la industria.</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-white text-justify">El proyecto nace de la experiencia de CODEa UNI, organización educativa que ha reunido a miles de estudiantes y profesionales de la minería en distintos países. Desde esa base académica y comunitaria, Meta Mining Media surge como una evolución natural que impulsa nuevas formas de comunicar, inspirar y fortalecer los lazos dentro del ecosistema minero. Nuestra esencia está marcada por el compromiso con la innovación, la generación de conocimiento y la creación de espacios de encuentro que trascienden lo digital. De esta manera, buscamos no solo contar historias de la minería, sino también contribuir al desarrollo de una comunidad global que valore, comparta y proyecte el futuro del sector.</p>
                        </div>
                    </div>
                </Container>


                {/* nuestro proposito  */}
                <Container>
                    <div className="flex flex-col items-center justify-center gap-14 px-8 pt-20">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-white uppercase">Nuestro Propósito</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {/* Misión Card */}
                            <div className="flex flex-col gap-4 justify-center text-center rounded-2xl px-8 py-16 gradient-card">
                                <h1 className="text-2xl font-semibold text-white uppercase">Misión</h1>
                                <p className="text-white">Impulsar la comunicación minera con propuestas creativas, técnicas y humanas que transmitan innovación, seguridad y sostenibilidad, fortaleciendo el posicionamiento del sector.</p>
                            </div>

                            {/* Visión Card */}
                            <div className="flex flex-col gap-4 justify-center text-center rounded-2xl px-8 py-16 gradient-card">
                                <h1 className="text-2xl font-semibold text-white uppercase">Visión</h1>
                                <p className="text-white">Ser la agencia líder en medios mineros de LATAM, reconocida por integrar comunidad, tecnología y creatividad en proyectos de alto impacto que inspiren y transformen la comunicación minera.</p>
                            </div>
                        </div>
                    </div>
                </Container>



                <div className="pt-24 pb-24 md:pb-46 lg:pb-36">
                    <ValuesSection
                        title="NUESTROS VALORES"
                        data={valuesData}
                    />
                </div>


                <Container className="pb-24">
                    <div className="flex flex-col items-stretch md:items-stretch lg:items-center justify-center gap-8 md:gap-16 side-spaces">
                        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center justify-center gap-4 md:gap-14">
                            <div>
                                <h1 className="title-text text-center md:text-left">CONOCE A NUESTRO <br />
                                    EQUIPO</h1>
                            </div>
                            <div className="pr-0">
                                <p className="text-paragraph pl-0 md:pl-2 lg:pl-8 text-center md:text-left">En MMM reunimos talento creativo y visión minera para crear proyectos que inspiran, conectan y generan valor real.</p>
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



