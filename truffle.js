var DefaultBuilder = require("truffle-default-builder");

module.exports = {
  build: new DefaultBuilder({
    "index.html": "index.html",
    "app.js": [
      // "vendor/angular/angular.js",
      // "vendor/angular-route/angular-route.js",
      "vendor/ionic/js/ionic.bundle.js",
      "vendor/angular-toastr/dist/angular-toastr.tpls.js",
      "javascript/app.js",
      // "javascript/controllers/main.js",
      // "javascript/controllers/sendfunds.js",
      // "javascript/controllers/showevents.js",
      // "javascript/controllers/permissions.js",
      "javascript/controllers/packagesController.js",
      "javascript/controllers/menuController.js",
      "javascript/controllers/smartcontractController.js",
      "javascript/controllers/packagedetailsController.js",
      "javascript/services/dappservice.js"
    ],
    "app.css": [
      "vendor/ionic/css/ionic.min.css",
      "vendor/angular-toastr/dist/angular-toastr.css",
      "stylesheets/app.css"
    
    ],
    "images/": "images/",
    "views/": "views/",
    "lib/":"lib/",
    "fonts/":[
      "vendor/ionic/fonts/ionicons.ttf",
      "vendor/ionic/fonts/ionicons.woff"
    ]
    
  }),

  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // match any network
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: "*" // match any network
    }
  }
};
