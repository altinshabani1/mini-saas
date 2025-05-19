#!/bin/sh
# wait-for.sh

host="$1"
shift
cmd="$@"

until nc -z "$host" 27017; do
  echo "Waiting for $host:27017..."
  sleep 1
done

exec $cmd
