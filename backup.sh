#!/bin/bash

# Define backup folder
BACKUP_DIR="$HOME/mini-saas-backups"

# Create backup folder if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Create a timestamped backup archive
tar -czf "$BACKUP_DIR/backup-$(date +%F-%H%M).tar.gz" .github backend frontend img docker-compose.yml README.md
