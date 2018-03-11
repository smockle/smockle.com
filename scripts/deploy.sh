#!/usr/bin/env bash

# Abort if any command exits with error
set -e

# Change to directory containing compiled files
cd public

SOURCE=$1
TARGET=$2

# Sync other files
aws s3 sync "${SOURCE}" "${TARGET}" --region us-west-2 --acl public-read --cache-control 'max-age=31536000, immutable' --exclude '*.svg' --exclude '*.ico' --exclude '*.css' --exclude '*.html'

# Sync SVG files
# + 'Content-Type: image/svg+xml; charset=utf-8'
aws s3 sync "${SOURCE}" "${TARGET}" --region us-west-2 --acl public-read --cache-control 'max-age=31536000, immutable' --content-type 'image/svg+xml; charset=utf-8' --exclude '*' --include '*.svg'

# Sync ICO files (favicon)
# + 'Content-Type: image/x-icon'
aws s3 sync "${SOURCE}" "${TARGET}" --region us-west-2 --acl public-read --cache-control 'max-age=31536000, immutable' --content-type 'image/x-icon' --exclude '*' --include '*.ico'

# Sync CSS files
# + 'Content-Type: text/css; charset=utf-8'
aws s3 sync "${SOURCE}" "${TARGET}" --region us-west-2 --acl public-read --cache-control 'max-age=31536000, immutable' --content-type='text/css; charset=utf-8' --exclude '*' --include '*.css'

# Sync HTML files
# + 'Cache-Control: public, must-revalidate, proxy-revalidate, max-age=0'
# + 'Content-Type: text/html; charset=utf-8'
aws s3 sync "${SOURCE}" "${TARGET}" --region us-west-2 --acl public-read --cache-control 'public, must-revalidate, proxy-revalidate, max-age=0' --content-type='text/html; charset=utf-8' --exclude '*' --include '*.html'

unset -v SOURCE
unset -v TARGET