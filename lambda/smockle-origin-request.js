function removeBlog(x) {
  return x.replace(/(\/\/[\w.]+)\/blog/, "$1");
}

function addTrailingSlash(x) {
  const [, match] = /((.*[^\/]$)|(.*(?=[\/]$)))/.exec(x);
  return `${match}/`;
}

exports.handler = async event => {
  var request = event.Records[0].cf.request;
  request.uri = addTrailingSlash(removeBlog(request.uri));
  return request;
};
