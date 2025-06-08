FROM node:14.16.0-alpine3.13

RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Fix permissions so 'app' user owns everything in /app
RUN chown -R app:app /app

USER app

EXPOSE 3000

CMD ["npm", "start"]
