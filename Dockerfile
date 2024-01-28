FROM node:lts-alpine3.19
ENV NODE_ENV production
ENV PORT 3005

WORKDIR /usr/today-app
COPY package.json package-lock.json .
RUN npm ci

COPY . .
RUN npm run build

USER node
CMD ["node", "./build/index.js"]
EXPOSE ${PORT}