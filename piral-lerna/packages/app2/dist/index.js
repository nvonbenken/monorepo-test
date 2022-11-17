//@pilet v:2(rolluppr_app2,{})
System.register(["react", "react-router-dom"], function(exports, module) {
  "use strict";
  var React, Link;
  return {
    setters: [function(module2) {
      React = module2;
    }, function(module2) {
      Link = module2.Link;
    }],
    execute: function() {
      exports("setup", setup);
      const Page = React.lazy(() => module.import("./Page.js"));
      function setup(app) {
        app.registerPage("/app2", Page);
        app.showNotification("Hello from Piral!", {
          autoClose: 2e3
        });
        app.registerMenu(() => /* @__PURE__ */ React.createElement(Link, {
          to: "/app2"
        }, "App 2"));
        app.registerTile(() => /* @__PURE__ */ React.createElement("div", null, "Tile from app 2"), {
          initialColumns: 2,
          initialRows: 2
        });
      }
    }
  };
});
//# sourceMappingURL=index.js.map
