#!/usr/bin/env bash

# Abort if any command exits with error
set -e

# By default, Bash takes the error status of the last item in pipeline
# Instead, exit when any item in the pipeline fails
set -o pipefail

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

invalidate_and_wait() {
  # Get distribution id
  local DISTRIBUTION_ID="${1}"
  aws cloudfront create-invalidation --distribution-id "${DISTRIBUTION_ID}" --paths / /\*

  # Get invalidation id
  local INVALIDATION_ID=$(aws cloudfront list-invalidations --distribution-id "${DISTRIBUTION_ID}" | grep -m 1 "Id" | cut -d"\"" -f4)

  # Wait for invalidation to complete
  if [ -n "${INVALIDATION_ID}" ]; then
    aws cloudfront wait invalidation-completed --distribution-id "${DISTRIBUTION_ID}" --id "${INVALIDATION_ID}"
    echo "Invalidation complete!"
  fi
}

# Invalidate the distribution that corresponds with TARGET
if [ "${TARGET}" == "s3://staging.smockle.com" ] && [ -n "${STAGING_DISTRIBUTION_ID}" ]; then
  invalidate_and_wait "${STAGING_DISTRIBUTION_ID}"
elif [ "${TARGET}" == "s3://www.smockle.com" ] && [ -n "${PRODUCTION_DISTRIBUTION_ID}" ]; then
  invalidate_and_wait "${PRODUCTION_DISTRIBUTION_ID}"
else
  echo "Could not create invalidation. Check that STAGING_DISTRIBUTION_ID and PRODUCTION_DISTRIBUTION_ID are set."
fi

unset -f invalidate_and_wait

unset -v SOURCE
unset -v TARGET