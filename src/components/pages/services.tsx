import Container from '../layouts/Container'
import { Breadcrumb } from '../organisms/Breadcrumb'
import { InformativeBox } from '../organisms/informativeBox'
import Header from '../organisms/Header'
import { ServiceCard } from '../molecules/ServiceCard'
import { useFetch } from '../../hooks/useFetch'
import { getServices } from "../../services/articles/article.service";
import type { servicesSchema } from "../../schema/mmm/types";


export const ServicesPage = () => {
    const { data, loading, error } = useFetch<servicesSchema[]>(getServices);
    if (loading) return <p>Cargando servicios...</p>;
    if (error) return <p>Hubo un error al cargar los servicios.</p>;

   
    return (
        <>
            <main>
                <section className="bg-gradient min-h-screen flex flex-col">
                    <Header className="relative z-10" />
                    <Container>
                        <div className="py-12">
                            <Breadcrumb
                                title={<>SERVICIOS</>}
                                path="INICIO / SERVICIOS"
                                // description="Descubre los servicios que ofrece Meta Mining Media para transformar la comunicación de tu empresa. Desde campañas de marketing digital hasta producciones."
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
                            title={"Transformamos la comunicación minera en experiencias de alto impacto"}
                            description="En Meta Mining Media integramos audiovisual, marketing digital, eventos y soluciones especiales para ayudar a empresas mineras y proveedores a comunicar con claridad, innovación y resultados medibles. Nuestro equipo combina rigor técnico con creatividad, asegurando producciones que fortalecen tu marca y generan confianza en la industria."
                            additionalInfo="+100 proyectos B2B ejecutados con éxito en minería."
                            primaryButton={{ label: "Cotiza tu proyecto" }}
                            secondaryButton={{ label: "Explorar servicios" }}
                        />
                    </div>
                    </Container>
                </section>
                

            </main>  



        </>
    )
}


