let mix = require("laravel-mix");

mix
  .copy("src/english.html", "dist/coco-en.html")
  .copy("src/czech.html", "dist/coco-cs.html")
  .postCss("src/css/app.css", "dist/", [require("tailwindcss")]);
