#!/bin/bash

# Levanta contenedor
docker start fractal-postgres

# Inicia backend
(cd backend/fractal-zen-backend && npm run dev) &

# Inicia frontend
(cd frontend/fractal-zen-frontend && npm run dev) &

# Espera a que cualquiera termine (normalmente nunca)
wait