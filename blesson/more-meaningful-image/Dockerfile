FROM node:16

WORKDIR /Users/superjordi/repos/fullstackopen-part12/blesson/more-meaningul-image

COPY --chown=node:node . .

RUN npm ci --only=production

ENV DEBUG=more-meaningful-image:*

CMD npm start
