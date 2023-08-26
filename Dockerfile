FROM node:18-alpine
#Create work directory that will contain source code and other details
WORKDIR /app

COPY package.json ./

RUN npm install
#Bundle application source code
COPY . .

EXPOSE 8081

CMD ["npm", "start"]