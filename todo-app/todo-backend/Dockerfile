FROM node:16

WORKDIR /Users/superjordi/repos/fullstackopen-part12/todo-app/todo-backendp

COPY --chown=node:node . .

RUN npm ci 

ENV DEBUG=todo-app-backend:*

USER node

CMD npm start
