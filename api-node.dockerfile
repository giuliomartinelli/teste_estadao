FROM node:latest

RUN npm install pm2 -g

WORKDIR /usr/src/app

COPY ./api/package*.json ./

RUN npm install

COPY ./api .

EXPOSE 3000

#CMD ["node", "app.js"]
CMD ["pm2-runtime", "start", "app.js", "--name", "estadao", "--watch"]