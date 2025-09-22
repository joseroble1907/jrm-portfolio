# ---------- Etapa 1: Build ----------
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copiar archivos necesarios para el build
COPY pom.xml mvnw ./
COPY .mvn .mvn
COPY src ./src

# Compilar y empaquetar sin tests
RUN mvn -B -DskipTests package

# ---------- Etapa 2: Runtime ----------
FROM eclipse-temurin:17-jdk-jammy
WORKDIR /app

# Copiar el JAR generado
COPY --from=build /app/target/*.jar app.jar

# Puerto que usará Render (por defecto 10000)
ENV PORT=10000
EXPOSE 10000

# Ejecutar Spring Boot escuchando en 0.0.0.0 y en el puerto $PORT
ENTRYPOINT ["sh","-c","java -jar app.jar --server.port=${PORT} --server.address=0.0.0.0"]
