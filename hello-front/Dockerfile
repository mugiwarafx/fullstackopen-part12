FROM node:16 AS build-stage

WORKDIR /Users/superjordi/repos/fullstackopen-part12/hello-front

COPY . .

RUN npm ci

RUN npm run build

# This is a new stage, everything before this is gone, except the files we want to COPY
FROM nginx:1.20-alpine

# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the docker hub page
COPY --from=build-stage /Users/superjordi/repos/fullstackopen-part12/hello-front/build /usr/share/nginx/html