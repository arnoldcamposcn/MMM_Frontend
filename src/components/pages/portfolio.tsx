import { Breadcrumb } from "../organisms/Breadcrumb";
import Container from "../layouts/Container";
import Header from "../organisms/Header";
import { useFetch } from "../../hooks/useFetch";
import { getPortfolio } from "../../services/articles/article.service";
import { PortfolioSection } from "../organisms/PortfolioSection";

type Portfolio = {
  id: number;
  category?: { id: number; name: string };
  title: string;
  short_description?: string;
  image: string;
};

export const PortfolioPage = () => {
  const { data: portfolioItems, loading, error } = useFetch<Portfolio[]>(getPortfolio);

  return (
    <>
      <section className="bg-gradient min-h-screen flex flex-col">
        <Header className="relative z-10" />

        <main>
          <Container>
            <div className="py-12">
              <Breadcrumb
                title={<>PORTAFOLIO</>}
                path="INICIO / PORTAFOLIO"
              />
            </div>
          </Container>

          <Container>
            <div className="pb-24 md:pb-24 lg:pb-24 px-0 md:px-16">
              {loading && <p className="text-center text-white">Cargando portafolio...</p>}
              {error && <p className="text-center text-white">Hubo un error al cargar el portafolio.</p>}
              {portfolioItems && <PortfolioSection />}
            </div>
          </Container>
        </main>
      </section>
    </>
  );
};
