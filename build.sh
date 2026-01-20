#!/bin/bash
set -e

echo "Installing dependencies..."
npm ci --omit=dev

echo "Building application..."
npm run build

echo "Build completed successfully!"
