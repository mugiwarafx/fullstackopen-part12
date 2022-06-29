FROM node:16 AS test
USER node
WORKDIR /usr/src/app
COPY --chown=node:node . ./test
RUN npm ci
RUN CI=true npm test

FROM node:16 as prod
USER node
WORKDIR /usr/src/app
COPY --chown=node:node . .
ENV BACKEND_HOSTNAME=http://localhost:8080/api/
RUN npm install && npm run build
#CMD ["npm", "run", "build"]

FROM nginx:1.20.1 AS proxy-server
EXPOSE 80
COPY --chown=nginx:nginx --from=prod /usr/src/app/build /usr/share/nginx/html