FROM node:14.16.0-alpine3.13

# Create app user and group
RUN addgroup -S app && adduser -S -G app app

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Ensure the app folder is owned by the non-root user
RUN chown -R app:app /app

# Ensure entrypoint and wait-for scripts are executable
RUN chmod +x /app/docker-entrypoint.sh /app/wait-for.sh

# Use non-root user
USER app

# Expose the backend port
EXPOSE 8000

# Set default entrypoint and CMD
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["npm", "start"]
