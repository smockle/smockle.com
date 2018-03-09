"use strict";

/** Function registered on 'Viewer Request' CloudFront Event */
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  /**
   * Set a custom "X-COMPRESSION" HTTP header
   * @param {string} value
   */
  const setCustomHeader = value => {
    headers["x-compression"] = [
      {
        key: "X-Compression",
        value: value
      }
    ];
  };

  /** @type {string | null} Value of "ACCEPT-ENCODING" HTTP header */
  const encoding =
    headers["accept-encoding"] && headers["accept-encoding"][0].value;

  // Check support for Brotli & Gzip
  if (encoding.indexOf("br") > -1) {
    setCustomHeader("br");
  } else if (encoding.indexOf("gzip") > -1) {
    setCustomHeader("gzip");
  }

  callback(null, request);
};
