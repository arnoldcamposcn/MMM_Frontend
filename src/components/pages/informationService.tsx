import { useTranslation } from 'react-i18next';
import Header from "../organisms/Header"
import Container from "../layouts/Container"
import { Breadcrumb } from "../organisms/Breadcrumb"
import { CarouselSlider } from "../organisms/carouselSlider"
import Faq from '../organisms/Faq';
import { useFaqData } from '../../data/faq.data';
import ChooseUsSection from '../organisms/ChooseUsSection';
import ValuesSection from '../organisms/ValuesSection';
import { ContactSection } from "../organisms/ContactSection";
import TestimonialsSection from "../organisms/TestimonialsSection";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { getInformationService } from "../../services/articles/article.service";
import type { informationService } from "../../schema/mmm/types";
import flujoImg from "@/assets/all/fluijo.png";

export const InformationServicePage = () => {
    const { t } = useTranslation();
    const { slug } = useParams<{ slug: string }>();
    const faqData = useFaqData();

    const { data, loading, error } = useFetch<informationService>(
        () => getInformationService(slug || ""),
        [slug]
    );

    if (loading) return <p>{t("informationService.loading")}</p>;
    if (error) return <p>{t("informationService.error")}</p>;
    if (!data) return <p>{t("informationService.notFound")}</p>;

    return (
        <section className="bg-gradient min-h-screen flex flex-col">
            <Header />
            <main>
                <Container>
                <div className="py-8 md:py-12 lg:py-12">
                <Breadcrumb
                            title={<>{data.title.toUpperCase()}</>}
                            path={`${t("informationService.breadcrumb")} / ${data.title.toUpperCase()}`}
                        // description={data.description}
                        />
                    </div>
                </Container>

                <Container>
                    <div className="px-0 md:px-8">
                        <CarouselSlider slug={data.slug} />
                    </div>
                </Container>


                <Container className="">
                    <div className="px-0 md:px-8">
                        <p className="text-paragraph text-justify">{data.description}</p>
                    </div>
                </Container>


                <Container>

                    <div className="flex flex-col gap-14 px-0 md:px-8 pt-24 pb-32">
                        <h1 className="text-white text-center text-2xl md:text-3xl font-bold uppercase">{t("informationService.sections.whatIncludes")}</h1>
                        <ChooseUsSection
                            data={data.features.map((feature, index) => ({
                                title: feature.title,
                                description: feature.description,
                                number: (index + 1).toString().padStart(2, '0')
                            }))}
                        />
                    </div>
                </Container>

                <Container className="pb-20 md:pb-40">
                    <ValuesSection />
                </Container>


                <Container className="pb-20 md:pb-40">
                    <div className="flex flex-col items-center justify-center gap-10 px-0 md:px-8">
                        <h1 className="text-2xl md:text-3xl font-bold text-white text-center uppercase">{t("informationService.sections.workflow")}</h1>

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

                <div className="pb-20 md:pb-40">
                    <TestimonialsSection />
                </div>


                <Container>
                    <div className="text-center flex flex-col items-center justify-center gap-6 md:gap-14 px-0 md:px-8 pb-0 md:pb-24">
                        <h1 className="text-white text-2xl md:text-3xl font-bold uppercase">{t("informationService.sections.faq")}</h1>

                        <div>
                            <Container>
                                <Faq data={faqData} />
                            </Container>
                        </div>
                    </div>
                </Container>

                <Container className="py-20 md:py-24">
                    <div className="flex flex-col gap-6 md:gap-14 px-0 md:px-8">
                        <h1 className="text-white text-center text-2xl md:text-3xl font-bold uppercase">{t("informationService.sections.contact")}</h1>
                        <ContactSection />
                    </div>
                </Container>



            </main>
        </section>
    )
}
