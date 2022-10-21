FROM node:alpine
MAINTAINER facmidia.com
WORKDIR /opt/app
COPY ./books-frontend/package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
