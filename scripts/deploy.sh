#!/usr/bin/env bash

# Abort if any command exits with error
set -e

# Change to directory containing compiled files
cd public

SOURCE=$1
TARGET=$2

# Sync other files
aws s3 sync "${SOURCE}" "${TARGET}" --region us-west-2 --acl public-read --cache-control 'max-age=2629000' --exclude '*.html' --exclude '*.svg' --exclude '*.ico'

# Sync SVG files
# + 'Content-Type: image/svg+xml; charset=utf-8'
aws s3 sync "${SOURCE}" "${TARGET}" --region us-west-2 --acl public-read --cache-control 'max-age=2629000' --content-type 'image/svg+xml; charset=utf-8' --exclude '*' --include '*.svg'

# Sync ICO files (favicon)
# + 'Content-Type: image/x-icon'
aws s3 sync "${SOURCE}" "${TARGET}" --region us-west-2 --acl public-read --cache-control 'max-age=2629000' --content-type 'image/x-icon' --exclude '*' --include '*.ico'

# Sync HTML files
# + 'Cache-Control: public, must-revalidate, proxy-revalidate, max-age=0'
aws s3 sync "${SOURCE}" "${TARGET}" --region us-west-2 --acl public-read --cache-control 'public, must-revalidate, proxy-revalidate, max-age=0' --exclude '*' --include '*.html'

unset -v SOURCE
unset -v TARGET