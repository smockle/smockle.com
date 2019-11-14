#!/usr/bin/env sh

sync_posts() {
  local MATCHED_DIRECTORY="${1}"
  local DESTINATION_DIRECTORY="${HOME}"/.hazel/smockle.com/posts
  if [ ! -d "${MATCHED_DIRECTORY}" ] || [ ! -d "${DESTINATION_DIRECTORY}" ]; then
    exit 0
  fi
  if [ -d "${MATCHED_DIRECTORY}/Documents" ]; then
    MATCHED_DIRECTORY="${MATCHED_DIRECTORY}/Documents"
  fi
  rm -Rf "${DESTINATION_DIRECTORY}" && \
  mkdir -p "${DESTINATION_DIRECTORY}" && \
  cp -Rf "${MATCHED_DIRECTORY}/" "${DESTINATION_DIRECTORY}"
}

sync_posts "${@}"
unset sync_posts