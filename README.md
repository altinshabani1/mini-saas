# Mini-SaaS

![Docker Image CI](https://github.com/altinshabani1/mini-saas/actions/workflows/pipeline.yml/badge.svg)

A simple SaaS application for managing movies with modern DevOps practices — including containerization, CI/CD, monitoring, and backup.

## 🚀 Features

- Add and delete movies through a responsive frontend.
- API built with **Node.js** and **Express**, exposing a `/health` endpoint for status checks.
- Reverse proxy with **Nginx**, serving frontend and API.
- Persistent data storage using **PostgreSQL**.
- Containerized using **Docker**, orchestrated with **Docker Compose**.
- Automated CI/CD pipeline using **GitHub Actions**, with deployment to a remote Ubuntu server.
- Images pushed to **GitHub Container Registry (GHCR)**.
- Monitoring stack using **Prometheus**, **Grafana**, **node_exporter**, and **postgres_exporter**.
- Scheduled database backups with `pg_dump` and cron jobs.
- Secure configuration with `.env.sample` and repository secrets.

## 🧱 Project Structure

mini-saas/
├── backend/ # Node.js API with Express
├── frontend/ # Simple React interface
├── nginx/ # Nginx reverse proxy config
├── prometheus/ # Prometheus configuration
├── grafana/ # Dashboards and settings
├── postgres-init/ # SQL init scripts
├── .github/workflows/ # GitHub Actions CI/CD pipeline
├── docker-compose.yml # Service orchestration
└── backup.sh # Database backup script


## 🐳 Deployment

To run locally:
docker compose up --build


To deploy via CI/CD:

Push to the main branch or tag a version (v1.0.0, etc.).

The GitHub Actions pipeline will build and push the Docker image to GHCR.

The remote server automatically pulls and restarts the container.

📊 Monitoring
Prometheus collects metrics from all services.

Grafana dashboards visualize application and database health.

Standard dashboards are saved in grafana/dashboards/.

Visit http://<your-server-ip>:3000 for Grafana (default credentials: admin/admin).

🔁 Backup
The backup.sh script automatically backs up the PostgreSQL database daily at 2 AM using cron:
pg_dump > /opt/backups/db-$(date +%F).sql

🛡️ Security
Protected main branch with pull request review and linear history enforcement.

Environment secrets and access tokens managed securely via GitHub repository secrets.

✅ Build Status

