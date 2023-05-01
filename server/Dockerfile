FROM node:16
WORKDIR /app
COPY package.json .
RUN apt-get install -y gcc
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]