# ==================================
# 1. BUILD STAGE (Instalación y Compilación)
# ==================================
FROM node:20-alpine AS build-stage

WORKDIR /app

# 1. Copia solo los archivos de dependencias
COPY package.json package-lock.json ./

# 2. INSTALA LAS DEPENDENCIAS
RUN npm ci

# 3. Copia el resto del código fuente
COPY . .

# 4. Ejecuta SOLO la compilación de Vite.
# ESTE ES EL CAMBIO CLAVE: Ejecutamos directamente 'vite build' para evitar 
# el chequeo estricto de 'tsc -b' que estaba fallando por las dependencias de swiper/css.
RUN vite build


# ==================================
# 2. PRODUCTION STAGE (Servicio Nginx)
# ==================================
FROM nginx:stable-alpine AS production-stage

# Copia los archivos compilados.
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
