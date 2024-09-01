FROM node:alpine3.18 as build
#Build App
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
# Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /user/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g","daemon off;"]