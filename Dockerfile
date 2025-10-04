# ==================================
# 1. BUILD STAGE (Instalación y Compilación)
# ==================================
FROM node:20-alpine AS build-stage

WORKDIR /app

# 1. Copia solo los archivos de dependencias (para caché)
COPY package.json package-lock.json ./

# 2. INSTALA LAS DEPENDENCIAS (CORREGIDO: Usa npm ci)
RUN npm ci

# 3. Copia el resto del código fuente
COPY . .

# 4. COMPILACIÓN (CORREGIDO: Usa npm run build para ejecutar el script de package.json)
RUN npm run build


# ==================================
# 2. PRODUCTION STAGE (Servicio Nginx)
# ==================================
FROM nginx:stable-alpine AS production-stage

# Copia los archivos compilados.
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]