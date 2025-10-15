import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { PortfolioCard } from "../molecules/PortfolioCard";
import { Button } from "../atoms/Button";
import { useFetch } from "../../hooks/useFetch";
import { usePageLoading } from "../../hooks/usePageLoading";
import { getPortfolio } from "../../services/articles/article.service";
import { Link } from "react-router-dom";

type PortfolioItem = {
  id: number;
  category?: { id: number; name: string };
  title: string;
  short_description?: string;
  image: string;
};

interface PortfolioSectionProps {
  showTitle?: boolean;
  showAllProjectsButton?: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ showTitle = false, showAllProjectsButton = false }) => {
  const { t } = useTranslation();
  const { data: portfolioItems, loading, error } = useFetch<PortfolioItem[]>(getPortfolio);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  // Registrar estado de carga en el contexto global
  usePageLoading(loading, 'portfolio-section');

  const categories = useMemo(() => {
    const map = new Map<number, string>();
    (portfolioItems ?? []).forEach((i) => {
      if (i.category?.id && i.category?.name) {
        map.set(i.category.id, i.category.name);
      }
    });
    return Array.from(map, ([id, name]) => ({ id, name }));
  }, [portfolioItems]);

  const filtered = useMemo(() => {
    if (!portfolioItems) return [];
    if (activeCategoryId === null) return portfolioItems;
    return portfolioItems.filter((i) => i.category?.id === activeCategoryId);
  }, [portfolioItems, activeCategoryId]);

  const visibleData = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const handleCategoryChange = (id: number | null) => {
    setActiveCategoryId(id);
    setVisibleCount(8);
  };

  if (loading) return <p className="text-center text-white">{t("portfolio.section.loading")}</p>;
  if (error) return <p className="text-center text-white">{t("portfolio.section.error")}</p>;

  return (
    <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
      {showTitle && (
        <h1 className="text-2xl md:text-[28px] font-bold text-white text-center uppercase">
          {t("portfolio.section.title")}
        </h1>
      )}
      
      {/* Mobile: Chips scrollables horizontales */}
      <div className="w-full md:hidden">
        <div
          className="flex gap-4 overflow-x-auto px-4 py-2 md:py-3 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label={t("portfolio.section.filters.mobileLabel")}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategoryId === null}
            onClick={() => handleCategoryChange(null)}
            className={`px-2 pb-1 transition whitespace-nowrap snap-start uppercase border-b-2 text-white ${
              activeCategoryId === null 
                ? "border-white" 
                : "border-transparent hover:border-gray-400"
            }`}
          >
            {t("portfolio.section.filters.all")}
          </button>
          {categories.map((cat) => {
            const active = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-2 pb-1 transition whitespace-nowrap snap-start uppercase border-b-2 text-white ${
                  active 
                    ? "border-white" 
                    : "border-transparent hover:border-gray-400"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop: filtros en filas */}
      <div
        className="hidden md:flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white font-medium"
        role="tablist"
        aria-label={t("portfolio.section.filters.desktopLabel")}
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategoryId === null}
          onClick={() => handleCategoryChange(null)}
          className={`menu-services px-0 pb-1 transition uppercase border-b-2 ${
            activeCategoryId === null 
              ? "border-white" 
              : "border-transparent hover:border-gray-400"
          }`}
        >
          {t("portfolio.section.filters.all")}
        </button>
        {categories.map((cat) => {
          const active = activeCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => handleCategoryChange(cat.id)}
              className={`menu-services px-0 pb-1 transition uppercase border-b-2 ${
                active 
                  ? "border-white" 
                  : "border-transparent hover:border-gray-400"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-4 gap-6 md:gap-4 lg:gap-6 text-white uppercase text-lg font-medium w-full items-stretch">
        {visibleData.length === 0 ? (
          <div className="col-span-full text-center normal-case font-normal text-white/80">
            {t("portfolio.section.noProjects")}
          </div>
        ) : (
          visibleData.map((item) => (
            <PortfolioCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.short_description}
            />
          ))
        )}
      </div>

      {/* Botones condicionales */}
      <div className="flex flex-col items-center gap-4 mt-0">
        {visibleCount < filtered.length && (
          <Button
            variant="gradient"
            className=""
            onClick={() => setVisibleCount((prev) => prev + 8)}
          >
            {t("portfolio.section.buttons.seeMore")}
          </Button>
        )}
        {showAllProjectsButton && (
          <Link to="/portafolio">
            <Button variant="outline" className="uppercase">
              {t("portfolio.section.buttons.seeAll")}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
