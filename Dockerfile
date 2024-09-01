FROM node:alpine3.18 as build
#Build App
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
# Serve with Nginx
FROM nginx:stable-alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g","daemon off;"]