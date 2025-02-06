# MapTheTree Deployment Runbook

## Overview
This runbook details the deployment procedures for the MapTheTree application.

## Pre-deployment Checklist
- [ ] All required environment variables configured
- [ ] Database backup completed
- [ ] Feature flags configured
- [ ] Security scan completed
- [ ] Performance tests passed
- [ ] User acceptance testing completed

## Deployment Steps

### 1. Database Migration
```bash
# Database backup command
sqlite3 production.db .backup 'backup/prod_$(date +%Y%m%d).db'

# Run migrations
npm run migrate
```

### 2. Frontend Deployment
```bash
# Build frontend
npm run build

# Deploy to Vercel/self-hosted
vercel deploy --prod
```

### 3. Backend Deployment
```bash
# Update dependencies
npm install

# Start new backend instance
pm2 start server.js --name maptheTree
```

## Verification Steps
- [ ] Database migrations completed successfully
- [ ] Frontend accessible and loading correctly
- [ ] Backend health checks passing
- [ ] API endpoints responding correctly
- [ ] Authentication working
- [ ] Metrics collection operational

## Rollback Procedures
### Database Rollback
```bash
sqlite3 production.db < rollback/migration_$(VERSION).sql
```

### Frontend Rollback
```bash
vercel rollback
```

### Backend Rollback
```bash
pm2 rollback maptheTree
```

## Monitoring and Alerts
- Dashboard URL: `https://metrics.maptheTree.com`
- Alert thresholds:
  - Response time > 500ms
  - Error rate > 1%
  - CPU usage > 80%
  - Memory usage > 90%

## Emergency Contacts
- Primary On-Call: `oncall@maptheTree.com`
- Secondary On-Call: `backup@maptheTree.com`
- Security Team: `security@maptheTree.com`

## Version History
| Version | Date | Changes | Author |
|---------|------|---------|---------|
| 1.0.0   | 2024-02-04 | Initial version | Team |