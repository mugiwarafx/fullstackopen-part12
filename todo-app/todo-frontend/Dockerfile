FROM node:18 as base

WORKDIR /Users/superjordi/repos/fullstackopen-part12/todo-app/todo-frontend

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test
RUN npm ci
COPY . .
CMD [ "npm", "run", "test" ]

FROM base as prod
ENV REACT_APP_BACKEND_URL='http://localhost:8000'
RUN npm ci --production
COPY . .
CMD [ "node", "server.js" ]