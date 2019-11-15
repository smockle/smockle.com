#!/usr/bin/env sh

rename_posts() {
  local MATCHED_DIRECTORY=$(dirname "${1}")
  local MATCHED_FILE=$(basename "${1}")
  local DESTINATION_FILE=$(echo "${MATCHED_FILE}" | sed -e "s/[^[:alnum:] \.]//g" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed -e "1s;^;$(date -r "${1}" "+%Y-%m-%d")-;")
  cd "${MATCHED_DIRECTORY}" && \
  mv "${MATCHED_FILE}" "${DESTINATION_FILE}"
}

rename_posts "${@}"
unset rename_posts