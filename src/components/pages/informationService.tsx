import Header from "../organisms/Header"
import Container from "../layouts/Container"
import { Breadcrumb } from "../organisms/Breadcrumb"
import { CarouselSlider } from "../organisms/carouselSlider"
import Faq from '../organisms/Faq';
import { faqData } from '../../data/faq.data';
import ChooseUsSection from '../organisms/ChooseUsSection';
import ValuesSection from '../organisms/ValuesSection';
import { benefitsData } from '../../data/benefits.data';
import { ContactSection } from "../organisms/ContactSection";
import TestimonialsSection from "../organisms/TestimonialsSection";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { getInformationService } from "../../services/articles/article.service";
import type { informationService } from "../../schema/mmm/types";
import flujoImg from "@/assets/all/fluijo.png";

export const InformationServicePage = () => {
    const { slug } = useParams<{ slug: string }>();

    const { data, loading, error } = useFetch<informationService>(
        () => getInformationService(slug || ""),
        [slug]
    );

    if (loading) return <p>Cargando servicio...</p>;
    if (error) return <p>Hubo un error al cargar el servicio.</p>;
    if (!data) return <p>No se encontró el servicio.</p>;

    return (
        <section className="bg-gradient min-h-screen flex flex-col">
            <Header className="relative z-10" />
            <main>
                <Container>
                    <div className="py-12">
                        <Breadcrumb
                            title={<>{data.title.toUpperCase()}</>}
                            path={`INICIO / SERVICIOS / ${data.title.toUpperCase()}`}
                        // description={data.description}
                        />
                    </div>
                </Container>

                <Container>
                    <div className="px-8">
                        <CarouselSlider />
                    </div>
                </Container>


                <Container className="">
                    <div className="px-8">
                        <p className="text-paragraph text-justify">{data.description}</p>
                    </div>
                </Container>


                <Container>

                    <div className="flex flex-col gap-14 px-8 pt-24 pb-32">
                        <h1 className="text-white text-center text-3xl font-bold uppercase">¿Que incluye el servicio?</h1>
                        <ChooseUsSection
                            data={data.features.map((feature, index) => ({
                                title: feature.title,
                                description: feature.description,
                                number: (index + 1).toString().padStart(2, '0')
                            }))}
                        />
                    </div>
                </Container>

                <Container className="pb-40">
                    <ValuesSection
                        title="Beneficios"
                        data={benefitsData}
                    />
                </Container>


                <Container className="pb-40">
                    <div className="flex flex-col items-center justify-center gap-10 px-8">
                        <h1 className="text-3xl font-bold text-white text-center uppercase">Nuestro Flujo de Trabajo</h1>

                        <div className="mt-12 flex justify-center">
                            <div className="max-w-4xl">
                                <img
                                    src={flujoImg}
                                    alt="Flujo de trabajo de Meta Mining Media"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </Container>

                <div className="pb-40">
                    <TestimonialsSection />
                </div>


                <Container>
                    <div className="text-center flex flex-col items-center justify-center gap-14 px-8 pb-24">
                        <h1 className="text-white text-3xl font-bold uppercase">Preguntas Frecuentes</h1>

                        <div className="">
                            <Container className="w-full">
                                <Faq data={faqData} />
                            </Container>
                        </div>
                    </div>
                </Container>

                <Container className="py-24">
                    <div className="flex flex-col gap-14 px-8">
                        <h1 className="text-white text-center text-3xl font-bold uppercase">Contáctanos</h1>
                        <ContactSection />
                    </div>
                </Container>



            </main>
        </section>
    )
}
