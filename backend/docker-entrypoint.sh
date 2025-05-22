#!/bin/sh

# Wait for PostgreSQL to be ready
./wait-for.sh postgres:5432 -- echo "Postgres is up ✅"

# Start the backend app
exec "$@"