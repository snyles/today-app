FROM node:lts-alpine3.19
ENV NODE_ENV production

WORKDIR /usr/today-app
COPY --chown=node:node . .
RUN npm ci
RUN npm run build

USER node
CMD ["node", "./build/index.js"]
EXPOSE 3001