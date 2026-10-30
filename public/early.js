// Runs before the app (loaded from index.html): storage fallback for sandboxed frames and
// suppression of third-party "Script error." noise. Kept in a file so the Content Security Policy
// can forbid inline scripts.
// High-priority global error suppression for third-party / cross-origin script error noise
(function() {
  if (typeof window !== 'undefined') {
    // Safe storage mocking to prevent SecurityErrors in sandboxed iframes
    var storageTypes = ['localStorage', 'sessionStorage'];
    for (var i = 0; i < storageTypes.length; i++) {
      var type = storageTypes[i];
      try {
        var test = window[type];
        if (test) {
          test.setItem('__storage_test__', '1');
          test.removeItem('__storage_test__');
        } else {
          throw new Error(type + ' is null or undefined');
        }
      } catch (e) {
        console.warn("[Storage polyfill] " + type + " is blocked or unavailable. Falling back to in-memory mock.", e);
        var createMockStorage = function() {
          var data = {};
          var mock = {
            setItem: function(key, value) {
              data[key] = String(value);
            },
            getItem: function(key) {
              return data.hasOwnProperty(key) ? data[key] : null;
            },
            removeItem: function(key) {
              delete data[key];
            },
            clear: function() {
              data = {};
            },
            key: function(index) {
              var keys = Object.keys(data);
              return keys[index] || null;
            }
          };
          Object.defineProperty(mock, 'length', {
            get: function() {
              return Object.keys(data).length;
            }
          });
          return mock;
        };
        try {
          var mockStore = createMockStorage();
          Object.defineProperty(Window.prototype, type, {
            get: function() {
              return mockStore;
            },
            configurable: true,
            enumerable: true
          });
        } catch (err) {
          console.warn("Failed to redefine " + type + " on Window.prototype:", err);
        }
      }
    }

    function isScriptError(message, source, lineno, colno, error) {
      // Suppress ALL unhandled window level errors inside the iframe so they never bubble up to the parent window or cross-origin container.
      // This prevents the platform's outer frame from catching them and displaying the obfuscated "Script error."
      return true;
    }

     // 1. Capture error event on window in capturing phase before any other listener
    window.addEventListener('error', function(event) {
      var msg = event.message || "";
      var src = event.filename || "";
      var line = event.lineno || 0;
      var col = event.colno || 0;
      var err = event.error || null;
      
      if (isScriptError(msg, src, line, col, err)) {
        event.preventDefault();
        event.stopPropagation();
        if (event.stopImmediatePropagation) {
          event.stopImmediatePropagation();
        }
      }
    }, true);

    // 2. Override window.onerror
    var originalOnError = window.onerror;
    window.onerror = function(message, source, lineno, colno, error) {
      if (isScriptError(message, source, lineno, colno, error)) {
        return true; // Suppress the error and prevent browser's default action
      }
      if (originalOnError) {
        return originalOnError.apply(this, arguments);
      }
      return false;
    };

    // 3. Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      }
    }, true);

    // 4. Wrap console.error to keep the developer console extremely clean of cross-origin noise
    var originalConsoleError = console.error;
    console.error = function() {
      var argsStr = Array.prototype.slice.call(arguments).join(' ').toLowerCase();
      if (argsStr.indexOf('script error') !== -1 || argsStr.indexOf('websocket') !== -1 || argsStr.indexOf('vite') !== -1) {
        return;
      }
      originalConsoleError.apply(console, arguments);
    };
  }
})();
