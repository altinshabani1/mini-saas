FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


RUN chown -R app:app /app

RUN chmod +x /app/docker-entrypoint.sh

RUN chmod +x /app/wait-for.sh


ENTRYPOINT ["/app/docker-entrypoint.sh"]

USER app

EXPOSE 8000

CMD []
