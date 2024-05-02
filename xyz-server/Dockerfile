FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY xyz-server .
RUN npm i -g nodemon
CMD [ "nodemon", "xyz.js" ]