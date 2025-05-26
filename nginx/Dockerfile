FROM nginx:latest

# Install curl and netcat-openbsd (instead of virtual "netcat")
RUN apt-get update && apt-get install -y curl netcat-openbsd && rm -rf /var/lib/apt/lists/*

COPY nginx.conf /etc/nginx/nginx.conf
COPY wait-for-backend.sh /wait-for-backend.sh

RUN chmod +x /wait-for-backend.sh

CMD ["/wait-for-backend.sh"]
