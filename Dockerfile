FROM node:18-alpine

EXPOSE 8888

WORKDIR /cloudStorage
COPY . .
RUN npm i

CMD ["node", "/cloudStorage/src/app.js"]
