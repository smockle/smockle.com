/* @flow */
import chai, {assert} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import jsdom from 'jsdom';

chai.use(sinonChai);

global.assert = assert;
global.sinon = sinon;
global.__DEV__ = true;

// setup the simplest document possible
let doc = jsdom.jsdom('<!doctype html><html><body></body></html>')

// get the window object out of the document
let win = doc.defaultView

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc
global.window = win

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win)

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}

// ensure requiring css not to throw
require.extensions['.css'] = function() {
  return null;
};

// ensure requiring svg not to throw
require.extensions['.svg'] = function() {
  return null;
};
