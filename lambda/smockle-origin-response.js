exports.handler = (event, _, callback) => {
  // Get contents of request & response
  const request = event.Records[0].cf.request;
  const response = event.Records[0].cf.response;

  // Set new headers
  response.headers = {
    ...response.headers,
    ...{
      "strict-transport-security": [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubdomains; preload"
        }
      ],
      "x-content-type-options": [
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        }
      ],
      "referrer-policy": [
        {
          key: "Referrer-Policy",
          value: "same-origin"
        }
      ]
    },
    ...((request.uri.endsWith(".html") || request.uri.endsWith("/")) && {
      "x-frame-options": [
        {
          key: "X-Frame-Options",
          value: "DENY"
        }
      ],
      "referrer-policy": [
        {
          key: "Referrer-Policy",
          value: "same-origin"
        }
      ]
    })
  };

  // Return modified response
  callback(null, response);
};
