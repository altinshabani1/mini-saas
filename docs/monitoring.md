# Monitoring Setup

## Grafana Dashboard
Access the Grafana dashboard here:  
[http://localhost:3001/](http://localhost:3001/)

## Exporters Status

### node_exporter
- Endpoint: `http://node_exporter:9100/metrics`
- Status: UP

### postgres_exporter
- Endpoint: `http://postgres_exporter:9187/metrics`
- Status: UP

### Prometheus
- Endpoint: `http://localhost:9090/metrics`
- Status: UP


For backup script details, see `/opt/backups/db-YYYY-MM-DD.sql` on the server.
