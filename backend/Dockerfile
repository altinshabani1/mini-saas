FROM node:14.16.0-alpine3.13

# Create app user and group (use -S for both)
RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app, including entrypoint scripts
COPY . .

# Ensure scripts have Unix line endings and are executable (fix for Windows)
RUN dos2unix /app/docker-entrypoint.sh /app/wait-for.sh || echo "dos2unix not installed, skipping"
RUN chmod +x /app/docker-entrypoint.sh /app/wait-for.sh

# Make sure app directory is owned by app user
RUN chown -R app:app /app

# Switch to non-root user
USER app

EXPOSE 8000

ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["npm", "start"]
