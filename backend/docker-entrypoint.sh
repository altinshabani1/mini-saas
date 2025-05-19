#!/bin/sh

echo "Waiting for MongoDB to start..."
/usr/local/bin/wait-for.sh db:27017

echo "Migrating the database..."
npm run db:up

echo "Starting the server..."
npm start
