FROM node:16

WORKDIR /Users/superjordi/repos/fullstackopen-part12/todo-app/todo-frontend

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm start is the command to start the application in development mode
CMD ["npm", "start"]
