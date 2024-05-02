FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY server1 .
RUN npm i -g nodemon
CMD [ "nodemon", "server1.js" ]