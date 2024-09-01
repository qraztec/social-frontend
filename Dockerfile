FROM node:alpine3.18 as build
#Build App
WORKDIR /app
COPY package*.json ./
RUN npm install -f
COPY . .
RUN npm run build
# Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80

CMD ["nginx", "-g","daemon off;"]