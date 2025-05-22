FROM nginx:latest

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the wait script
COPY wait-for-backend.sh /wait-for-backend.sh
RUN chmod +x /wait-for-backend.sh

# Run the wait script when the container starts
CMD ["/wait-for-backend.sh"]
