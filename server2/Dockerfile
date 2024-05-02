FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY server2 .
RUN npm i -g nodemon
CMD [ "nodemon", "server2.js" ]