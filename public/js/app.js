"use strict";
var container = document.getElementById("app");
var showPhoto = function () {
    var output = "\n        <div class=\"card\">\n            <h3>Photo</h3>\n            <div>Hi from app.ts!</div>\n        </div>\n    ";
    container.innerHTML += output;
};
var showGallery = function () {
    for (var i = 1; i <= 24; i++) {
        showPhoto();
    }
};
showGallery();
