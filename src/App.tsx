import { useFetch } from "./hooks/useFetch";
import { getTestimonials } from "./services/articles/article.service";
import type { testimonials } from "./schema/mmm/types";

const App = () => {
  const { data, loading, error, refetch } = useFetch<testimonials[]>(getTestimonials);

  if (loading) return <p>Cargando portafolio...</p>;
  if (error) return <p>Hubo un error al cargar el portafolio.</p>;

  return (
    <div>
      <h1>Servicios</h1>
      <ul>
        {data?.map((portfolio) => (
          <li key={portfolio.company_name}>
            <h3>{portfolio.company_name}</h3>
            <p>{portfolio.comment}</p>
            <p>
              Categoría: {portfolio.manager_name} ({portfolio.manager_position})
            </p>  
            <img src={portfolio.manager_image} alt={portfolio.manager_name} width="150" />
          </li>
        ))}
      </ul>
      <button onClick={refetch}>Refrescar</button>
    </div>
  );
};

export default App;
