"use strict";

exports.handler = (event, context, callback) => {
  // Get contents of request & response
  const request = event.Records[0].cf.request;
  const response = event.Records[0].cf.response;

  // Set new headers
  // Default
  // prettier-ignore
  Object.assign(response.headers, {
    "strict-transport-security": [{
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubdomains; preload"
    }],
    "x-content-type-options": [{
      key: "X-Content-Type-Options",
      value: "nosniff"
    }],
    "referrer-policy": [{
      key: "Referrer-Policy",
      value: "same-origin"
    }]
  });
  // HTML
  if (request.uri.endsWith(".html") || request.uri.endsWith("/")) {
    // prettier-ignore
    Object.assign(response.headers, {
      "content-security-policy": [{
        key: "Content-Security-Policy",
        value: "default-src 'none'; script-src https://cdn.ampproject.org:* 'sha256-142eq1eu1F72n61w3ZQR93gtzPl3QIkkwmlmJNA/rSs=' 'sha256-ehPVrgdV2GwJCE7DAMSg8aCgaSH3TZmA66nZZv8XrTg='; connect-src 'self'; worker-src 'self'; img-src 'self' data:; font-src 'self'; style-src 'self' 'sha256-REavevORfV0b+/DCILFjSFHno1CzQ8IjJI9hkNXIlsY=' 'sha256-+Cc4j4lNk91U1LKPK/OiXM+ubKj5qJBP4aJ/x4PD/wY=' 'sha256-+Cc4j4lNk91U1LKPK/OiXM+ubKj5qJBP4aJ/x4PD/wY=' 'sha256-0+eUWXEzIzayXtwbs4qgGqcUroB222vieZ1QP7fQ6so=' 'sha256-H+MZMHAjxtX51BD5NQvR2VBEYdZkra7aCuCgN0suCfk=';"
      }],
      "x-frame-options": [{
        key: "X-Frame-Options",
        value: "DENY"
      }],
      "referrer-policy": [{
        key: "Referrer-Policy",
        value: "same-origin"
      }]
    });
  }

  // Return modified response
  callback(null, response);
};
