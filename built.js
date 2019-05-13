"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.debug = void 0;

var util = _interopRequireWildcard(require("util"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

if (process.env.NODE_ENV === "production") {
  var originalConsole = console.log.bind(console);

  console.log = function () {
    var newArgs = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var arg = _step.value;
        var argFormatted = util.isString(arg) ? arg : util.inspect(arg, {
          depth: Number(process.env.LOG_DEPTH) || Number(process.env.DEBUG_DEPTH) || 5
        });
        newArgs.push(argFormatted.replace(/(?:\r\n|\r|\n)/g, "\r"));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    originalConsole(newArgs.join("\r"));
  };
}

var debug = require("debug");

exports.debug = debug;
debug.log = console.log.bind(console);
var _default = debug;
exports["default"] = _default;
