FROM node:18-alpine

WORKDIR /cloudStorage
COPY . .
RUN npm i

EXPOSE 8888

CMD [ "npm", "start" ]