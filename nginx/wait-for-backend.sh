#!/bin/sh

echo "⏳ Waiting for the backend service to be ready..."

# Keep checking until backend responds
until curl -s http://backend:8000/health > /dev/null; do
  echo "Backend not ready yet. Retrying in 3 seconds..."
  sleep 3
done

echo "✅ Backend is up! Starting Nginx..."
exec nginx -g "daemon off;"
