#!/usr/bin/env bash
set -euo pipefail
# "Integration" here means: build succeeds (and optionally we can curl a running API during e2e).
npm ci
npm run build
echo "mock_frontend integration OK (build)"
