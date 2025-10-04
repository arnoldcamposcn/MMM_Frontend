# ==================================
# ETAPA 1: BUILD (CONSTRUCCIÓN)
# Crea los archivos estáticos de React
# ==================================
FROM node:20-alpine AS build-stage

WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package.json package-lock.json ./

# Instala todas las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Ejecuta la construcción de producción (crea la carpeta 'dist' o 'build')
# Nota: Si usas Create React App es 'npm run build', si usas Vite es 'npm run build' por defecto.
RUN npm run build

# ==================================
# ETAPA 2: PRODUCTION (SERVIR CON NGINX)
# Usa una imagen Nginx ligera para servir solo los estáticos
# ==================================
FROM nginx:stable-alpine AS production-stage

# Copia la configuración personalizada de Nginx si existe.
# Si no existe, Nginx usará su configuración por defecto que busca archivos en /usr/share/nginx/html

# Copia los archivos estáticos generados desde la Etapa 1
# La mayoría de los frameworks (Vite, CRA) generan la salida en la carpeta 'dist' o 'build'.
# Ajusta el path '/app/dist' si tu comando 'npm run build' genera una carpeta diferente (ej: /app/build)
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Nginx expone el puerto 80 por defecto
EXPOSE 80

# Comando para iniciar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
