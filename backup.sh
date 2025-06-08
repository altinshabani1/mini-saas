#!/bin/bash

<<<<<<< HEAD
TIMESTAMP=$(date +%F-%H%M)

BACKUP_DIR="$HOME/mini-saas-backups"

BACKUP_NAME="backup-$TIMESTAMP.tar.gz"

mkdir -p "$BACKUP_DIR"

tar -czf "$BACKUP_DIR/$BACKUP_NAME" .github backend frontend img docker-compose.yml README.md
=======
# Define backup folder
BACKUP_DIR="$HOME/mini-saas-backups"

# Create backup folder if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Create a timestamped backup archive
tar -czf "$BACKUP_DIR/backup-$(date +%F-%H%M).tar.gz" .github backend frontend img docker-compose.yml README.md
>>>>>>> 162b1a8cc29058d7e8ed552cc4be8943a40816b7
