FROM node:16-alpine

ENV NODE_END=production

WORKDIR /app

COPY . /app

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "start"]