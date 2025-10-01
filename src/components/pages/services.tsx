import { useTranslation } from 'react-i18next';
import Container from '../layouts/Container'
import { Breadcrumb } from '../organisms/Breadcrumb'
import { InformativeBox } from '../organisms/informativeBox'
import Header from '../organisms/Header'
import { ServiceCard } from '../molecules/ServiceCard'
import { useFetch } from '../../hooks/useFetch'
import { getServices } from "../../services/articles/article.service";
import type { servicesSchema } from "../../schema/mmm/types";


export const ServicesPage = () => {
    const { t } = useTranslation();
    const { data, loading, error } = useFetch<servicesSchema[]>(getServices);
    if (loading) return <p>{t("services.loading")}</p>;
    if (error) return <p>{t("services.error")}</p>;

   
    return (
        <>
            <main>
                <section className="bg-gradient min-h-screen flex flex-col">
                    <Header className="relative z-10" />
                    <Container>
                        <div className="py-12">
                            <Breadcrumb
                                title={<>{t("services.title")}</>}
                                path={t("services.breadcrumb")}
                            />
                        </div>
                    </Container>


                    <Container>
                        <div className="pb-24 pt-12 px-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center gap-6 px-4 sm:px-8 md:px-16">
                                {data?.map((service, index) => (
                                    <ServiceCard 
                                        key={index} 
                                        title={service.category.name} 
                                        subServices={[{ title: service.title, slug: service.slug }]} 
                                        // image={service.image}
                                    />
                                ))}
                            </div>
                        </div>
                    </Container>



                    <Container>
                   <div className="pb-32 px-1">
                <InformativeBox
                            title={t("services.informativeBox.title")}
                            description={t("services.informativeBox.description")}
                            additionalInfo={t("services.informativeBox.additionalInfo")}
                            primaryButton={{ label: t("services.informativeBox.buttons.primary") }}
                            secondaryButton={{ label: t("services.informativeBox.buttons.secondary") }}
                        />
                    </div>
                    </Container>
                </section>
                

            </main>  



        </>
    )
}


