function removeBlog(x) {
  return x.replace(/(\/\/[\w.]+)\/blog/, "$1");
}

function addBlog(x) {
  return x.replace(/(\/\/[\w.]+)\//, "$1/blog/");
}

function addTrailingSlash(x) {
  const [, match] = /((.*[^\/]$)|(.*(?=[\/]$)))/.exec(x);
  return `${match}/`;
}

exports.handler = async event => {
  var request = event.Records[0].cf.request;
  if (request.uri.endsWith("/")) {
    request.uri = addTrailingSlash(addBlog(removeBlog(request.uri)));
  }
  return request;
};
