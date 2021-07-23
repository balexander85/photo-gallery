"use strict";
var container = document.getElementById("app");
var showGallery = function () {
    var output = "\n        <div>Gallery</div>\n        <div>Hi from app.ts!</div>\n    ";
    container.innerHTML += output;
};
showGallery();
