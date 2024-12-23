
FROM node:18-alpine as build


WORKDIR /app


COPY package.json yarn.lock ./


RUN yarn install


# Copy the public and src folders from their actual paths
COPY eadw-viz/public ./public

COPY eadw-viz/src ./src


COPY . .


RUN ls -la ./public
RUN ls -la ./public/index.html


RUN yarn build


FROM nginx:alpine


COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
