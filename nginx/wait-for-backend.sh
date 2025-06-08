#!/bin/sh

echo "Waiting for backend..."

until curl -s http://backend:8000/health; do
  echo "Backend not ready. Sleeping..."
  sleep 3
done

echo "Backend is up. Starting Nginx..."
nginx -g 'daemon off;'
