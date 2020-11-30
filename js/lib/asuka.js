
var a;
a || (a = typeof Asuka !== 'undefined' ? Asuka : {});
var aa = {}, d;
for (d in a) {
  a.hasOwnProperty(d) && (aa[d] = a[d]);
}
var ba = "./this.program", ca = !1, q = !1, da = !1, ea = !1;
ca = "object" === typeof window;
q = "function" === typeof importScripts;
da = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
ea = !ca && !da && !q;
if (a.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}
var t = "", fa, ha, ia, ja;
if (da) {
  t = q ? require("path").dirname(t) + "/" : __dirname + "/", fa = function(b, c) {
    ia || (ia = require("fs"));
    ja || (ja = require("path"));
    b = ja.normalize(b);
    return ia.readFileSync(b, c ? null : "utf8");
  }, ha = function(b) {
    b = fa(b, !0);
    b.buffer || (b = new Uint8Array(b));
    assert(b.buffer);
    return b;
  }, 1 < process.argv.length && (ba = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), "undefined" !== typeof module && (module.exports = a), process.on("uncaughtException", function(b) {
    throw b;
  }), process.on("unhandledRejection", x), a.inspect = function() {
    return "[Emscripten Module object]";
  };
} else {
  if (ea) {
    "undefined" != typeof read && (fa = function(b) {
      return read(b);
    }), ha = function(b) {
      if ("function" === typeof readbuffer) {
        return new Uint8Array(readbuffer(b));
      }
      b = read(b, "binary");
      assert("object" === typeof b);
      return b;
    }, "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
  } else {
    if (ca || q) {
      q ? t = self.location.href : document.currentScript && (t = document.currentScript.src), t = 0 !== t.indexOf("blob:") ? t.substr(0, t.lastIndexOf("/") + 1) : "", fa = function(b) {
        var c = new XMLHttpRequest;
        c.open("GET", b, !1);
        c.send(null);
        return c.responseText;
      }, q && (ha = function(b) {
        var c = new XMLHttpRequest;
        c.open("GET", b, !1);
        c.responseType = "arraybuffer";
        c.send(null);
        return new Uint8Array(c.response);
      });
    } else {
      throw Error("environment detection error");
    }
  }
}
var ka = a.print || console.log.bind(console), z = a.printErr || console.warn.bind(console);
for (d in aa) {
  aa.hasOwnProperty(d) && (a[d] = aa[d]);
}
aa = null;
Object.getOwnPropertyDescriptor(a, "arguments") || Object.defineProperty(a, "arguments", {configurable:!0, get:function() {
  x("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
a.thisProgram && (ba = a.thisProgram);
Object.getOwnPropertyDescriptor(a, "thisProgram") || Object.defineProperty(a, "thisProgram", {configurable:!0, get:function() {
  x("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "quit") || Object.defineProperty(a, "quit", {configurable:!0, get:function() {
  x("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert("undefined" === typeof a.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
assert("undefined" === typeof a.read, "Module.read option was removed (modify read_ in JS)");
assert("undefined" === typeof a.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
assert("undefined" === typeof a.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
assert("undefined" === typeof a.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
assert("undefined" === typeof a.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
Object.getOwnPropertyDescriptor(a, "read") || Object.defineProperty(a, "read", {configurable:!0, get:function() {
  x("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "readAsync") || Object.defineProperty(a, "readAsync", {configurable:!0, get:function() {
  x("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "readBinary") || Object.defineProperty(a, "readBinary", {configurable:!0, get:function() {
  x("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
Object.getOwnPropertyDescriptor(a, "setWindowTitle") || Object.defineProperty(a, "setWindowTitle", {configurable:!0, get:function() {
  x("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
function la(b) {
  ma || (ma = {});
  ma[b] || (ma[b] = 1, z(b));
}
var ma, na;
a.wasmBinary && (na = a.wasmBinary);
Object.getOwnPropertyDescriptor(a, "wasmBinary") || Object.defineProperty(a, "wasmBinary", {configurable:!0, get:function() {
  x("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
var noExitRuntime;
a.noExitRuntime && (noExitRuntime = a.noExitRuntime);
Object.getOwnPropertyDescriptor(a, "noExitRuntime") || Object.defineProperty(a, "noExitRuntime", {configurable:!0, get:function() {
  x("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
"object" !== typeof WebAssembly && x("no native wasm support detected");
function oa(b, c) {
  var e = "float";
  "*" === e.charAt(e.length - 1) && (e = "i32");
  switch(e) {
    case "i1":
      B[b >> 0] = c;
      break;
    case "i8":
      B[b >> 0] = c;
      break;
    case "i16":
      C[b >> 1] = c;
      break;
    case "i32":
      E[b >> 2] = c;
      break;
    case "i64":
      pa = [c >>> 0, (qa = c, 1.0 <= +Math.abs(qa) ? 0.0 < qa ? (Math.min(+Math.floor(qa / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Math.ceil((qa - +(~~qa >>> 0)) / 4294967296.0) >>> 0 : 0)];
      E[b >> 2] = pa[0];
      E[b + 4 >> 2] = pa[1];
      break;
    case "float":
      ra[b >> 2] = c;
      break;
    case "double":
      sa[b >> 3] = c;
      break;
    default:
      x("invalid type for setValue: " + e);
  }
}
var F, K, ta = !1;
function assert(b, c) {
  b || x("Assertion failed: " + c);
}
var ua = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function va(b, c, e) {
  var f = c + e;
  for (e = c; b[e] && !(e >= f);) {
    ++e;
  }
  if (16 < e - c && b.subarray && ua) {
    return ua.decode(b.subarray(c, e));
  }
  for (f = ""; c < e;) {
    var g = b[c++];
    if (g & 128) {
      var k = b[c++] & 63;
      if (192 == (g & 224)) {
        f += String.fromCharCode((g & 31) << 6 | k);
      } else {
        var h = b[c++] & 63;
        224 == (g & 240) ? g = (g & 15) << 12 | k << 6 | h : (240 != (g & 248) && la("Invalid UTF-8 leading byte 0x" + g.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"), g = (g & 7) << 18 | k << 12 | h << 6 | b[c++] & 63);
        65536 > g ? f += String.fromCharCode(g) : (g -= 65536, f += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
      }
    } else {
      f += String.fromCharCode(g);
    }
  }
  return f;
}
function L(b, c) {
  return b ? va(M, b, c) : "";
}
function wa(b, c, e, f) {
  if (0 < f) {
    f = e + f - 1;
    for (var g = 0; g < b.length; ++g) {
      var k = b.charCodeAt(g);
      if (55296 <= k && 57343 >= k) {
        var h = b.charCodeAt(++g);
        k = 65536 + ((k & 1023) << 10) | h & 1023;
      }
      if (127 >= k) {
        if (e >= f) {
          break;
        }
        c[e++] = k;
      } else {
        if (2047 >= k) {
          if (e + 1 >= f) {
            break;
          }
          c[e++] = 192 | k >> 6;
        } else {
          if (65535 >= k) {
            if (e + 2 >= f) {
              break;
            }
            c[e++] = 224 | k >> 12;
          } else {
            if (e + 3 >= f) {
              break;
            }
            2097152 <= k && la("Invalid Unicode code point 0x" + k.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
            c[e++] = 240 | k >> 18;
            c[e++] = 128 | k >> 12 & 63;
          }
          c[e++] = 128 | k >> 6 & 63;
        }
        c[e++] = 128 | k & 63;
      }
    }
    c[e] = 0;
  }
}
function N(b, c, e) {
  assert("number" == typeof e, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  wa(b, M, c, e);
}
function xa(b) {
  for (var c = 0, e = 0; e < b.length; ++e) {
    var f = b.charCodeAt(e);
    55296 <= f && 57343 >= f && (f = 65536 + ((f & 1023) << 10) | b.charCodeAt(++e) & 1023);
    127 >= f ? ++c : c = 2047 >= f ? c + 2 : 65535 >= f ? c + 3 : c + 4;
  }
  return c;
}
var ya = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
function za(b, c) {
  assert(0 == b % 2, "Pointer passed to UTF16ToString must be aligned to two bytes!");
  var e = b >> 1;
  for (var f = e + c / 2; !(e >= f) && O[e];) {
    ++e;
  }
  e <<= 1;
  if (32 < e - b && ya) {
    return ya.decode(M.subarray(b, e));
  }
  e = 0;
  for (f = "";;) {
    var g = C[b + 2 * e >> 1];
    if (0 == g || e == c / 2) {
      return f;
    }
    ++e;
    f += String.fromCharCode(g);
  }
}
function Aa(b, c, e) {
  assert(0 == c % 2, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
  assert("number" == typeof e, "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  void 0 === e && (e = 2147483647);
  if (2 > e) {
    return 0;
  }
  e -= 2;
  var f = c;
  e = e < 2 * b.length ? e / 2 : b.length;
  for (var g = 0; g < e; ++g) {
    C[c >> 1] = b.charCodeAt(g), c += 2;
  }
  C[c >> 1] = 0;
  return c - f;
}
function Ca(b) {
  return 2 * b.length;
}
function Da(b, c) {
  assert(0 == b % 4, "Pointer passed to UTF32ToString must be aligned to four bytes!");
  for (var e = 0, f = ""; !(e >= c / 4);) {
    var g = E[b + 4 * e >> 2];
    if (0 == g) {
      break;
    }
    ++e;
    65536 <= g ? (g -= 65536, f += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023)) : f += String.fromCharCode(g);
  }
  return f;
}
function Ea(b, c, e) {
  assert(0 == c % 4, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
  assert("number" == typeof e, "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  void 0 === e && (e = 2147483647);
  if (4 > e) {
    return 0;
  }
  var f = c;
  e = f + e - 4;
  for (var g = 0; g < b.length; ++g) {
    var k = b.charCodeAt(g);
    if (55296 <= k && 57343 >= k) {
      var h = b.charCodeAt(++g);
      k = 65536 + ((k & 1023) << 10) | h & 1023;
    }
    E[c >> 2] = k;
    c += 4;
    if (c + 4 > e) {
      break;
    }
  }
  E[c >> 2] = 0;
  return c - f;
}
function Fa(b) {
  for (var c = 0, e = 0; e < b.length; ++e) {
    var f = b.charCodeAt(e);
    55296 <= f && 57343 >= f && ++e;
    c += 4;
  }
  return c;
}
var P, B, M, C, O, E, Q, ra, sa;
function Ga(b) {
  P = b;
  a.HEAP8 = B = new Int8Array(b);
  a.HEAP16 = C = new Int16Array(b);
  a.HEAP32 = E = new Int32Array(b);
  a.HEAPU8 = M = new Uint8Array(b);
  a.HEAPU16 = O = new Uint16Array(b);
  a.HEAPU32 = Q = new Uint32Array(b);
  a.HEAPF32 = ra = new Float32Array(b);
  a.HEAPF64 = sa = new Float64Array(b);
}
assert(!0, "stack must start aligned");
a.TOTAL_STACK && assert(5242880 === a.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var Ha = a.INITIAL_MEMORY || 16777216;
Object.getOwnPropertyDescriptor(a, "INITIAL_MEMORY") || Object.defineProperty(a, "INITIAL_MEMORY", {configurable:!0, get:function() {
  x("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
}});
assert(5242880 <= Ha, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + Ha + "! (TOTAL_STACK=5242880)");
assert("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
a.wasmMemory ? F = a.wasmMemory : F = new WebAssembly.Memory({initial:Ha / 65536, maximum:32768});
F && (P = F.buffer);
Ha = P.byteLength;
assert(0 === Ha % 65536);
assert(!0);
Ga(P);
function Ia() {
  assert(!0);
  Q[47001] = 34821223;
  Q[47002] = 2310721022;
  E[0] = 1668509029;
}
function Ja() {
  var b = Q[47001], c = Q[47002];
  34821223 == b && 2310721022 == c || x("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + c.toString(16) + " " + b.toString(16));
  1668509029 !== E[0] && x("Runtime error: The application has corrupted its heap memory area (address zero)!");
}
var Ka = new Int16Array(1), La = new Int8Array(Ka.buffer);
Ka[0] = 25459;
if (115 !== La[0] || 99 !== La[1]) {
  throw "Runtime error: expected the system to be little-endian!";
}
var Ma = [], Na = [], Oa = [], Pa = [], Qa = !1;
function Ra() {
  var b = a.preRun.shift();
  Ma.unshift(b);
}
assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var R = 0, Sa = null, Ta = null, Ua = {};
function Va(b) {
  R++;
  a.monitorRunDependencies && a.monitorRunDependencies(R);
  b ? (assert(!Ua[b]), Ua[b] = 1, null === Sa && "undefined" !== typeof setInterval && (Sa = setInterval(function() {
    if (ta) {
      clearInterval(Sa), Sa = null;
    } else {
      var c = !1, e;
      for (e in Ua) {
        c || (c = !0, z("still waiting on run dependencies:")), z("dependency: " + e);
      }
      c && z("(end of list)");
    }
  }, 10000))) : z("warning: run dependency added without ID");
}
function Wa(b) {
  R--;
  a.monitorRunDependencies && a.monitorRunDependencies(R);
  b ? (assert(Ua[b]), delete Ua[b]) : z("warning: run dependency removed without ID");
  0 == R && (null !== Sa && (clearInterval(Sa), Sa = null), Ta && (b = Ta, Ta = null, b()));
}
a.preloadedImages = {};
a.preloadedAudios = {};
function x(b) {
  if (a.onAbort) {
    a.onAbort(b);
  }
  z(b);
  ta = !0;
  b = "abort(" + b + ") at ";
  a: {
    var c = Error();
    if (!c.stack) {
      try {
        throw Error();
      } catch (e) {
        c = e;
      }
      if (!c.stack) {
        c = "(no stack trace available)";
        break a;
      }
    }
    c = c.stack.toString();
  }
  a.extraStackTrace && (c += "\n" + a.extraStackTrace());
  c = Xa(c);
  throw new WebAssembly.RuntimeError(b + c);
}
function Ya() {
  x("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1");
}
a.FS_createDataFile = function() {
  Ya();
};
a.FS_createPreloadedFile = function() {
  Ya();
};
function Za(b) {
  var c = $a;
  return String.prototype.startsWith ? c.startsWith(b) : 0 === c.indexOf(b);
}
function ab() {
  return Za("data:application/octet-stream;base64,");
}
function S(b) {
  return function() {
    var c = a.asm;
    assert(Qa, "native function `" + b + "` called before runtime initialization");
    assert(!0, "native function `" + b + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    c[b] || assert(c[b], "exported native function `" + b + "` not found");
    return c[b].apply(null, arguments);
  };
}
var $a = "asuka.wasm";
if (!ab()) {
  var bb = $a;
  $a = a.locateFile ? a.locateFile(bb, t) : t + bb;
}
function cb() {
  try {
    if (na) {
      return new Uint8Array(na);
    }
    if (ha) {
      return ha($a);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (b) {
    x(b);
  }
}
function db() {
  return na || !ca && !q || "function" !== typeof fetch || Za("file://") ? Promise.resolve().then(cb) : fetch($a, {credentials:"same-origin"}).then(function(b) {
    if (!b.ok) {
      throw "failed to load wasm binary file at '" + $a + "'";
    }
    return b.arrayBuffer();
  }).catch(function() {
    return cb();
  });
}
var qa, pa, fb = {7666:function() {
  return "undefined" !== typeof AudioContext || "undefined" !== typeof webkitAudioContext ? 1 : 0;
}, 7832:function() {
  return "undefined" !== typeof navigator.mediaDevices && "undefined" !== typeof navigator.mediaDevices.getUserMedia || "undefined" !== typeof navigator.webkitGetUserMedia ? 1 : 0;
}, 8058:function(b) {
  "undefined" === typeof a.SDL2 && (a.SDL2 = {});
  var c = a.SDL2;
  b ? c.capture = {} : c.audio = {};
  c.a || ("undefined" !== typeof AudioContext ? c.a = new AudioContext : "undefined" !== typeof webkitAudioContext && (c.a = new webkitAudioContext));
  return void 0 === c.a ? -1 : 0;
}, 8541:function() {
  return a.SDL2.a.sampleRate;
}, 8611:function(b, c, e, f) {
  function g() {
  }
  function k(m) {
    void 0 !== h.capture.h && (clearTimeout(h.capture.h), h.capture.h = void 0);
    h.capture.j = h.a.createMediaStreamSource(m);
    h.capture.b = h.a.createScriptProcessor(c, b, 1);
    h.capture.b.onaudioprocess = function(l) {
      void 0 !== h && void 0 !== h.capture && (l.outputBuffer.getChannelData(0).fill(0.0), h.capture.o = l.inputBuffer, eb("vi", e, [f]));
    };
    h.capture.j.connect(h.capture.b);
    h.capture.b.connect(h.a.destination);
    h.capture.stream = m;
  }
  var h = a.SDL2;
  h.capture.l = h.a.createBuffer(b, c, h.a.sampleRate);
  h.capture.l.getChannelData(0).fill(0.0);
  h.capture.h = setTimeout(function() {
    h.capture.o = h.capture.l;
    eb("vi", e, [f]);
  }, c / h.a.sampleRate * 1000);
  void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({audio:!0, video:!1}).then(k).catch(g) : void 0 !== navigator.webkitGetUserMedia && navigator.webkitGetUserMedia({audio:!0, video:!1}, k, g);
}, 10263:function(b, c, e, f) {
  var g = a.SDL2;
  g.audio.b = g.a.createScriptProcessor(c, 0, b);
  g.audio.b.onaudioprocess = function(k) {
    void 0 !== g && void 0 !== g.audio && (g.audio.i = k.outputBuffer, eb("vi", e, [f]));
  };
  g.audio.b.connect(g.a.destination);
}, 10673:function(b, c) {
  for (var e = a.SDL2, f = e.capture.o.numberOfChannels, g = 0; g < f; ++g) {
    var k = e.capture.o.getChannelData(g);
    if (k.length != c) {
      throw "Web Audio capture buffer length mismatch! Destination size: " + k.length + " samples vs expected " + c + " samples!";
    }
    if (1 == f) {
      for (var h = 0; h < c; ++h) {
        oa(b + 4 * h, k[h]);
      }
    } else {
      for (h = 0; h < c; ++h) {
        oa(b + 4 * (h * f + g), k[h]);
      }
    }
  }
}, 11278:function(b, c) {
  for (var e = a.SDL2, f = e.audio.i.numberOfChannels, g = 0; g < f; ++g) {
    if ("function" === typeof e.audio.i.copyToChannel) {
      for (var k = new Float32Array(c), h = 0; h < c; ++h) {
        k[h] = ra[b + (h * f + g << 2) >> 2];
      }
      e.audio.i.copyToChannel(k, g);
    } else {
      k = e.audio.i.getChannelData(g);
      if (k.length != c) {
        throw "Web Audio output buffer length mismatch! Destination size: " + k.length + " samples vs expected " + c + " samples!";
      }
      for (h = 0; h < c; ++h) {
        k[h] = ra[b + (h * f + g << 2) >> 2];
      }
    }
  }
}, 12045:function(b) {
  var c = a.SDL2;
  if (b) {
    void 0 !== c.capture.h && clearTimeout(c.capture.h);
    if (void 0 !== c.capture.stream) {
      b = c.capture.stream.getAudioTracks();
      for (var e = 0; e < b.length; e++) {
        c.capture.stream.removeTrack(b[e]);
      }
      c.capture.stream = void 0;
    }
    void 0 !== c.capture.b && (c.capture.b.onaudioprocess = function() {
    }, c.capture.b.disconnect(), c.capture.b = void 0);
    void 0 !== c.capture.j && (c.capture.j.disconnect(), c.capture.j = void 0);
    void 0 !== c.capture.l && (c.capture.l = void 0);
    c.capture = void 0;
  } else {
    void 0 != c.audio.b && (c.audio.b.disconnect(), c.audio.b = void 0), c.audio = void 0;
  }
  void 0 !== c.a && void 0 === c.audio && void 0 === c.capture && (c.a.close(), c.a = void 0);
}};
function gb(b) {
  for (; 0 < b.length;) {
    var c = b.shift();
    if ("function" == typeof c) {
      c(a);
    } else {
      var e = c.A;
      "number" === typeof e ? void 0 === c.m ? K.get(e)() : K.get(e)(c.m) : e(void 0 === c.m ? null : c.m);
    }
  }
}
function Xa(b) {
  return b.replace(/\b_Z[\w\d_]+/g, function(c) {
    la("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
    return c === c ? c : c + " [" + c + "]";
  });
}
function eb(b, c, e) {
  -1 != b.indexOf("j") ? (assert("dynCall_" + b in a, "bad function pointer type - no table for sig '" + b + "'"), e && e.length ? assert(e.length === b.substring(1).replace(/j/g, "--").length) : assert(1 == b.length), b = e && e.length ? a["dynCall_" + b].apply(null, [c].concat(e)) : a["dynCall_" + b].call(null, c)) : b = K.get(c).apply(null, e);
  return b;
}
function hb(b) {
  this.g = b - 16;
  this.J = function(c) {
    E[this.g + 8 >> 2] = c;
  };
  this.G = function(c) {
    E[this.g + 0 >> 2] = c;
  };
  this.H = function() {
    E[this.g + 4 >> 2] = 0;
  };
  this.F = function() {
    B[this.g + 12 >> 0] = 0;
  };
  this.I = function() {
    B[this.g + 13 >> 0] = 0;
  };
  this.C = function(c, e) {
    this.J(c);
    this.G(e);
    this.H();
    this.F();
    this.I();
  };
}
function ib() {
  return 0 < ib.u;
}
var jb = [null, [], []], kb = {};
function lb(b) {
  switch(b) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 4:
      return 2;
    case 8:
      return 3;
    default:
      throw new TypeError("Unknown type size: " + b);
  }
}
var mb = void 0;
function U(b) {
  for (var c = ""; M[b];) {
    c += mb[M[b++]];
  }
  return c;
}
var nb = {}, ob = {}, pb = {};
function qb(b) {
  if (void 0 === b) {
    return "_unknown";
  }
  b = b.replace(/[^a-zA-Z0-9_]/g, "$");
  var c = b.charCodeAt(0);
  return 48 <= c && 57 >= c ? "_" + b : b;
}
function rb(b, c) {
  b = qb(b);
  return (new Function("body", "return function " + b + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(c);
}
function sb(b) {
  var c = Error, e = rb(b, function(f) {
    this.name = b;
    this.message = f;
    f = Error(f).stack;
    void 0 !== f && (this.stack = this.toString() + "\n" + f.replace(/^Error(:[^\n]*)?\n/, ""));
  });
  e.prototype = Object.create(c.prototype);
  e.prototype.constructor = e;
  e.prototype.toString = function() {
    return void 0 === this.message ? this.name : this.name + ": " + this.message;
  };
  return e;
}
var tb = void 0;
function V(b) {
  throw new tb(b);
}
var ub = void 0;
function vb(b, c) {
  function e(m) {
    m = c(m);
    if (m.length !== f.length) {
      throw new ub("Mismatched type converter count");
    }
    for (var l = 0; l < f.length; ++l) {
      W(f[l], m[l]);
    }
  }
  var f = [];
  f.forEach(function(m) {
    pb[m] = b;
  });
  var g = Array(b.length), k = [], h = 0;
  b.forEach(function(m, l) {
    ob.hasOwnProperty(m) ? g[l] = ob[m] : (k.push(m), nb.hasOwnProperty(m) || (nb[m] = []), nb[m].push(function() {
      g[l] = ob[m];
      ++h;
      h === k.length && e(g);
    }));
  });
  0 === k.length && e(g);
}
function W(b, c, e) {
  e = e || {};
  if (!("argPackAdvance" in c)) {
    throw new TypeError("registerType registeredInstance requires argPackAdvance");
  }
  var f = c.name;
  b || V('type "' + f + '" must have a positive integer typeid pointer');
  if (ob.hasOwnProperty(b)) {
    if (e.B) {
      return;
    }
    V("Cannot register type '" + f + "' twice");
  }
  ob[b] = c;
  delete pb[b];
  nb.hasOwnProperty(b) && (c = nb[b], delete nb[b], c.forEach(function(g) {
    g();
  }));
}
var wb = [], X = [{}, {value:void 0}, {value:null}, {value:!0}, {value:!1}];
function xb(b) {
  switch(b) {
    case void 0:
      return 1;
    case null:
      return 2;
    case !0:
      return 3;
    case !1:
      return 4;
    default:
      var c = wb.length ? wb.pop() : X.length;
      X[c] = {D:1, value:b};
      return c;
  }
}
function yb(b) {
  return this.fromWireType(Q[b >> 2]);
}
function zb(b) {
  if (null === b) {
    return "null";
  }
  var c = typeof b;
  return "object" === c || "array" === c || "function" === c ? b.toString() : "" + b;
}
function Ab(b, c) {
  switch(c) {
    case 2:
      return function(e) {
        return this.fromWireType(ra[e >> 2]);
      };
    case 3:
      return function(e) {
        return this.fromWireType(sa[e >> 3]);
      };
    default:
      throw new TypeError("Unknown float type: " + b);
  }
}
function Bb(b) {
  var c = Function;
  if (!(c instanceof Function)) {
    throw new TypeError("new_ called with constructor type " + typeof c + " which is not a function");
  }
  var e = rb(c.name || "unknownFunctionName", function() {
  });
  e.prototype = c.prototype;
  e = new e;
  b = c.apply(e, b);
  return b instanceof Object ? b : e;
}
function Cb(b) {
  for (; b.length;) {
    var c = b.pop();
    b.pop()(c);
  }
}
function Db(b, c) {
  var e = a;
  if (void 0 === e[b].c) {
    var f = e[b];
    e[b] = function() {
      e[b].c.hasOwnProperty(arguments.length) || V("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[b].c + ")!");
      return e[b].c[arguments.length].apply(this, arguments);
    };
    e[b].c = [];
    e[b].c[f.v] = f;
  }
}
function Eb(b, c, e) {
  a.hasOwnProperty(b) ? ((void 0 === e || void 0 !== a[b].c && void 0 !== a[b].c[e]) && V("Cannot register public name '" + b + "' twice"), Db(b, b), a.hasOwnProperty(e) && V("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), a[b].c[e] = c) : (a[b] = c, void 0 !== e && (a[b].P = e));
}
function Fb(b, c) {
  for (var e = [], f = 0; f < b; f++) {
    e.push(E[(c >> 2) + f]);
  }
  return e;
}
function Gb(b, c) {
  assert(0 <= b.indexOf("j"), "getDynCaller should only be called with i64 sigs");
  var e = [];
  return function() {
    e.length = arguments.length;
    for (var f = 0; f < arguments.length; f++) {
      e[f] = arguments[f];
    }
    return eb(b, c, e);
  };
}
function Hb(b, c) {
  b = U(b);
  var e = -1 != b.indexOf("j") ? Gb(b, c) : K.get(c);
  "function" !== typeof e && V("unknown function pointer with signature " + b + ": " + c);
  return e;
}
var Ib = void 0;
function Jb(b) {
  b = Kb(b);
  var c = U(b);
  Y(b);
  return c;
}
function Lb(b, c) {
  function e(k) {
    g[k] || ob[k] || (pb[k] ? pb[k].forEach(e) : (f.push(k), g[k] = !0));
  }
  var f = [], g = {};
  c.forEach(e);
  throw new Ib(b + ": " + f.map(Jb).join([", "]));
}
function Mb(b, c, e) {
  switch(c) {
    case 0:
      return e ? function(f) {
        return B[f];
      } : function(f) {
        return M[f];
      };
    case 1:
      return e ? function(f) {
        return C[f >> 1];
      } : function(f) {
        return O[f >> 1];
      };
    case 2:
      return e ? function(f) {
        return E[f >> 2];
      } : function(f) {
        return Q[f >> 2];
      };
    default:
      throw new TypeError("Unknown integer type: " + b);
  }
}
var Nb = [];
function Z(b, c) {
  Q[b >> 2] = c;
  Q[b + 4 >> 2] = c / 4294967296 | 0;
}
var Ob;
function Pb(b, c, e, f, g) {
  function k(u) {
    var G = 0, D = 0;
    u && (D = n.response ? n.response.byteLength : 0, G = Qb(D), M.set(new Uint8Array(n.response), G));
    Q[b + 12 >> 2] = G;
    Z(b + 16, D);
  }
  var h = Q[b + 8 >> 2];
  if (h) {
    var m = L(h), l = b + 112, r = L(l);
    r || (r = "GET");
    var v = Q[l + 52 >> 2], w = Q[l + 56 >> 2], y = !!Q[l + 60 >> 2], A = Q[l + 68 >> 2], p = Q[l + 72 >> 2];
    h = Q[l + 76 >> 2];
    var T = Q[l + 80 >> 2], H = Q[l + 84 >> 2];
    l = Q[l + 88 >> 2];
    var I = !!(v & 1), J = !!(v & 2);
    v = !!(v & 64);
    A = A ? L(A) : void 0;
    p = p ? L(p) : void 0;
    var Ba = T ? L(T) : void 0, n = new XMLHttpRequest;
    n.withCredentials = y;
    n.open(r, m, !v, A, p);
    v || (n.timeout = w);
    n.K = m;
    assert(!J, "streaming uses moz-chunked-arraybuffer which is no longer supported; TODO: rewrite using fetch()");
    n.responseType = "arraybuffer";
    T && n.overrideMimeType(Ba);
    if (h) {
      for (;;) {
        r = Q[h >> 2];
        if (!r) {
          break;
        }
        m = Q[h + 4 >> 2];
        if (!m) {
          break;
        }
        h += 8;
        r = L(r);
        m = L(m);
        n.setRequestHeader(r, m);
      }
    }
    Nb.push(n);
    Q[b + 0 >> 2] = Nb.length;
    h = H && l ? M.slice(H, H + l) : null;
    n.onload = function(u) {
      k(I && !J);
      var G = n.response ? n.response.byteLength : 0;
      Z(b + 24, 0);
      G && Z(b + 32, G);
      O[b + 40 >> 1] = n.readyState;
      O[b + 42 >> 1] = n.status;
      n.statusText && N(n.statusText, b + 44, 64);
      200 <= n.status && 300 > n.status ? c && c(b, n, u) : e && e(b, n, u);
    };
    n.onerror = function(u) {
      k(I);
      var G = n.status;
      Z(b + 24, 0);
      Z(b + 32, n.response ? n.response.byteLength : 0);
      O[b + 40 >> 1] = n.readyState;
      O[b + 42 >> 1] = G;
      e && e(b, n, u);
    };
    n.ontimeout = function(u) {
      e && e(b, n, u);
    };
    n.onprogress = function(u) {
      var G = I && J && n.response ? n.response.byteLength : 0, D = 0;
      I && J && (assert(f, "When doing a streaming fetch, you should have an onprogress handler registered to receive the chunks!"), D = Qb(G), M.set(new Uint8Array(n.response), D));
      Q[b + 12 >> 2] = D;
      Z(b + 16, G);
      Z(b + 24, u.loaded - G);
      Z(b + 32, u.total);
      O[b + 40 >> 1] = n.readyState;
      3 <= n.readyState && 0 === n.status && 0 < u.loaded && (n.status = 200);
      O[b + 42 >> 1] = n.status;
      n.statusText && N(n.statusText, b + 44, 64);
      f && f(b, n, u);
      D && Y(D);
    };
    n.onreadystatechange = function(u) {
      O[b + 40 >> 1] = n.readyState;
      2 <= n.readyState && (O[b + 42 >> 1] = n.status);
      g && g(b, n, u);
    };
    try {
      n.send(h);
    } catch (u) {
      e && e(b, n, u);
    }
  } else {
    e(b, 0, "no url specified!");
  }
}
function Rb(b, c, e, f) {
  var g = Ob;
  if (g) {
    var k = Q[b + 112 + 64 >> 2];
    k || (k = Q[b + 8 >> 2]);
    var h = L(k);
    try {
      var m = g.transaction(["FILES"], "readwrite").objectStore("FILES").put(c, h);
      m.onsuccess = function() {
        O[b + 40 >> 1] = 4;
        O[b + 42 >> 1] = 200;
        N("OK", b + 44, 64);
        e(b, 0, h);
      };
      m.onerror = function(l) {
        O[b + 40 >> 1] = 4;
        O[b + 42 >> 1] = 413;
        N("Payload Too Large", b + 44, 64);
        f(b, 0, l);
      };
    } catch (l) {
      f(b, 0, l);
    }
  } else {
    f(b, 0, "IndexedDB not available!");
  }
}
function Sb(b, c, e) {
  var f = Ob;
  if (f) {
    var g = Q[b + 112 + 64 >> 2];
    g || (g = Q[b + 8 >> 2]);
    g = L(g);
    try {
      var k = f.transaction(["FILES"], "readonly").objectStore("FILES").get(g);
      k.onsuccess = function(h) {
        if (h.target.result) {
          h = h.target.result;
          var m = h.byteLength || h.length, l = Qb(m);
          M.set(new Uint8Array(h), l);
          Q[b + 12 >> 2] = l;
          Z(b + 16, m);
          Z(b + 24, 0);
          Z(b + 32, m);
          O[b + 40 >> 1] = 4;
          O[b + 42 >> 1] = 200;
          N("OK", b + 44, 64);
          c(b, 0, h);
        } else {
          O[b + 40 >> 1] = 4, O[b + 42 >> 1] = 404, N("Not Found", b + 44, 64), e(b, 0, "no data");
        }
      };
      k.onerror = function(h) {
        O[b + 40 >> 1] = 4;
        O[b + 42 >> 1] = 404;
        N("Not Found", b + 44, 64);
        e(b, 0, h);
      };
    } catch (h) {
      e(b, 0, h);
    }
  } else {
    e(b, 0, "IndexedDB not available!");
  }
}
function Tb(b, c, e) {
  var f = Ob;
  if (f) {
    var g = Q[b + 112 + 64 >> 2];
    g || (g = Q[b + 8 >> 2]);
    g = L(g);
    try {
      var k = f.transaction(["FILES"], "readwrite").objectStore("FILES").delete(g);
      k.onsuccess = function(h) {
        h = h.target.result;
        Q[b + 12 >> 2] = 0;
        Z(b + 16, 0);
        Z(b + 24, 0);
        Z(b + 32, 0);
        O[b + 40 >> 1] = 4;
        O[b + 42 >> 1] = 200;
        N("OK", b + 44, 64);
        c(b, 0, h);
      };
      k.onerror = function(h) {
        O[b + 40 >> 1] = 4;
        O[b + 42 >> 1] = 404;
        N("Not Found", b + 44, 64);
        e(b, 0, h);
      };
    } catch (h) {
      e(b, 0, h);
    }
  } else {
    e(b, 0, "IndexedDB not available!");
  }
}
var Ub = {};
function Vb() {
  if (!Wb) {
    var b = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:ba || "./this.program"}, c;
    for (c in Ub) {
      b[c] = Ub[c];
    }
    var e = [];
    for (c in b) {
      e.push(c + "=" + b[c]);
    }
    Wb = e;
  }
  return Wb;
}
var Wb;
function Xb(b, c) {
  b = new Date(1000 * E[b >> 2]);
  E[c >> 2] = b.getUTCSeconds();
  E[c + 4 >> 2] = b.getUTCMinutes();
  E[c + 8 >> 2] = b.getUTCHours();
  E[c + 12 >> 2] = b.getUTCDate();
  E[c + 16 >> 2] = b.getUTCMonth();
  E[c + 20 >> 2] = b.getUTCFullYear() - 1900;
  E[c + 24 >> 2] = b.getUTCDay();
  E[c + 36 >> 2] = 0;
  E[c + 32 >> 2] = 0;
  E[c + 28 >> 2] = (b.getTime() - Date.UTC(b.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
  if (!Xb.s) {
    b = xa("GMT") + 1;
    var e = Qb(b);
    e && wa("GMT", B, e, b);
    Xb.s = e;
  }
  E[c + 40 >> 2] = Xb.s;
  return c;
}
for (var Yb = [], Zb = Array(256), $b = 0; 256 > $b; ++$b) {
  Zb[$b] = String.fromCharCode($b);
}
mb = Zb;
tb = a.BindingError = sb("BindingError");
ub = a.InternalError = sb("InternalError");
a.count_emval_handles = function() {
  for (var b = 0, c = 5; c < X.length; ++c) {
    void 0 !== X[c] && ++b;
  }
  return b;
};
a.get_first_emval = function() {
  for (var b = 5; b < X.length; ++b) {
    if (void 0 !== X[b]) {
      return X[b];
    }
  }
  return null;
};
Ib = a.UnboundTypeError = sb("UnboundTypeError");
(function(b, c) {
  try {
    var e = indexedDB.open("emscripten_filesystem", 1);
  } catch (f) {
    c(f);
    return;
  }
  e.onupgradeneeded = function(f) {
    f = f.target.result;
    f.objectStoreNames.contains("FILES") && f.deleteObjectStore("FILES");
    f.createObjectStore("FILES");
  };
  e.onsuccess = function(f) {
    b(f.target.result);
  };
  e.onerror = function(f) {
    c(f);
  };
})(function(b) {
  Ob = b;
  Wa("library_fetch_init");
}, function() {
  Ob = !1;
  Wa("library_fetch_init");
});
"undefined" !== typeof ENVIRONMENT_IS_FETCH_WORKER && ENVIRONMENT_IS_FETCH_WORKER || Va("library_fetch_init");
Na.push({A:function() {
  ac();
}});
var bc = {__assert_fail:function(b, c, e, f) {
  x("Assertion failed: " + L(b) + ", at: " + [c ? L(c) : "unknown filename", e, f ? L(f) : "unknown function"]);
}, __cxa_allocate_exception:function(b) {
  return Qb(b + 16) + 16;
}, __cxa_atexit:function() {
}, __cxa_throw:function(b, c, e) {
  (new hb(b)).C(c, e);
  "uncaught_exception" in ib ? ib.u++ : ib.u = 1;
  throw b + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
}, __sys_access:function(b, c) {
  b = L(b);
  return kb.L(b, c);
}, __sys_fcntl64:function() {
  return 0;
}, __sys_fstat64:function() {
  x("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
}, __sys_ftruncate64:function() {
  x("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
}, __sys_ioctl:function() {
  return 0;
}, __sys_open:function() {
  x("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
}, __sys_read:function() {
  x("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
}, __sys_rmdir:function() {
  x("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
}, __sys_stat64:function() {
  x("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
}, __sys_unlink:function() {
  x("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
}, _embind_register_bool:function(b, c, e, f, g) {
  var k = lb(e);
  c = U(c);
  W(b, {name:c, fromWireType:function(h) {
    return !!h;
  }, toWireType:function(h, m) {
    return m ? f : g;
  }, argPackAdvance:8, readValueFromPointer:function(h) {
    if (1 === e) {
      var m = B;
    } else {
      if (2 === e) {
        m = C;
      } else {
        if (4 === e) {
          m = E;
        } else {
          throw new TypeError("Unknown boolean type size: " + c);
        }
      }
    }
    return this.fromWireType(m[h >> k]);
  }, f:null, });
}, _embind_register_emval:function(b, c) {
  c = U(c);
  W(b, {name:c, fromWireType:function(e) {
    var f = X[e].value;
    4 < e && 0 === --X[e].D && (X[e] = void 0, wb.push(e));
    return f;
  }, toWireType:function(e, f) {
    return xb(f);
  }, argPackAdvance:8, readValueFromPointer:yb, f:null, });
}, _embind_register_float:function(b, c, e) {
  e = lb(e);
  c = U(c);
  W(b, {name:c, fromWireType:function(f) {
    return f;
  }, toWireType:function(f, g) {
    if ("number" !== typeof g && "boolean" !== typeof g) {
      throw new TypeError('Cannot convert "' + zb(g) + '" to ' + this.name);
    }
    return g;
  }, argPackAdvance:8, readValueFromPointer:Ab(c, e), f:null, });
}, _embind_register_function:function(b, c, e, f, g, k) {
  var h = Fb(c, e);
  b = U(b);
  g = Hb(f, g);
  Eb(b, function() {
    Lb("Cannot call " + b + " due to unbound types", h);
  }, c - 1);
  vb(h, function(m) {
    var l = [m[0], null].concat(m.slice(1)), r = m = b, v = g, w = l.length;
    2 > w && V("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var y = null !== l[1] && !1, A = !1, p = 1; p < l.length; ++p) {
      if (null !== l[p] && void 0 === l[p].f) {
        A = !0;
        break;
      }
    }
    var T = "void" !== l[0].name, H = "", I = "";
    for (p = 0; p < w - 2; ++p) {
      H += (0 !== p ? ", " : "") + "arg" + p, I += (0 !== p ? ", " : "") + "arg" + p + "Wired";
    }
    r = "return function " + qb(r) + "(" + H + ") {\nif (arguments.length !== " + (w - 2) + ") {\nthrowBindingError('function " + r + " called with ' + arguments.length + ' arguments, expected " + (w - 2) + " args!');\n}\n";
    A && (r += "var destructors = [];\n");
    var J = A ? "destructors" : "null";
    H = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
    v = [V, v, k, Cb, l[0], l[1]];
    y && (r += "var thisWired = classParam.toWireType(" + J + ", this);\n");
    for (p = 0; p < w - 2; ++p) {
      r += "var arg" + p + "Wired = argType" + p + ".toWireType(" + J + ", arg" + p + "); // " + l[p + 2].name + "\n", H.push("argType" + p), v.push(l[p + 2]);
    }
    y && (I = "thisWired" + (0 < I.length ? ", " : "") + I);
    r += (T ? "var rv = " : "") + "invoker(fn" + (0 < I.length ? ", " : "") + I + ");\n";
    if (A) {
      r += "runDestructors(destructors);\n";
    } else {
      for (p = y ? 1 : 2; p < l.length; ++p) {
        w = 1 === p ? "thisWired" : "arg" + (p - 2) + "Wired", null !== l[p].f && (r += w + "_dtor(" + w + "); // " + l[p].name + "\n", H.push(w + "_dtor"), v.push(l[p].f));
      }
    }
    T && (r += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
    H.push(r + "}\n");
    l = Bb(H).apply(null, v);
    p = c - 1;
    if (!a.hasOwnProperty(m)) {
      throw new ub("Replacing nonexistant public symbol");
    }
    void 0 !== a[m].c && void 0 !== p ? a[m].c[p] = l : (a[m] = l, a[m].v = p);
    return [];
  });
}, _embind_register_integer:function(b, c, e, f, g) {
  function k(r) {
    return r;
  }
  c = U(c);
  -1 === g && (g = 4294967295);
  var h = lb(e);
  if (0 === f) {
    var m = 32 - 8 * e;
    k = function(r) {
      return r << m >>> m;
    };
  }
  var l = -1 != c.indexOf("unsigned");
  W(b, {name:c, fromWireType:k, toWireType:function(r, v) {
    if ("number" !== typeof v && "boolean" !== typeof v) {
      throw new TypeError('Cannot convert "' + zb(v) + '" to ' + this.name);
    }
    if (v < f || v > g) {
      throw new TypeError('Passing a number "' + zb(v) + '" from JS side to C/C++ side to an argument of type "' + c + '", which is outside the valid range [' + f + ", " + g + "]!");
    }
    return l ? v >>> 0 : v | 0;
  }, argPackAdvance:8, readValueFromPointer:Mb(c, h, 0 !== f), f:null, });
}, _embind_register_memory_view:function(b, c, e) {
  function f(k) {
    k >>= 2;
    var h = Q;
    return new g(P, h[k + 1], h[k]);
  }
  var g = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ][c];
  e = U(e);
  W(b, {name:e, fromWireType:f, argPackAdvance:8, readValueFromPointer:f, }, {B:!0, });
}, _embind_register_std_string:function(b, c) {
  c = U(c);
  var e = "std::string" === c;
  W(b, {name:c, fromWireType:function(f) {
    var g = Q[f >> 2];
    if (e) {
      for (var k = f + 4, h = 0; h <= g; ++h) {
        var m = f + 4 + h;
        if (h == g || 0 == M[m]) {
          k = L(k, m - k);
          if (void 0 === l) {
            var l = k;
          } else {
            l += String.fromCharCode(0), l += k;
          }
          k = m + 1;
        }
      }
    } else {
      l = Array(g);
      for (h = 0; h < g; ++h) {
        l[h] = String.fromCharCode(M[f + 4 + h]);
      }
      l = l.join("");
    }
    Y(f);
    return l;
  }, toWireType:function(f, g) {
    g instanceof ArrayBuffer && (g = new Uint8Array(g));
    var k = "string" === typeof g;
    k || g instanceof Uint8Array || g instanceof Uint8ClampedArray || g instanceof Int8Array || V("Cannot pass non-string to std::string");
    var h = (e && k ? function() {
      return xa(g);
    } : function() {
      return g.length;
    })(), m = Qb(4 + h + 1);
    Q[m >> 2] = h;
    if (e && k) {
      N(g, m + 4, h + 1);
    } else {
      if (k) {
        for (k = 0; k < h; ++k) {
          var l = g.charCodeAt(k);
          255 < l && (Y(m), V("String has UTF-16 code units that do not fit in 8 bits"));
          M[m + 4 + k] = l;
        }
      } else {
        for (k = 0; k < h; ++k) {
          M[m + 4 + k] = g[k];
        }
      }
    }
    null !== f && f.push(Y, m);
    return m;
  }, argPackAdvance:8, readValueFromPointer:yb, f:function(f) {
    Y(f);
  }, });
}, _embind_register_std_wstring:function(b, c, e) {
  e = U(e);
  if (2 === c) {
    var f = za;
    var g = Aa;
    var k = Ca;
    var h = function() {
      return O;
    };
    var m = 1;
  } else {
    4 === c && (f = Da, g = Ea, k = Fa, h = function() {
      return Q;
    }, m = 2);
  }
  W(b, {name:e, fromWireType:function(l) {
    for (var r = Q[l >> 2], v = h(), w, y = l + 4, A = 0; A <= r; ++A) {
      var p = l + 4 + A * c;
      if (A == r || 0 == v[p >> m]) {
        y = f(y, p - y), void 0 === w ? w = y : (w += String.fromCharCode(0), w += y), y = p + c;
      }
    }
    Y(l);
    return w;
  }, toWireType:function(l, r) {
    "string" !== typeof r && V("Cannot pass non-string to C++ string type " + e);
    var v = k(r), w = Qb(4 + v + c);
    Q[w >> 2] = v >> m;
    g(r, w + 4, v + c);
    null !== l && l.push(Y, w);
    return w;
  }, argPackAdvance:8, readValueFromPointer:yb, f:function(l) {
    Y(l);
  }, });
}, _embind_register_void:function(b, c) {
  c = U(c);
  W(b, {O:!0, name:c, argPackAdvance:0, fromWireType:function() {
  }, toWireType:function() {
  }, });
}, _emscripten_fetch_free:function(b) {
  delete Nb[b - 1];
}, _emscripten_fetch_get_response_headers:function(b, c, e) {
  b = Nb[b - 1].getAllResponseHeaders();
  var f = xa(b) + 1;
  N(b, c, e);
  return Math.min(f, e);
}, _emscripten_fetch_get_response_headers_length:function(b) {
  return xa(Nb[b - 1].getAllResponseHeaders()) + 1;
}, abort:function() {
  x();
}, emscripten_asm_const_int:function(b, c, e) {
  assert(Array.isArray(Yb));
  assert(0 == e % 16);
  Yb.length = 0;
  var f;
  for (e >>= 2; f = M[c++];) {
    assert(100 === f || 102 === f || 105 === f), (f = 105 > f) && e & 1 && e++, Yb.push(f ? sa[e++ >> 1] : E[e]), ++e;
  }
  return fb[b].apply(null, Yb);
}, emscripten_is_main_browser_thread:function() {
  return !q;
}, emscripten_memcpy_big:function(b, c, e) {
  M.copyWithin(b, c, c + e);
}, emscripten_resize_heap:function(b) {
  b >>>= 0;
  var c = M.length;
  assert(b > c);
  if (2147483648 < b) {
    return z("Cannot enlarge memory, asked to go up to " + b + " bytes, but the limit is 2147483648 bytes!"), !1;
  }
  for (var e = 1; 4 >= e; e *= 2) {
    var f = c * (1 + 0.2 / e);
    f = Math.min(f, b + 100663296);
    f = Math.max(16777216, b, f);
    0 < f % 65536 && (f += 65536 - f % 65536);
    f = Math.min(2147483648, f);
    a: {
      var g = f;
      try {
        F.grow(g - P.byteLength + 65535 >>> 16);
        Ga(F.buffer);
        var k = 1;
        break a;
      } catch (h) {
        console.error("emscripten_realloc_buffer: Attempted to grow heap from " + P.byteLength + " bytes to " + g + " bytes, but got error: " + h);
      }
      k = void 0;
    }
    if (k) {
      return !0;
    }
  }
  z("Failed to grow the heap from " + c + " bytes to " + f + " bytes, not enough memory!");
  return !1;
}, emscripten_start_fetch:function(b, c, e, f, g) {
  function k(u) {
    Pb(u, h, r, v, l);
  }
  function h(u, G) {
    Rb(u, G.response, function(D) {
      p ? K.get(p)(D) : c && c(D);
    }, function(D) {
      p ? K.get(p)(D) : c && c(D);
    });
  }
  function m(u) {
    Pb(u, w, r, v, l);
  }
  function l(u) {
    I ? K.get(I)(u) : g && g(u);
  }
  function r(u) {
    T ? K.get(T)(u) : e && e(u);
  }
  function v(u) {
    H ? K.get(H)(u) : f && f(u);
  }
  function w(u) {
    p ? K.get(p)(u) : c && c(u);
  }
  "undefined" !== typeof noExitRuntime && (noExitRuntime = !0);
  var y = b + 112, A = L(y), p = Q[y + 36 >> 2], T = Q[y + 40 >> 2], H = Q[y + 44 >> 2], I = Q[y + 48 >> 2], J = Q[y + 52 >> 2], Ba = !!(J & 4), n = !!(J & 32);
  J = !!(J & 16);
  if ("EM_IDB_STORE" === A) {
    A = Q[y + 84 >> 2], Rb(b, M.slice(A, A + Q[y + 88 >> 2]), w, r);
  } else {
    if ("EM_IDB_DELETE" === A) {
      Tb(b, w, r);
    } else {
      if (J) {
        if (n) {
          return 0;
        }
        Pb(b, Ba ? h : w, r, v, l);
      } else {
        Sb(b, w, n ? r : Ba ? k : m);
      }
    }
  }
  return b;
}, environ_get:function(b, c) {
  var e = 0;
  Vb().forEach(function(f, g) {
    var k = c + e;
    g = E[b + 4 * g >> 2] = k;
    for (k = 0; k < f.length; ++k) {
      assert(f.charCodeAt(k) === f.charCodeAt(k) & 255), B[g++ >> 0] = f.charCodeAt(k);
    }
    B[g >> 0] = 0;
    e += f.length + 1;
  });
  return 0;
}, environ_sizes_get:function(b, c) {
  var e = Vb();
  E[b >> 2] = e.length;
  var f = 0;
  e.forEach(function(g) {
    f += g.length + 1;
  });
  E[c >> 2] = f;
  return 0;
}, fd_close:function() {
  x("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
  return 0;
}, fd_fdstat_get:function(b, c) {
  b = 1 == b || 2 == b ? 2 : x();
  B[c >> 0] = b;
  return 0;
}, fd_read:function(b, c, e, f) {
  b = kb.N(b);
  c = kb.M(b, c, e);
  E[f >> 2] = c;
  return 0;
}, fd_seek:function() {
  x("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM");
}, fd_write:function(b, c, e, f) {
  for (var g = 0, k = 0; k < e; k++) {
    for (var h = E[c + 8 * k >> 2], m = E[c + (8 * k + 4) >> 2], l = 0; l < m; l++) {
      var r = b, v = M[h + l], w = jb[r];
      assert(w);
      0 === v || 10 === v ? ((1 === r ? ka : z)(va(w, 0)), w.length = 0) : w.push(v);
    }
    g += m;
  }
  E[f >> 2] = g;
  return 0;
}, gettimeofday:function(b) {
  var c = Date.now();
  E[b >> 2] = c / 1000 | 0;
  E[b + 4 >> 2] = c % 1000 * 1000 | 0;
  return 0;
}, gmtime_r:Xb, memory:F, setTempRet0:function() {
}, time:function(b) {
  var c = Date.now() / 1000 | 0;
  b && (E[b >> 2] = c);
  return c;
}};
(function() {
  function b(k) {
    a.asm = k.exports;
    K = a.asm.__indirect_function_table;
    assert(K, "table not found in wasm exports");
    Wa("wasm-instantiate");
  }
  function c(k) {
    assert(a === g, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    g = null;
    b(k.instance);
  }
  function e(k) {
    return db().then(function(h) {
      return WebAssembly.instantiate(h, f);
    }).then(k, function(h) {
      z("failed to asynchronously prepare wasm: " + h);
      x(h);
    });
  }
  var f = {env:bc, wasi_snapshot_preview1:bc};
  Va("wasm-instantiate");
  var g = a;
  if (a.instantiateWasm) {
    try {
      return a.instantiateWasm(f, b);
    } catch (k) {
      return z("Module.instantiateWasm callback failed with error: " + k), !1;
    }
  }
  (function() {
    if (na || "function" !== typeof WebAssembly.instantiateStreaming || ab() || Za("file://") || "function" !== typeof fetch) {
      return e(c);
    }
    fetch($a, {credentials:"same-origin"}).then(function(k) {
      return WebAssembly.instantiateStreaming(k, f).then(c, function(h) {
        z("wasm streaming compile failed: " + h);
        z("falling back to ArrayBuffer instantiation");
        return e(c);
      });
    });
  })();
  return {};
})();
var ac = a.___wasm_call_ctors = S("__wasm_call_ctors");
a._memcpy = S("memcpy");
a._memset = S("memset");
var Qb = a._malloc = S("malloc"), Y = a._free = S("free");
a.___errno_location = S("__errno_location");
var Kb = a.___getTypeName = S("__getTypeName");
a.___embind_register_native_and_builtin_types = S("__embind_register_native_and_builtin_types");
a.stackSave = S("stackSave");
a.stackRestore = S("stackRestore");
a.stackAlloc = S("stackAlloc");
a._setThrew = S("setThrew");
a.dynCall_ji = S("dynCall_ji");
a.dynCall_jiji = S("dynCall_jiji");
a.dynCall_jjii = S("dynCall_jjii");
a.dynCall_jiij = S("dynCall_jiij");
Object.getOwnPropertyDescriptor(a, "intArrayFromString") || (a.intArrayFromString = function() {
  x("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "intArrayToString") || (a.intArrayToString = function() {
  x("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ccall") || (a.ccall = function() {
  x("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "cwrap") || (a.cwrap = function() {
  x("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setValue") || (a.setValue = function() {
  x("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getValue") || (a.getValue = function() {
  x("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "allocate") || (a.allocate = function() {
  x("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UTF8ArrayToString") || (a.UTF8ArrayToString = function() {
  x("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UTF8ToString") || (a.UTF8ToString = function() {
  x("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToUTF8Array") || (a.stringToUTF8Array = function() {
  x("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToUTF8") || (a.stringToUTF8 = function() {
  x("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "lengthBytesUTF8") || (a.lengthBytesUTF8 = function() {
  x("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackTrace") || (a.stackTrace = function() {
  x("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnPreRun") || (a.addOnPreRun = function() {
  x("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnInit") || (a.addOnInit = function() {
  x("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnPreMain") || (a.addOnPreMain = function() {
  x("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnExit") || (a.addOnExit = function() {
  x("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addOnPostRun") || (a.addOnPostRun = function() {
  x("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeStringToMemory") || (a.writeStringToMemory = function() {
  x("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeArrayToMemory") || (a.writeArrayToMemory = function() {
  x("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeAsciiToMemory") || (a.writeAsciiToMemory = function() {
  x("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addRunDependency") || (a.addRunDependency = function() {
  x("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "removeRunDependency") || (a.removeRunDependency = function() {
  x("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createFolder") || (a.FS_createFolder = function() {
  x("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "FS_createPath") || (a.FS_createPath = function() {
  x("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createDataFile") || (a.FS_createDataFile = function() {
  x("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createPreloadedFile") || (a.FS_createPreloadedFile = function() {
  x("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createLazyFile") || (a.FS_createLazyFile = function() {
  x("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_createLink") || (a.FS_createLink = function() {
  x("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "FS_createDevice") || (a.FS_createDevice = function() {
  x("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "FS_unlink") || (a.FS_unlink = function() {
  x("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(a, "getLEB") || (a.getLEB = function() {
  x("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getFunctionTables") || (a.getFunctionTables = function() {
  x("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "alignFunctionTables") || (a.alignFunctionTables = function() {
  x("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registerFunctions") || (a.registerFunctions = function() {
  x("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "addFunction") || (a.addFunction = function() {
  x("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "removeFunction") || (a.removeFunction = function() {
  x("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getFuncWrapper") || (a.getFuncWrapper = function() {
  x("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "prettyPrint") || (a.prettyPrint = function() {
  x("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "makeBigInt") || (a.makeBigInt = function() {
  x("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "dynCall") || (a.dynCall = function() {
  x("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getCompilerSetting") || (a.getCompilerSetting = function() {
  x("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "print") || (a.print = function() {
  x("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "printErr") || (a.printErr = function() {
  x("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getTempRet0") || (a.getTempRet0 = function() {
  x("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setTempRet0") || (a.setTempRet0 = function() {
  x("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "callMain") || (a.callMain = function() {
  x("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "abort") || (a.abort = function() {
  x("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToNewUTF8") || (a.stringToNewUTF8 = function() {
  x("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscripten_realloc_buffer") || (a.emscripten_realloc_buffer = function() {
  x("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ENV") || (a.ENV = function() {
  x("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ERRNO_CODES") || (a.ERRNO_CODES = function() {
  x("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ERRNO_MESSAGES") || (a.ERRNO_MESSAGES = function() {
  x("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setErrNo") || (a.setErrNo = function() {
  x("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "DNS") || (a.DNS = function() {
  x("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getHostByName") || (a.getHostByName = function() {
  x("'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GAI_ERRNO_MESSAGES") || (a.GAI_ERRNO_MESSAGES = function() {
  x("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "Protocols") || (a.Protocols = function() {
  x("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "Sockets") || (a.Sockets = function() {
  x("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getRandomDevice") || (a.getRandomDevice = function() {
  x("'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "traverseStack") || (a.traverseStack = function() {
  x("'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UNWIND_CACHE") || (a.UNWIND_CACHE = function() {
  x("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "withBuiltinMalloc") || (a.withBuiltinMalloc = function() {
  x("'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readAsmConstArgsArray") || (a.readAsmConstArgsArray = function() {
  x("'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readAsmConstArgs") || (a.readAsmConstArgs = function() {
  x("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "mainThreadEM_ASM") || (a.mainThreadEM_ASM = function() {
  x("'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "jstoi_q") || (a.jstoi_q = function() {
  x("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "jstoi_s") || (a.jstoi_s = function() {
  x("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getExecutableName") || (a.getExecutableName = function() {
  x("'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "listenOnce") || (a.listenOnce = function() {
  x("'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "autoResumeAudioContext") || (a.autoResumeAudioContext = function() {
  x("'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "dynCallLegacy") || (a.dynCallLegacy = function() {
  x("'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getDynCaller") || (a.getDynCaller = function() {
  x("'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "dynCall") || (a.dynCall = function() {
  x("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "callRuntimeCallbacks") || (a.callRuntimeCallbacks = function() {
  x("'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "abortStackOverflow") || (a.abortStackOverflow = function() {
  x("'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "reallyNegative") || (a.reallyNegative = function() {
  x("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "unSign") || (a.unSign = function() {
  x("'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "reSign") || (a.reSign = function() {
  x("'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "formatString") || (a.formatString = function() {
  x("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "PATH") || (a.PATH = function() {
  x("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "PATH_FS") || (a.PATH_FS = function() {
  x("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SYSCALLS") || (a.SYSCALLS = function() {
  x("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "syscallMmap2") || (a.syscallMmap2 = function() {
  x("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "syscallMunmap") || (a.syscallMunmap = function() {
  x("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "flush_NO_FILESYSTEM") || (a.flush_NO_FILESYSTEM = function() {
  x("'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "JSEvents") || (a.JSEvents = function() {
  x("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "specialHTMLTargets") || (a.specialHTMLTargets = function() {
  x("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "maybeCStringToJsString") || (a.maybeCStringToJsString = function() {
  x("'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "findEventTarget") || (a.findEventTarget = function() {
  x("'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "findCanvasEventTarget") || (a.findCanvasEventTarget = function() {
  x("'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "polyfillSetImmediate") || (a.polyfillSetImmediate = function() {
  x("'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "demangle") || (a.demangle = function() {
  x("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "demangleAll") || (a.demangleAll = function() {
  x("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "jsStackTrace") || (a.jsStackTrace = function() {
  x("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackTrace") || (a.stackTrace = function() {
  x("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getEnvStrings") || (a.getEnvStrings = function() {
  x("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "checkWasiClock") || (a.checkWasiClock = function() {
  x("'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToI64") || (a.writeI53ToI64 = function() {
  x("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToI64Clamped") || (a.writeI53ToI64Clamped = function() {
  x("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToI64Signaling") || (a.writeI53ToI64Signaling = function() {
  x("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToU64Clamped") || (a.writeI53ToU64Clamped = function() {
  x("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeI53ToU64Signaling") || (a.writeI53ToU64Signaling = function() {
  x("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readI53FromI64") || (a.readI53FromI64 = function() {
  x("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readI53FromU64") || (a.readI53FromU64 = function() {
  x("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "convertI32PairToI53") || (a.convertI32PairToI53 = function() {
  x("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "convertU32PairToI53") || (a.convertU32PairToI53 = function() {
  x("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exceptionLast") || (a.exceptionLast = function() {
  x("'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exceptionCaught") || (a.exceptionCaught = function() {
  x("'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ExceptionInfoAttrs") || (a.ExceptionInfoAttrs = function() {
  x("'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ExceptionInfo") || (a.ExceptionInfo = function() {
  x("'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "CatchInfo") || (a.CatchInfo = function() {
  x("'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exception_addRef") || (a.exception_addRef = function() {
  x("'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exception_decRef") || (a.exception_decRef = function() {
  x("'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "Browser") || (a.Browser = function() {
  x("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "funcWrappers") || (a.funcWrappers = function() {
  x("'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getFuncWrapper") || (a.getFuncWrapper = function() {
  x("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setMainLoop") || (a.setMainLoop = function() {
  x("'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "tempFixedLengthArray") || (a.tempFixedLengthArray = function() {
  x("'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "miniTempWebGLFloatBuffers") || (a.miniTempWebGLFloatBuffers = function() {
  x("'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "heapObjectForWebGLType") || (a.heapObjectForWebGLType = function() {
  x("'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "heapAccessShiftForWebGLHeap") || (a.heapAccessShiftForWebGLHeap = function() {
  x("'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GL") || (a.GL = function() {
  x("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGet") || (a.emscriptenWebGLGet = function() {
  x("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "computeUnpackAlignedImageSize") || (a.computeUnpackAlignedImageSize = function() {
  x("'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGetTexPixelData") || (a.emscriptenWebGLGetTexPixelData = function() {
  x("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGetUniform") || (a.emscriptenWebGLGetUniform = function() {
  x("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emscriptenWebGLGetVertexAttrib") || (a.emscriptenWebGLGetVertexAttrib = function() {
  x("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "writeGLArray") || (a.writeGLArray = function() {
  x("'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "AL") || (a.AL = function() {
  x("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL_unicode") || (a.SDL_unicode = function() {
  x("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL_ttfContext") || (a.SDL_ttfContext = function() {
  x("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL_audio") || (a.SDL_audio = function() {
  x("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL") || (a.SDL = function() {
  x("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "SDL_gfx") || (a.SDL_gfx = function() {
  x("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GLUT") || (a.GLUT = function() {
  x("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "EGL") || (a.EGL = function() {
  x("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GLFW_Window") || (a.GLFW_Window = function() {
  x("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GLFW") || (a.GLFW = function() {
  x("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "GLEW") || (a.GLEW = function() {
  x("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "IDBStore") || (a.IDBStore = function() {
  x("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "runAndAbortIfError") || (a.runAndAbortIfError = function() {
  x("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_handle_array") || (a.emval_handle_array = function() {
  x("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_free_list") || (a.emval_free_list = function() {
  x("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_symbols") || (a.emval_symbols = function() {
  x("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "init_emval") || (a.init_emval = function() {
  x("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "count_emval_handles") || (a.count_emval_handles = function() {
  x("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "get_first_emval") || (a.get_first_emval = function() {
  x("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getStringOrSymbol") || (a.getStringOrSymbol = function() {
  x("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "requireHandle") || (a.requireHandle = function() {
  x("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_newers") || (a.emval_newers = function() {
  x("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "craftEmvalAllocator") || (a.craftEmvalAllocator = function() {
  x("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_get_global") || (a.emval_get_global = function() {
  x("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "emval_methodCallers") || (a.emval_methodCallers = function() {
  x("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "InternalError") || (a.InternalError = function() {
  x("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "BindingError") || (a.BindingError = function() {
  x("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UnboundTypeError") || (a.UnboundTypeError = function() {
  x("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "PureVirtualError") || (a.PureVirtualError = function() {
  x("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "init_embind") || (a.init_embind = function() {
  x("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "throwInternalError") || (a.throwInternalError = function() {
  x("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "throwBindingError") || (a.throwBindingError = function() {
  x("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "throwUnboundTypeError") || (a.throwUnboundTypeError = function() {
  x("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ensureOverloadTable") || (a.ensureOverloadTable = function() {
  x("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "exposePublicSymbol") || (a.exposePublicSymbol = function() {
  x("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "replacePublicSymbol") || (a.replacePublicSymbol = function() {
  x("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "extendError") || (a.extendError = function() {
  x("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "createNamedFunction") || (a.createNamedFunction = function() {
  x("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registeredInstances") || (a.registeredInstances = function() {
  x("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getBasestPointer") || (a.getBasestPointer = function() {
  x("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registerInheritedInstance") || (a.registerInheritedInstance = function() {
  x("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "unregisterInheritedInstance") || (a.unregisterInheritedInstance = function() {
  x("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getInheritedInstance") || (a.getInheritedInstance = function() {
  x("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getInheritedInstanceCount") || (a.getInheritedInstanceCount = function() {
  x("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getLiveInheritedInstances") || (a.getLiveInheritedInstances = function() {
  x("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registeredTypes") || (a.registeredTypes = function() {
  x("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "awaitingDependencies") || (a.awaitingDependencies = function() {
  x("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "typeDependencies") || (a.typeDependencies = function() {
  x("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registeredPointers") || (a.registeredPointers = function() {
  x("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "registerType") || (a.registerType = function() {
  x("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "whenDependentTypesAreResolved") || (a.whenDependentTypesAreResolved = function() {
  x("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "embind_charCodes") || (a.embind_charCodes = function() {
  x("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "embind_init_charCodes") || (a.embind_init_charCodes = function() {
  x("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "readLatin1String") || (a.readLatin1String = function() {
  x("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getTypeName") || (a.getTypeName = function() {
  x("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "heap32VectorToArray") || (a.heap32VectorToArray = function() {
  x("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "requireRegisteredType") || (a.requireRegisteredType = function() {
  x("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "getShiftFromSize") || (a.getShiftFromSize = function() {
  x("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "integerReadValueFromPointer") || (a.integerReadValueFromPointer = function() {
  x("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "enumReadValueFromPointer") || (a.enumReadValueFromPointer = function() {
  x("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "floatReadValueFromPointer") || (a.floatReadValueFromPointer = function() {
  x("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "simpleReadValueFromPointer") || (a.simpleReadValueFromPointer = function() {
  x("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "runDestructors") || (a.runDestructors = function() {
  x("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "new_") || (a.new_ = function() {
  x("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "craftInvokerFunction") || (a.craftInvokerFunction = function() {
  x("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "embind__requireFunction") || (a.embind__requireFunction = function() {
  x("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "tupleRegistrations") || (a.tupleRegistrations = function() {
  x("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "structRegistrations") || (a.structRegistrations = function() {
  x("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "genericPointerToWireType") || (a.genericPointerToWireType = function() {
  x("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "constNoSmartPtrRawPointerToWireType") || (a.constNoSmartPtrRawPointerToWireType = function() {
  x("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "nonConstNoSmartPtrRawPointerToWireType") || (a.nonConstNoSmartPtrRawPointerToWireType = function() {
  x("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "init_RegisteredPointer") || (a.init_RegisteredPointer = function() {
  x("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer") || (a.RegisteredPointer = function() {
  x("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer_getPointee") || (a.RegisteredPointer_getPointee = function() {
  x("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer_destructor") || (a.RegisteredPointer_destructor = function() {
  x("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer_deleteObject") || (a.RegisteredPointer_deleteObject = function() {
  x("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredPointer_fromWireType") || (a.RegisteredPointer_fromWireType = function() {
  x("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "runDestructor") || (a.runDestructor = function() {
  x("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "releaseClassHandle") || (a.releaseClassHandle = function() {
  x("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "finalizationGroup") || (a.finalizationGroup = function() {
  x("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "detachFinalizer_deps") || (a.detachFinalizer_deps = function() {
  x("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "detachFinalizer") || (a.detachFinalizer = function() {
  x("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "attachFinalizer") || (a.attachFinalizer = function() {
  x("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "makeClassHandle") || (a.makeClassHandle = function() {
  x("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "init_ClassHandle") || (a.init_ClassHandle = function() {
  x("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle") || (a.ClassHandle = function() {
  x("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_isAliasOf") || (a.ClassHandle_isAliasOf = function() {
  x("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "throwInstanceAlreadyDeleted") || (a.throwInstanceAlreadyDeleted = function() {
  x("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_clone") || (a.ClassHandle_clone = function() {
  x("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_delete") || (a.ClassHandle_delete = function() {
  x("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "deletionQueue") || (a.deletionQueue = function() {
  x("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_isDeleted") || (a.ClassHandle_isDeleted = function() {
  x("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "ClassHandle_deleteLater") || (a.ClassHandle_deleteLater = function() {
  x("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "flushPendingDeletes") || (a.flushPendingDeletes = function() {
  x("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "delayFunction") || (a.delayFunction = function() {
  x("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "setDelayFunction") || (a.setDelayFunction = function() {
  x("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "RegisteredClass") || (a.RegisteredClass = function() {
  x("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "shallowCopyInternalPointer") || (a.shallowCopyInternalPointer = function() {
  x("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "downcastPointer") || (a.downcastPointer = function() {
  x("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "upcastPointer") || (a.upcastPointer = function() {
  x("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "validateThis") || (a.validateThis = function() {
  x("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "char_0") || (a.char_0 = function() {
  x("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "char_9") || (a.char_9 = function() {
  x("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "makeLegalFunctionName") || (a.makeLegalFunctionName = function() {
  x("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "Fetch") || (a.Fetch = function() {
  x("'Fetch' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "__emscripten_fetch_delete_cached_data") || (a.__emscripten_fetch_delete_cached_data = function() {
  x("'__emscripten_fetch_delete_cached_data' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "__emscripten_fetch_load_cached_data") || (a.__emscripten_fetch_load_cached_data = function() {
  x("'__emscripten_fetch_load_cached_data' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "__emscripten_fetch_cache_data") || (a.__emscripten_fetch_cache_data = function() {
  x("'__emscripten_fetch_cache_data' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "__emscripten_fetch_xhr") || (a.__emscripten_fetch_xhr = function() {
  x("'__emscripten_fetch_xhr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "warnOnce") || (a.warnOnce = function() {
  x("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackSave") || (a.stackSave = function() {
  x("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackRestore") || (a.stackRestore = function() {
  x("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stackAlloc") || (a.stackAlloc = function() {
  x("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "AsciiToString") || (a.AsciiToString = function() {
  x("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToAscii") || (a.stringToAscii = function() {
  x("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UTF16ToString") || (a.UTF16ToString = function() {
  x("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToUTF16") || (a.stringToUTF16 = function() {
  x("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "lengthBytesUTF16") || (a.lengthBytesUTF16 = function() {
  x("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "UTF32ToString") || (a.UTF32ToString = function() {
  x("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "stringToUTF32") || (a.stringToUTF32 = function() {
  x("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "lengthBytesUTF32") || (a.lengthBytesUTF32 = function() {
  x("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "allocateUTF8") || (a.allocateUTF8 = function() {
  x("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(a, "allocateUTF8OnStack") || (a.allocateUTF8OnStack = function() {
  x("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
a.writeStackCookie = Ia;
a.checkStackCookie = Ja;
Object.getOwnPropertyDescriptor(a, "ALLOC_NORMAL") || Object.defineProperty(a, "ALLOC_NORMAL", {configurable:!0, get:function() {
  x("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(a, "ALLOC_STACK") || Object.defineProperty(a, "ALLOC_STACK", {configurable:!0, get:function() {
  x("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
var cc;
Ta = function dc() {
  cc || ec();
  cc || (Ta = dc);
};
function ec() {
  function b() {
    if (!cc && (cc = !0, a.calledRun = !0, !ta)) {
      Ja();
      assert(!Qa);
      Qa = !0;
      gb(Na);
      Ja();
      gb(Oa);
      if (a.onRuntimeInitialized) {
        a.onRuntimeInitialized();
      }
      assert(!a._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
      Ja();
      if (a.postRun) {
        for ("function" == typeof a.postRun && (a.postRun = [a.postRun]); a.postRun.length;) {
          var c = a.postRun.shift();
          Pa.unshift(c);
        }
      }
      gb(Pa);
    }
  }
  if (!(0 < R)) {
    Ia();
    if (a.preRun) {
      for ("function" == typeof a.preRun && (a.preRun = [a.preRun]); a.preRun.length;) {
        Ra();
      }
    }
    gb(Ma);
    0 < R || (a.setStatus ? (a.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        a.setStatus("");
      }, 1);
      b();
    }, 1)) : b(), ta || Ja());
  }
}
a.run = ec;
if (a.preInit) {
  for ("function" == typeof a.preInit && (a.preInit = [a.preInit]); 0 < a.preInit.length;) {
    a.preInit.pop()();
  }
}
noExitRuntime = !0;
ec();

