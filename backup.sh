#!/bin/bash

TIMESTAMP=$(date +%F-%H%M)

BACKUP_DIR="$HOME/mini-saas-backups"

BACKUP_NAME="backup-$TIMESTAMP.tar.gz"

mkdir -p "$BACKUP_DIR"

tar -czf "$BACKUP_DIR/$BACKUP_NAME" .github backend frontend img docker-compose.yml README.md
