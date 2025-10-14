// src/main-ssg.tsx
import { ViteSSG } from 'vite-ssg';
import AppNavigator from './Navigation/AppNavigator';

/**
 * Configuración de Vite SSG (Static Site Generation)
 * vite-ssg genera páginas HTML estáticas en tiempo de build
 */

// Función para obtener los slugs de servicios (reemplaza con tu lógica real)
const fetchSlugsFromAPI = async (): Promise<string[]> => {
    // TODO: Reemplazar con llamada real a tu API o servicio
    // Ejemplo: const response = await fetch('tu-api/servicios')
    // const services = await response.json()
    // return services.map(s => s.slug)
    
    // Por ahora, usamos slugs de ejemplo:
    return ['diseno-web', 'marketing-digital']; 
};

/**
 * Lista de rutas para pre-renderizar
 */
export const routes = async () => {
    // Rutas estáticas
    const staticRoutes = [
        '/',
        '/nosotros',
        '/contacto',
        '/portafolio',
        '/servicios',
    ];

    // Rutas dinámicas: obtener slugs de servicios
    const serviceSlugs = await fetchSlugsFromAPI();
    const dynamicRoutes = serviceSlugs.map(slug => `/servicios/${slug}`);

    // Combina todas las rutas
    return [...staticRoutes, ...dynamicRoutes];
};

// Exporta la aplicación usando ViteSSG
export default ViteSSG(
  // Componente raíz de la aplicación
  AppNavigator,
  // Configuración de rutas
  { routes },
);

