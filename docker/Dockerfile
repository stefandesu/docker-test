FROM node:12-alpine

WORKDIR /usr/src/app

# Copy and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8091

# Use pm2 to run app
RUN npm install pm2 -g
CMD [ "pm2-runtime", "index.js" ]
