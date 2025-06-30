FROM node:18-alpine
RUN apk add --no-cache git
RUN git clone https://github.com/eMahtab/node-express-hello-world /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
