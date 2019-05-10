const util = require("util");

if (process.env.NODE_ENV === "production") {
  const originalConsole = console.log.bind(console);
  console.log = function() {
    const newArgs = [];
    for (const arg of arguments) {
      const argFormatted = util.isString(arg)
        ? arg
        : util.inspect(arg, { depth: Number(process.env.LOG_DEPTH) || 5 });
      newArgs.push(argFormatted.replace(/(?:\r\n|\r|\n)/g, "\r"));
    }
    originalConsole(newArgs.join("\r"));
  };
}
const debug = require("debug");
debug.log = console.log.bind(console);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = debug;
exports.default = debug;
