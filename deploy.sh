#!/bin/bash

# RENAPROV Website Deployment Script for Hostinger (FTP)
# This script can be used for manual deployments or as a reference

set -e  # Exit on any error

echo "🚀 Starting RENAPROV website deployment via FTP..."

# Configuration
HOSTINGER_FTP_HOST="${HOSTINGER_FTP_HOST:-}"
HOSTINGER_FTP_USERNAME="${HOSTINGER_FTP_USERNAME:-}"
HOSTINGER_FTP_PASSWORD="${HOSTINGER_FTP_PASSWORD:-}"
HOSTINGER_FTP_PORT="${HOSTINGER_FTP_PORT:-21}"
HOSTINGER_FTP_PATH="${HOSTINGER_FTP_PATH:-/public_html/subdomain/dev-renaprov}"

# Validate required variables
if [ -z "$HOSTINGER_FTP_HOST" ] || [ -z "$HOSTINGER_FTP_USERNAME" ] || [ -z "$HOSTINGER_FTP_PASSWORD" ]; then
    echo "❌ Error: FTP credentials must be set"
    echo "Required environment variables:"
    echo "  - HOSTINGER_FTP_HOST"
    echo "  - HOSTINGER_FTP_USERNAME" 
    echo "  - HOSTINGER_FTP_PASSWORD"
    echo "  - HOSTINGER_FTP_PORT (optional, defaults to 21)"
    echo "  - HOSTINGER_FTP_PATH (optional, defaults to /public_html)"
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if lftp is available (preferred) or use ftp
if command -v lftp &> /dev/null; then
    echo "🌐 Deploying to Hostinger using LFTP..."
    
    # Create LFTP script
    cat > /tmp/ftp_upload.lftp << EOF
set ftp:ssl-allow no
set ftp:passive-mode on
set ftp:list-options -a
open -p $HOSTINGER_FTP_PORT ftp://$HOSTINGER_FTP_USERNAME:$HOSTINGER_FTP_PASSWORD@$HOSTINGER_FTP_HOST
cd $HOSTINGER_FTP_PATH
mirror -R --delete --verbose ./dist/ ./
quit
EOF
    
    # Execute LFTP script
    lftp -f /tmp/ftp_upload.lftp
    
    # Clean up
    rm /tmp/ftp_upload.lftp
    
elif command -v ftp &> /dev/null; then
    echo "🌐 Deploying to Hostinger using FTP..."
    echo "⚠️  Note: Basic FTP doesn't support directory uploads well"
    echo "Consider installing lftp for better results: brew install lftp (macOS) or apt-get install lftp (Ubuntu)"
    
    # Create FTP script for basic upload
    cat > /tmp/ftp_upload.ftp << EOF
open $HOSTINGER_FTP_HOST $HOSTINGER_FTP_PORT
user $HOSTINGER_FTP_USERNAME $HOSTINGER_FTP_PASSWORD
cd $HOSTINGER_FTP_PATH
binary
prompt off
mput dist/*
quit
EOF
    
    # Execute FTP script
    ftp -n < /tmp/ftp_upload.ftp
    
    # Clean up
    rm /tmp/ftp_upload.ftp
    
else
    echo "❌ Error: No FTP client found"
    echo "Please install lftp or ftp client:"
    echo "  macOS: brew install lftp"
    echo "  Ubuntu: apt-get install lftp"
    echo "  Windows: Use FileZilla or WinSCP"
    exit 1
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your website should be live at your domain"
echo "📊 Check your Hostinger control panel for any issues"
