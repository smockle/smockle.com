"use strict";

/** Function registered on 'Origin Request' CloudFront Event */
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  /** Map supported compression algorithms to file extensions */
  const extensions = new Map([["br", ".br"], ["gzip", ".gz"]]);

  /** @type {string | null} Value of custom "X-COMPRESSION" HTTP header */
  const header = headers["x-compression"] && headers["x-compression"][0].value;

  // Append file extension to request URI
  if (
    header &&
    extensions.get(header) &&
    (request.uri.indexOf(".css") > -1 ||
      request.uri.indexOf(".ico") > -1 ||
      request.uri.indexOf(".svg") > -1)
  ) {
    request.uri += extensions.get(header);
  }

  callback(null, request);
};
