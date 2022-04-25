"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
console.log(lodash_1["default"].shuffle([1, 2, 3, 4]));
var myApp;
(function (myApp) {
    var hello = "hello in namespace";
    myApp.name = "Quill";
})(myApp || (myApp = {}));
var name = myApp.name;
