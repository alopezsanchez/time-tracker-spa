FROM node:14.17.0-alpine

ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY package-lock.json .

COPY . .
RUN npm install
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]
